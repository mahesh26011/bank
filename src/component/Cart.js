import React,{useReducer} from 'react'
import realme from '../images/realmec35.jpg';
import realmei from '../images/realme9i.jpg';

const initialState= {add:0};


function reducer(state,action){
  switch(action.type){
    case 'increament':
      return {add: state.add+1};
    case 'decreament':
      return {add: state.add-1};
     
    default:
      throw new Error();    
  }
}


function Cart() {

const [state,dispatch]=useReducer(reducer,initialState) 

   
  return (
    <>
     
    <div className='c35'>
        <img src={realme} alt="realmec35" width='100' height='200'/>
        <p>Realme c35</p>
        <b>price 9999</b> 
        <br></br>
        <button onClick={()=>dispatch({type:'increament'})}>Add Cart {state.add}</button>
        <button onClick={()=>dispatch({type:'decreament'})}>Remove</button>
       
    </div>
    <div className='c35'>
    <img src={realmei} alt="realmec35" width='100' height='200'/>
    <p>Realme 9i</p>
        <b>price 10999</b> 
        <br></br>
        <button onClick={()=>dispatch({type:'increament'})}>Add Cart </button>
        <button onClick={()=>dispatch({type:'decreament'})}>Remove</button>

    </div>
    
    </>
  )
}

export default Cart