/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react'
import { HeadTsx, WrapperChat, WrapperChatList } from '@components/index'
import { ContextChatConfig, IContext } from '@context/ChatProvider'
export default function Home() {
  const { data, setData } = ContextChatConfig() as IContext
  const [username, setusername] = useState('')
  // const id = useId()

  return (
    <div className="">
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        checked={data.meAlias == ''}
        id="my-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Como quieres que te llamemos?</h3>
          <div className="py-4">
            <input
              className="w-full input"
              placeholder="Escribe su username"
              value={username}
              onChange={({ target }) => setusername(target.value)}
            />
          </div>
          <div className="modal-action">
            <label
              htmlFor="my-modal"
              className="btn"
              onClick={() => {
                setData((prev) => ({ ...prev, meAlias: username }))
              }}
            >
              GO!
            </label>
          </div>
        </div>
      </div>

      <HeadTsx />
      <main className="relative w-full h-screen ">
        <div className="absolute  top-0 w-full h-full py-[3px] px-[54px] ">
          <div className=" flex flex-row  h-full ">
            {/* <div className="max-w-[480px] w-[30%] min-w-[346px] h-full relative">
              <WrapperChatList />
            </div> */}
            <div className="w-full pt-4">
              <WrapperChat />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
