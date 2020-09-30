import React, { useContext } from 'react'
import {MyContext} from '../contexts/BookContext'
import BookDetails from './BookDetails'




function BookList() {
    const {books} = useContext(MyContext)
   return books.length?(
       <>
            <div className='book-list'>
                    <ul>
                           {
                               books.map((value)=>{
                                   return(
                                         <BookDetails book={value} key={value.id}/>
                                   )
                               })
                           }
                    </ul>
            </div>
       </>
   ):(
         <div className='empty'>No Books to read...</div>
   )
}

export default BookList
