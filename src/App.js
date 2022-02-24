import Header from "./Components/Header";
import Create from "./Components/Create";
import Note from "./Components/Note";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {

  const [notes, setNotes] = useState([])

  const addNote = (note) => {
    setNotes((prevValues) => [...prevValues, note])
  }

  const deleteNote = (id) => {
    setNotes((prevValues) => 
      (
        prevValues.filter((note, index) => index !== id)
      )
    )
  }

  return (
    <>
      <Header />
      <Create onAdd={addNote} />
      <div className="note-container">
          {
            notes.map((note, index) => {
              return(
                <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />
              )
            })
          }
      </div>
      <Footer />
    </>
  );
}

export default App;
