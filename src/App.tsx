import { Header, Footer } from '@/components'
import { Outlet } from 'react-router'

export default function App() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-between min-vh-100">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
