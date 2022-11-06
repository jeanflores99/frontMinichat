/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
// import { io, ManagerOptions, SocketOptions } from 'socket.io-client'
// const socket = io('http://localhost:3333', { transports: ['websocket'] })
export const useSocket = (socket: any) => {
  // const EmitMessage = (txt: string) => {
  //   socket.emit('message', txt)
  // }
  useEffect(() => {
    socket.on('message', (newmsg: string) => console.log(newmsg))
    return () => {
      socket.off('message')
    }
  }, [])
  // return {
  //   EmitMessage,
  // }
}
