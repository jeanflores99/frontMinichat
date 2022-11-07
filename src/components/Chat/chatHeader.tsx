import { DataChatPreview } from '@mock/dataChatPreview'
import { Menu } from '@svg/index'
import NextImage from 'next/image'
interface Iprops {
  tittle: string
  img: string
}
export const ChatHeader = () => {
  return (
    <div className="h-[60px] w-full bg-PanelBg flex flex-row justify-between px-[16px] py-[10px]">
      <div className=" flex flex-row gap-4">
        <div className="">
          <div className="relative w-10 h-10 rounded-full">
            <NextImage
              alt="img_chat"
              fill
              src={DataChatPreview[0].img}
              className="absolute w-full h-full  rounded-full"
            />
          </div>
        </div>
        <div className=" my-auto">
          <div>{DataChatPreview[0].tittle || ''}</div>
        </div>
      </div>
      <div className="w-10 h-10 p-2 flex items-center ">
        <Menu className="w-6 h-6" />
      </div>
    </div>
  )
}
