import React from 'react'
import BookForm from './Components/BookForm'
import BookList from './Components/BookList'
import Navbar from './Components/Navbar'
import BookContext from './contexts/BookContext'

function App() {
  return (
    <>
          <div className="App">
          <BookContext>
                 <Navbar/>
                 <BookList/>
                 <BookForm/>
          </BookContext>
          </div>
    </>
  )
}

export default App
