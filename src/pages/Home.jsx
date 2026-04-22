import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Membership from '../components/Membership'
import Impact from '../components/Impact'
import Legacy from '../components/Legacy'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  const handleGetAccess = () => {
    navigate('/form')
  }

  return (
    <div className="min-h-screen bg-surface selection:bg-primary-container selection:text-on-primary-container">
      <Navbar onGetAccess={handleGetAccess} />
      
      <main>
        <Hero onGetAccess={handleGetAccess} />
        <Features />
        <Membership onGetAccess={handleGetAccess} />
        <Impact />
        <Legacy onGetAccess={handleGetAccess} />
      </main>

      <Footer />
    </div>
  )
}
