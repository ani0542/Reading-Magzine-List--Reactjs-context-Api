import React,{useReducer} from 'react'
import { BookReducers } from '../reducers/BookReducers';

export const MyContext = React.createContext();


function BookContext(props) {
    const [books, dispatch] = useReducer(BookReducers,[])
           
     
   
    return (
        <>
                 <MyContext.Provider value={{books,dispatch}}>
                          {props.children}
                 </MyContext.Provider>
        </>
    )
}

export default BookContext
