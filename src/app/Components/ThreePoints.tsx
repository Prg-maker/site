import {
  Card,
  Avatar,
  Flex,
  Box,
  Text,
  DropdownMenu,
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Separator,
  Switch
} from "@radix-ui/themes";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export function ThreePoints() {
  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger>
        <button className="p-2 rounded-lg hover:bg-[#f7f7f7]">
          <MoreHorizIcon className="w-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <p className="text-sm text-[#929292] mb-2">Style</p>
        <div className="flex gap-3 px-3">
          <Box  width="9" height="9" className=" flex flex-col items-center justify-center rounded-lg cursor-pointer hover:bg-[#EAEAEA]">
            <Text className="text-xl " >Ag</Text>
            <span className=" text-xs text-[#929292]" >Default</span>
          </Box>

          <Box width="9" height="9" className=" flex flex-col items-center justify-center rounded-lg cursor-pointer hover:bg-[#EAEAEA]">
            <Text className="text-xl font-sans" >Ag</Text>
            <span className=" text-xs font-sans text-[#929292]" >Serif</span>
          </Box>

          <Box width="9" height="9" className=" flex flex-col items-center justify-center rounded-lg cursor-pointer hover:bg-[#EAEAEA]">
            <Text className="text-xl font-fira-code" >Ag</Text>
            <span className=" text-xs  text-[#929292] font-fira-code"  >Fira Code</span>
          </Box>
        </div>


        <div className="h-[0.6px] mt-2 mb-4 w-full bg-zinc-300"></div>    

        <div className="px-2 ">
            <Flex justify="between">
                <span className="text-sm ">Small text</span>
                <Switch defaultChecked/>
            </Flex>
        
        </div>  

        <div className="px-2 mt-4 mb-4">
            <Flex justify="between">
                <span className="text-sm ">Theme dark</span>
                <Switch defaultChecked/>
            </Flex>
        
        </div>    
      </DropdownMenuContent>

    </DropdownMenuRoot>
  );
}
