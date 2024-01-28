import { Flex, Avatar } from "@radix-ui/themes";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
interface CommitComponentProps{
   
    message:string
    date: string
    name:string
}

export function CommitComponent({date, message, name}:CommitComponentProps) {
    const fallbackName = name.charAt(0)

    const dateTime = date.split("T")
    const dia = dateTime[0]
  return (
    <Flex justify="between"  gap="4" className="w-full  gap-4">
      <div className="flex gap-4">
        <div className="flex justify-start">
          <Avatar fallback={fallbackName} radius="full" size="1" />
        </div>

        <div className="flex flex-col  gap-2">
          <p className="text-sm">
            {message}
          </p>

          <div>
          <span className="text-xs text-[#a1a09d]">{dia}</span>
            
          </div>
        </div>

      </div>
      <div className="flex justify-start ">
        <AccessTimeIcon className="w-4 text-[#a1a09d]" />
      </div>
    </Flex>
  );
}
