import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SocketProvider } from '../context/SocketProvider'
import { ChatProvider } from '../context/ChatProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChatProvider>
      <SocketProvider>
        <Component {...pageProps} />
      </SocketProvider>
    </ChatProvider>
  )
}
