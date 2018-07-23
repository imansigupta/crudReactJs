import React from 'react';
import './productlist.css';
export const Productlist = (props)=>{
    var jsx = <h1>item list</h1>
    // jsx = props.list1.length>0?jsx: <h2>no records added yet</h2>
    // console.log("props list is...",props.list1.length)
    return(
        <div>
            <hr/>
            <h1>Product List</h1>
            {jsx}
            <fieldset>
                <legend>Products</legend>
                {props.list1.map((obj1)=>{
                   return <div key={obj1.id}>
                       <li><span>{obj1.id}</span><span>{obj1.name}</span><span>{obj1.price}</span><span>{obj1.url}</span></li>
                       <button onClick={props.mycart}>Add To Cart</button>
                   </div>
                    //map here act as the ng-repeat of angular js
                    //as there is a silent bug of key in repeated li so add a key in li  so as to maintain a uniqueness of li
                    
                })}            
            </fieldset>
        </div>
    )
}