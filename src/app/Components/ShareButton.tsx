import {
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogDescription,
  Flex,
  Button,
} from "@radix-ui/themes";

export function ShareButton() {
  return (
    <AlertDialogRoot>
      <AlertDialogTrigger>
        <button className=" p-2 rounded-lg hover:bg-[#f7f7f7]">Share</button>
      </AlertDialogTrigger>

      <AlertDialogContent className="mx-w-[450px]">
        <AlertDialogTitle>Obrigado por estar aqui.</AlertDialogTitle>
        <AlertDialogDescription>    
          Seria muito útil se você pudesse compartilhar este site com outras
          pessoas ou enviá-lo para empresas. Sua ajuda é apreciada!
        </AlertDialogDescription>


        <Flex className="w-full gap-3 mt-4" justify="end">
            <AlertDialogCancel>
                <Button  className="cursor-pointer"  color="red">
                    Cancel
                </Button>
            </AlertDialogCancel>

            <AlertDialogAction>
                <Button  className="cursor-pointer" variant="solid" color="green">
                    Copiar link
                </Button>
            </AlertDialogAction>
        </Flex>

      </AlertDialogContent>
    </AlertDialogRoot>
  );
}
