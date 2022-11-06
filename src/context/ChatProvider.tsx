import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'
interface ICtx {
  chat: string[]
  setChat: Dispatch<SetStateAction<string[]>>
}
export const ContextChat = createContext<ICtx | {}>({})
interface Iprops {
  children: ReactNode
}
export const ChatProvider = ({ children }: Iprops) => {
  const [chat, setChat] = useState()
  return (
    <ContextChat.Provider value={{ chat, setChat }}>
      {children}
    </ContextChat.Provider>
  )
}
