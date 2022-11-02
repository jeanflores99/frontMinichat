import { HeadTsx, WrapperChat, WrapperChatList } from '@components/index'
export default function Home() {
  return (
    <div className="">
      <HeadTsx />
      <main className="relative w-full h-screen ">
        <div className="absolute  top-0 w-full h-full py-[3px] px-[54px] ">
          <div className=" flex flex-row  h-full ">
            <div className="max-w-[480px] w-[30%] min-w-[346px] h-full relative">
              <WrapperChatList />
            </div>
            <div className="w-[70%] pt-4">
              <WrapperChat />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
