import { IDataChatPreview } from '@mock/dataChatPreview'
import NextImage from 'next/image'
export const ChatPreview = ({
  img,
  newMessage,
  message,
  tittle,
  hour,
}: IDataChatPreview) => {
  return (
    <div className="h-[73px] w-full flex flex-row p-2 ">
      <div className="w-[77px] h-full px-[14px] flex items-center">
        <div className="relative w-[49px] h-[49px]">
          <NextImage
            fill
            src={img}
            alt="img_ChatPreview"
            className="absolute w-full h-full rounded-full"
          />
        </div>
      </div>
      <div className=" w-full flex flex-row justify-between gap-2">
        <div className="w-full sflex flex-col">
          <p className="text-[17px] text-colorText1 font-semibold">{tittle}</p>
          <span className="text-sm text-colorText2 font-normal">{message}</span>
        </div>
        <div className="w-[25%] text-xs text-colorHour">{hour}</div>
      </div>
    </div>
  )
}
