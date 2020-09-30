// import { v4 as uuidv4 } from 'uuid';
// export const BookReducers=(state,action)=>{
//       switch(action){
//           case  "ADD_BOOK":
//               return[...state,{
//                 id: uuidv4(),
//                 title:action.book.title,
//                 author:action.book.author
//               }
//         ]
//         case "REMOVE_BOOKS":
//             return (state.filter((value)=>{
//                 return(
//                          value.id!==action.id
//                 )
//             }))

//             default:return state
//       }
// }










import { v4 as uuidv4 } from 'uuid';

export const BookReducers = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, {
        title: action.book.title, 
        author: action.book.author, 
        id: uuidv4 ()}
      ]
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
}