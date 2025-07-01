export default function ProgressBar({ currentStep }: { currentStep: number }) {
  const renderPercentage = () => {
    switch (currentStep) {
      case 1:
        return 33
      case 2:
        return 66
      case 3:
        return 100
      default:
        return 0
    }
  }
  return (
    <div className="progress" role="progressbar" style={{ height: '20px' }}>
      <div
        className="progress-bar bg-info"
        style={{ width: `${renderPercentage()}%` }}
      >
        {renderPercentage()}%
      </div>
    </div>
  )
}
