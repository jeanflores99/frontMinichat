import { createContext, ReactNode, useEffect } from 'react'
import { io } from 'socket.io-client'
const socket = io('http://localhost:3333', { transports: ['websocket'] })
export const ContextSocket = createContext({ Socket: socket })
interface Iprops {
  children: ReactNode
}
export const SocketProvider = ({ children }: Iprops) => {
  useEffect(() => {
    socket.on('message', (newmsg: string) => console.log(newmsg))
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
