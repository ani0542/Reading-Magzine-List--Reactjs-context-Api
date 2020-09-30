import React, { useContext } from 'react'
import {MyContext} from '../contexts/BookContext'



function BookDetails(props) {
    const {dispatch} = useContext(MyContext)
    
    return (
        <>
               {/* <li className='title' onClick={()=>dispatch({type:"REMOVE_BOOKS",id:props.book.id})}>{props.book.title}</li>  
               <li className='author' onClick={()=>dispatch({type:"REMOVE_BOOKS",id:props.book.id})}>{props.book.author}</li>   */}


                     <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: props.book.id })}>
                               <div className="title">{props.book.title}</div>
                               <div className="author">{props.book.author}</div>
                     </li>
        </>
    )
}

export default BookDetails
