interface Iprops {
  message: string
  //   me: boolean
}
export const MessageMe = ({ message }: Iprops) => {
  return (
    <div className=" flex flex-col items-end ">
      <div className="w-min  p-[7px] bg-bgMiMessage rounded-md">
        <p className="text-[14.2px] text-white ">{message}</p>
      </div>
    </div>
  )
}
