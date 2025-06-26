import Header from "./components/Header"
import Note from "./components/Note"
import Footer from "./components/Footer"
import notes from "./notes"

export default function App(){
  return (
    <div className="main">
      <Header />
      <div className="notes">
        {
          notes.map(noteItem => (
            <Note 
              title={noteItem.title} 
              content={noteItem.content}
              key={noteItem.key}
            />
          ))
        }
      </div>
      <Footer />
    </div>
  )
}