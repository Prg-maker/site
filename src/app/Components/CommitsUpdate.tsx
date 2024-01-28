"use client";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import axios from "axios";
import config from '../../../config/config'
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverContent,
  Flex,
  Avatar,
  Box,
  TextArea,
  PopoverClose,
  Button,
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  Separator,
} from "@radix-ui/themes";

import { CommitComponent } from "./CommitComponent";
import CommitComponentProps from "../types/typesCommit";
import { useEffect, useState } from "react";
import CommitProps from "../types/typesCommit";

interface PropsCommit {
  sha: string;
  commit: {
    committer: {
      name: string;
      date: string;
    };
    message: string;
  };
}

export function CommitsUpdates() {
  const [commits, setCommits] = useState<PropsCommit[]>();
  let lengthCommit = commits?.length;
  let i = 0;

  async function get() {
    const { data } = await axios.get<PropsCommit[]>(
      "https://api.github.com/repos/prg-maker/site/commits",
      {
        headers: {
          Authorization: config.base
        },
      }
    );
    setCommits(data);
  }

  get();

  return (
    <PopoverRoot>
      <PopoverTrigger>
        <button className="p-2 rounded-lg hover:bg-[#f7f7f7]">
          <AccessTimeIcon className="w-5" />
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-[360px]">
        <TabsRoot>
          <TabsList>
            <TabsTrigger value="commits">Updates</TabsTrigger>
          </TabsList>
          <Box px="4" py="4">
            <TabsContent value="commits" className=" flex  flex-col gap-4">
              {commits?.map((commit) => {
                {
                  if (i == lengthCommit) {
                    return (
                      <CommitComponent
                        key={commit.sha}
                        date={commit.commit.committer.date}
                        message={commit.commit.message}
                        name={commit.commit.committer.name}
                      />
                    );
                  } else {
                    i++;
                    return (
                      <>
                        <CommitComponent
                          key={commit.sha}
                          date={commit.commit.committer.date}
                          message={commit.commit.message}
                          name={commit.commit.committer.name}
                        />
                        <div className="border-[#d6d6d6] border-b border-solid" />
                      </>
                    );
                  }
                }
              })}
            </TabsContent>
          </Box>
        </TabsRoot>
      </PopoverContent>
    </PopoverRoot>
  );
}
