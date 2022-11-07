import { useState, useContext } from 'react'
import { Carita, Clip, Microphone, SendMessage } from '@svg/index'
import { Show } from '@components/index'
import { ContextSocket, ContextSocketConfig } from '@context/SocketProvider'
import { ContextChatConfig, IContext } from '@context/ChatProvider'

interface InitialValue {
  // user: string
  message: string
}

export const ChatFooter = () => {
  const { Socket } = ContextSocketConfig()
  const { data: Datactx } = ContextChatConfig() as IContext
  const [data, setdata] = useState<InitialValue>({
    message: '',
    // user: Datactx.meAlias,
  })

  // useEffect(() => {}, [message])

  return (
    <div className="w-full h-[62px]   bg-PanelBg">
      <form
        className=" w-full h-full flex flex-row items-center justify-around"
        onSubmit={(e) => {
          e.preventDefault()
          Socket.emit('message', Object.assign({ data, user: Datactx.meAlias }))
          setdata((prev) => ({ ...prev, message: '' }))
        }}
      >
        <div className="w-[94px]  ml-2 h-[40px]  flex flex-row items-center justify-around">
          <Carita className="w-[26px] h-[26px]" />
          <Clip className="w-[24px] h-[24px]" />
        </div>
        {/* <div className="w-[40px] h-[40px] flex items-center justify-center"> */}
        {/* </div> */}

        <div className="w-full h-[42px] p-[10px] bg-BgInput rounded-lg">
          <input
            type={'text'}
            name="message"
            onChange={({ target }) =>
              setdata({ ...data, message: target.value })
            }
            value={data?.message || ''}
            placeholder="Escriba un mensaje aquí"
            className="w-full h-full  bg-transparent outline-none"
          />
        </div>

        <div
          className="w-[52px] h-[40px] flex items-center justify-center mr-2"
          onClick={() => {
            Socket.emit(
              'message',
              Object.assign({ data, user: Datactx.meAlias }),
            )

            setdata((prev) => ({ ...prev, message: '' }))
          }}
        >
          <Show
            condition={data.message.length > 0}
            isDefault={<Microphone className="w-[24px] h-[24px]" />}
          >
            <SendMessage className="w-[24px] h-[24px]" />
          </Show>
        </div>
      </form>
    </div>
  )
}
