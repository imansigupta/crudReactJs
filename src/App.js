import React, { Component } from 'react';
import {Product} from './childs/products/Product';
import {Productlist} from './childs/productlist/Productlist';
//import {Load}  from './childs/loadproduct/loadproduct'
import './App.css';

export default class App extends Component {
  constructor(){
    super();    
    console.log("hey i m ap constructor")
    this.state={list:[],counter:0};
    this.arr=[];
    this.counter =0;
    
    }
    fetch(obj){
      
      this.arr.push(obj);
      this.setState({list:this.arr});
      // this.state.list.push(obj);
      console.log("arr is ",this.arr);
      console.log("state is",this.state.list)
      // console.log("obj passed ",obj)
    }
    doAjax(){
      const url ='https://raw.githubusercontent.com/imansigupta/testjson/master/product.json';
      fetch(url).then(response=>{
        response.json().then(data=>{
          data.mobiles.forEach(obj=>{
            this.arr.push(obj);
            
            this.setState(...this.state,{list:this.arr});
          })
        }).catch(err=>{
          console.log("error found",err);
        })
      })
    }

    // counter1(){
    //   this.counter++;
    //   this.setState(...this.state,{counter:this.counter});
    // }
 render(){
   return(
     <div>
       <h1>PRODUCT DASHBOARD</h1>
       <Product pass={this.fetch.bind(this)} myAjax={this.doAjax.bind(this)}></Product>
        {/* <Load loadfn={this.doAjax.bind(this)}></Load> */}
       <Productlist list1={this.state.list}/>
       
     </div>
   )
 }
}


