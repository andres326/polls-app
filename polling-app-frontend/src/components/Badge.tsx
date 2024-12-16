export const Badge = ({ text, classes }: { text: string, classes?: string }) => {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 max-h-[22px] text-xs font-medium ring-1 ring-inset ring-gray-500/10 ${classes}`}
    >
      {text}
    </span>
  )
}