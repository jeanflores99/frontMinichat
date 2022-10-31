import { Search, Filter } from '@svg/index'
export const ChatSearch = () => {
  return (
    <div className="px-3 py-[6px] w-full h-[49px] flex flex-row items-center">
      <div className="rounded-lg w-full h-full bg-PanelBg flex flex-row items-center justify-around ">
        <div className="w-[10%] flex items-center  ">
          <Search className="w-6 h-6 mx-auto" />
        </div>
        <div className="w-[90%] flex items-center h-5">
          <input
            className="w-full h-full bg-transparent outline-none"
            placeholder="Buscar un chat o inicia uno nuevo"
          />
        </div>
      </div>
      <div className="w-auto flex items-center  px-2 h-full ">
        <Filter className="w-5 h-5" />
      </div>
    </div>
  )
}
