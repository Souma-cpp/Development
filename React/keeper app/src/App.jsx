import Header from "./components/Header"
import Note from "./components/Note"
import Footer from "./components/Footer"

export default function App(){
  return (
  <div className="main">
    <Header />
    <div className="notes">
    <Note />
    <Note />
    <Note />
    <Note />
    <Note />
    <Note />
    <Note />
    <Note />
    <Note />
    <Note />
    </div>
    <Footer />
  </div>
  )
}