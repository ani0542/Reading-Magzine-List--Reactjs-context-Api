import React, { useContext, useState } from 'react'
import {MyContext} from '../contexts/BookContext'

function BookForm() {
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')

    const {dispatch} =useContext(MyContext)

    const handleChange=(e)=>{
         setTitle(e.target.value)
    }
    const handleChanges=(e)=>{
        setAuthor(e.target.value)
   }
   const handleSubmit=(e)=>{
       e.preventDefault()
       console.log(title,author)
        dispatch({type:"ADD_BOOK",book:{
            title:title,
            author:author
        }})
        setTitle('')
        setAuthor('')

   }
    return (
        <>
                 <form onSubmit={handleSubmit}>
                          <input type='text' placeholder='book title' required value={title} onChange={handleChange}/>
                          <input type='text' placeholder='author' required value={author} onChange={handleChanges}/>
                          <input type="submit" value="add book" />
                 </form>      
        </>
    )
}

export default BookForm
