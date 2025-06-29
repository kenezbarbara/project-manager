interface ProjectCardProps {
  name: string
  description: string
  imageUrl: string
}

export default function ProjectCard({
  name,
  description,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className="col">
      <div className="card text-center shadow mx-auto mx-md-3 mx-lg-5">
        <img src={imageUrl} alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  )
}
