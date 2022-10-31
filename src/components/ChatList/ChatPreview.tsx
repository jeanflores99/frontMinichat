interface Iprops {
  img?: string | JSX.Element
  newMessage?: boolean
  tittle: string
  message: string
  hour: string
}
export const ChatPreview = ({ img, newMessage, message, tittle }: Iprops) => {
  return (
    <div className="h-[72px] w-full border flex flex-row p-2">
      <div className="w-[20px]"></div>
      <div className="w-[80px]"></div>

    </div>
  )
}
