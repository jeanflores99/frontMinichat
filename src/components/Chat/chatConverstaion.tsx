/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { MessageMe, MessageOther } from '@components/index'
import { ContextChatConfig, IContext } from '@context/ChatProvider'

export const ChatConverstaion = () => {
  const { data } = ContextChatConfig() as IContext
 
  return (
    <div className=" h-[84vh] overflow-y-auto ">
      <div className="mx-auto w-[90%] flex flex-col gap-1 py-2">
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
      </div>
    </div>
  )
}
