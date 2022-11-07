/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, ReactNode, useEffect, useContext } from 'react'
import { io } from 'socket.io-client'
import { ContextChatConfig, IChats, IContext } from '@context/ChatProvider'
const socket = io('http://localhost:3333', { transports: ['websocket'] })
export const ContextSocket = createContext({ Socket: socket })
interface Iprops {
  children: ReactNode
}
export const SocketProvider = ({ children }: Iprops) => {
  const { data, setData } = ContextChatConfig() as IContext
  useEffect(() => {
    socket.on('message', ({ message, user }: IChats) => {
      const previousChats = data.chats
      const currentMsg: IChats = {
        message: message,
        user: data.meAlias,
      }
      console.log(data)
      console.log(user)
      

      // const currentMssg = Object.assign(newmsg, {
      //   me: true,
      //   user: data.meAlias,
      // })
      previousChats.push(currentMsg)
      console.log(previousChats)
      setData((prev) => ({ ...prev, chats: previousChats }))
    })
    return () => {
      socket.off('message')
    }
  }, [])
  return (
    <ContextSocket.Provider value={{ Socket: socket }}>
      {children}
    </ContextSocket.Provider>
  )
}

export const ContextSocketConfig = () => useContext(ContextSocket)
