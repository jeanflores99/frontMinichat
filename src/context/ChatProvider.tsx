import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useContext,
  useEffect,
} from 'react'

export interface IChats {
  user: string
  message: string
  me?: boolean
}

export interface IData {
  meAlias: string
  chats: IChats[]
}
export interface IContext {
  data: IData
  setData: Dispatch<SetStateAction<IData>>
}

export const InitialValue: IData = {
  meAlias: 'AliasDefault',
  chats: [],
}

export const ContextChat = createContext<IContext | {}>({})
interface Iprops {
  children: ReactNode
}
export const ChatProvider = ({ children }: Iprops) => {
  const [data, setData] = useState<IData>(InitialValue)

  useEffect(() => {}, [data])

  return (
    <ContextChat.Provider value={{ data, setData }}>
      {children}
    </ContextChat.Provider>
  )
}

export const ContextChatConfig = () => useContext(ContextChat)
