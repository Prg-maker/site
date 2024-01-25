import { DialogContent, DialogRoot, DialogTrigger, Text,DialogTitle , TabsRoot, TabsList, TabsTrigger, TabsContent} from "@radix-ui/themes";

export function ShareButton() {
  return (
    <DialogRoot>
        <DialogTrigger>
            <button className=" p-2 rounded-lg hover:bg-[#f7f7f7]">Share</button>
        </DialogTrigger>

        <DialogContent>
           
           <TabsRoot>
                <TabsList>
                    <TabsTrigger value="compartilhar">
                        share
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="compartilhar">
                   <div className="mt-4">
                    <button>
                            <Text size="2">
                                Copy link
                            </Text>
                        </button>
                   </div>
                </TabsContent>

           </TabsRoot>

        </DialogContent>
    </DialogRoot>
  );
}
