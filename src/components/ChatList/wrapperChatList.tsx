import { DataChatPreview } from '@mock/dataChatPreview'
import {
  ChatListHeader,
  ChatSearch,
  ChatPreview,
} from '@components/index'
export const WrapperChatList = () => {
  return (
    <>
      <div className="absolute top-4 z-50 w-full">
        {/* Header Chat List */}
        <ChatListHeader />
        {/* Buscador del cat */}
        <ChatSearch />
      </div>

      {/* Chat List */}
      <div className="flex flex-col mt-[130px] gap-2 overflow-y-scroll h-[84vh]  scrollbar-thumb-colorHour scrollbar-track-transparent scrollbar-custom ">
        {DataChatPreview.map((obj, key) => (
          <ChatPreview {...obj} key={key} />
        ))}
      </div>
    </>
  )
}
