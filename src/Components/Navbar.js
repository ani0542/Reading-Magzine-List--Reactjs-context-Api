import React, { useContext } from 'react'
import {MyContext} from '../contexts/BookContext'
function Navbar() {
    const {books} = useContext(MyContext)
    return (
        <>
               <div className="navbar">
                      <h1> Reading List</h1>
                      <p>Currently you have {books.length} books to get through...</p>
              </div>
        </>
    )
}

export default Navbar
