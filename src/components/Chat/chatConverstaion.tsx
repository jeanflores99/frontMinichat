export const ChatConverstaion = () => {
  return (
    <div className=" h-[84vh] overflow-y-auto ">
      <div className="mx-auto w-[90%] flex flex-col gap-1">
        {/* mensaje de otros*/}
        <div className=" flex flex-col  ">
          <div className="w-min  p-[7px] bg-PanelBg rounded-md">
            <h3 className="text-[12.8px] text-green-500 font-bold">
              Lachistosa
            </h3>
            <p className="text-[14.2px] text-white">Menes</p>
          </div>
        </div>
        {/* mensaje mio*/}
        <div className=" flex flex-col items-end ">
          <div className="w-min  p-[7px] bg-bgMiMessage rounded-md">
            <p className="text-[14.2px] text-white ">Menes</p>
          </div>
        </div>
      </div>
    </div>
  )
}
