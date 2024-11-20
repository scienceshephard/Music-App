import Footer from "./components/Footer"
import Header from "./components/Header"
import Library from "./pages/Library"
import MainHome from "./pages/Main"


function App() {
  return (
    <div className="container">
      <Header />
      <div className="container-body">
        <Library />
        <MainHome />
      </div>
      <Footer />
    </div>
  )
}

export default App
