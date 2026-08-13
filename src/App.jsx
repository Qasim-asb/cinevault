import Navbar from './components/layout/Navbar'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App