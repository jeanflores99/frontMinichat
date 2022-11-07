import { useState, useContext } from 'react'
import { Carita, Clip, Microphone } from '@svg/index'
import { ContextSocket, ContextSocketConfig } from '@context/SocketProvider'

const InitialValue = {
  user: '',
  message: '',
}

export const ChatFooter = () => {
  const { Socket } = ContextSocketConfig()
  const [data, setdata] = useState(InitialValue)

  // useEffect(() => {}, [message])

  return (
    <div className="w-full h-[62px]  flex flex-row items-center justify-around  bg-PanelBg">
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
          onChange={({ target }) => setdata({ ...data, message: target.value })}
          value={data?.message || ''}
          placeholder="Escriba un mensaje aquí"
          className="w-full h-full  bg-transparent outline-none"
        />
      </div>

      <div
        className="w-[52px] h-[40px] flex items-center justify-center mr-2"
        onClick={() => {
          Socket.emit('message', data)
          setdata(InitialValue)
        }}
      >
        <Microphone className="w-[24px] h-[24px]" />
      </div>
    </div>
  )
}
