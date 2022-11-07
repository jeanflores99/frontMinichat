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
  // alias: string
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
  meAlias: '',
  chats: [],
  // id: '',
}

export const ContextChat = createContext<IContext | {}>({})
interface Iprops {
  children: ReactNode
}
export const ChatProvider = ({ children }: Iprops) => {
  const [data, setData] = useState<IData>(InitialValue)

  useEffect(() => {
    console.log('efect data')
  }, [data])
  useEffect(() => {
    console.log('eeffct alias')
  }, [data.meAlias])

  return (
    <ContextChat.Provider value={{ data, setData }}>
      {children}
    </ContextChat.Provider>
  )
}

export const ContextChatConfig = () => useContext(ContextChat)
