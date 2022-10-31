import Nextimage from 'next/image'
import { FaUsers } from 'react-icons/fa'
import { StatusUnRead, Chat, Menu } from '@svg/index'
interface Iprops {
  Class?: string
}
const urlImg =
  'https://pps.whatsapp.net/v/t61.24694-24/309469197_4090169844541361_7265452733483438947_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQYyL5CGJwNo7IDw4LkqgMVu3KQD3KrLi8n10FOMmLZpQ&oe=636D106D'
export const ChatListHeader = ({ Class }: Iprops) => {
  return (
    <div
      className={`${Class} h-[60px] w-full bg-PanelBg flex flex-row justify-between px-[16px] py-[10px] `}
    >
      <div>
        <div className="h-10 w-10 relative">
          <Nextimage
            src={urlImg}
            fill
            alt="img_user"
            className="absolute w-full h-full rounded-full"
          />
        </div>
      </div>
      <div className=" flex fle-row justify-between w-[190px] h-[40px] items-center text-PanelIcon">
        <FaUsers className="w-6 h-6" />
        <StatusUnRead className="w-6 h-6" />
        <Chat className="w-6 h-6" />
        <Menu className="w-6 h-6" />
      </div>
    </div>
  )
}
