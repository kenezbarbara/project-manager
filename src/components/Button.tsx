export default function Button({
  text,
  iconClass,
}: {
  text: string
  iconClass?: string
}) {
  return (
    <button className="btn btn-outline-light mt-2">
      <i className={`${iconClass} me-2 icon-white icon-small`}></i>
      {text}
    </button>
  )
}
