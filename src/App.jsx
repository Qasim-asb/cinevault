import Navbar from './components/layout/Navbar'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App