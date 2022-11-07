import { IInitialValue } from '@context/ChatProvider'
interface Iprops {
  user: string
  message: string
}
export const MessageOther = ({ message, user }: Iprops) => {
  return (
    <div className=" flex flex-col  ">
      <div className="w-min p-[7px] bg-PanelBg rounded-md">
        <h3 className="text-[12.8px] text-green-500 font-bold">{user}</h3>
        <p className="text-[14.2px] text-white">{message}</p>
      </div>
    </div>
  )
}
