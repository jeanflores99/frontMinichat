/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { MessageMe, MessageOther } from '@components/index'
import { ContextChatConfig, IContext } from '@context/ChatProvider'

export const ChatConverstaion = () => {
  const { data } = ContextChatConfig() as IContext

  // useEffect(() => {
  //   console.log(Chats)
  // }, [Chats])

  return (
    <div className=" h-[84vh] overflow-y-auto ">
      <div className="mx-auto w-[90%] flex flex-col gap-1">
        {/* todos los mensajes filtrando quien es el dueño*/}
        {data &&
          data.chats &&
          data.chats.map((obj, k) =>
            obj.me ? (
              <MessageMe message={obj.message} key={k} />
            ) : (
              <MessageOther message={obj.message} user={obj.user} key={k} />
            ),
          )}
        {/* <div className=" flex flex-col  ">
          <div className="w-min  p-[7px] bg-PanelBg rounded-md">
            <h3 className="text-[12.8px] text-green-500 font-bold">
              Lachistosa
            </h3>
            <p className="text-[14.2px] text-white">Menes</p>
          </div>
        </div> */}
        {/* mensaje mio*/}
        {/* <div className=" flex flex-col items-end ">
          <div className="w-min  p-[7px] bg-bgMiMessage rounded-md">
            <p className="text-[14.2px] text-white ">Menes</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}
