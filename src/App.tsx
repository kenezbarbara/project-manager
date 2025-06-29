import { Header, Footer, ProjectList } from '@/components'

export default function App() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-between min-vh-100">
      <Header />
      <ProjectList />
      <Footer />
    </div>
  )
}
