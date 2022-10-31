import { ChatPreview } from '@components/ChatList'
import {
  Container,
  HeadTsx,
  ChatListHeader,
  ChatSearch,
} from '@components/index'
export default function Home() {
  return (
    <div className="">
      <HeadTsx />
      <main className="">
        <Container>
          <div className=" flex flex-row">
            <div className="max-w-[480px] w-[30%] min-w-[346px] h-screen overflow-y-auto ">
              {/* Header Chat List */}
              <ChatListHeader />
              {/* Buscador del cat */}
              <ChatSearch />
              {/* Chat List */}
              <div className="flex flex-col">
                <ChatPreview />
              </div>
            </div>
            <div className=" w-[70%] border"></div>
          </div>
        </Container>
      </main>
    </div>
  )
}
