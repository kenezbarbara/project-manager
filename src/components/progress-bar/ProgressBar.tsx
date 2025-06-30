export default function ProgressBar() {
  return (
    <div className="progress" role="progressbar" style={{ height: '20px' }}>
      <div className="progress-bar bg-info" style={{ width: `${100}%` }}>
        {0}%
      </div>
    </div>
  )
}
