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
    socket.on('message', (newmsg: IChats) => {
      const previousChats = data.chats 
      previousChats.push(newmsg)
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
