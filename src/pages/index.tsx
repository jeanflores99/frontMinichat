import {
  Container,
  HeadTsx,
  ChatListHeader,
  ChatSearch,
  ChatPreview,
} from '@components/index'
import { DataChatPreview } from '@mock/dataChatPreview'
export default function Home() {
  return (
    <div className="">
      <HeadTsx />
      <main className="">
        <Container>
          <div className=" flex flex-row">
            <div className="max-w-[480px] w-[30%] min-w-[346px] h-screen overflow-y-scroll  scrollbar-thumb-colorHour scrollbar-track-transparent scrollbar-custom">
              <div className='sticky top-0 z-50'>
                {/* Header Chat List */}
                <ChatListHeader />
                {/* Buscador del cat */}
                <ChatSearch />
              </div>

              {/* Chat List */}
              <div className="flex flex-col ">
                {DataChatPreview.map((obj, key) => (
                  <ChatPreview {...obj} key={key} />
                ))}
              </div>
            </div>
            <div className=" w-[70%] "></div>
          </div>
        </Container>
      </main>
    </div>
  )
}
