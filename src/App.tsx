import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import ProjectList from './components/pages/ProjectList'

export default function App() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-between min-vh-100">
      <Header />
      <ProjectList />
      <Footer />
    </div>
  )
}
