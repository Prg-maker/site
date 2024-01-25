import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {PopoverRoot, PopoverTrigger, PopoverContent, Flex, Avatar , Box, TextArea , PopoverClose, Button} from '@radix-ui/themes'

export function ButtonComment() {
  return (
    <PopoverRoot>
        <PopoverTrigger>
            <button className="p-2 rounded-lg hover:bg-[#f7f7f7]">
                <ChatBubbleOutlineIcon className="w-5 " />
            </button>
        </PopoverTrigger>

        <PopoverContent className="w-[360px]">
            <Flex>
                <Avatar
                    size="2"
                    src="http://github.com/prg-maker.png"
                    fallback="D"
                    radius="full"
                />

            </Flex>

            <Box grow="1">
                <TextArea className="h-[80px] mt-2" placeholder="Escreva um comentário"/>
                <div className="mt-2 flex w-full justify-end">
                    <PopoverClose>
                        <Button size="1">
                            Enviar
                        </Button>
                    </PopoverClose>
                </div>
            </Box>
        </PopoverContent>
      
    </PopoverRoot>
  );
}
