import React , {Component} from 'react'
import {Form} from './form/Form';

import {Totalproduct} from'./totalproduct/TotalProduct';
export class Product extends Component{
 constructor(props){
     super(props);
     console.log("hey i m product constructor");
     this.state = {counter:0};
     this.counter = 0;
 }
takeId(event){
this.id = event.target.value;
console.log("id is",this.id)
}

takeName(event){
    this.name = event.target.value;
}
    
takePrice(event){
    this.price = event.target.value;
}
    
takeUrl(event){
    this.url = event.target.value;
}
callMe(){
    
    this.props.myAjax();
    this.counter+=4;
    this.setState({counter:this.counter});
}

addProduct(){
    var obj={id:'',name:'',price:'',url:''}
    obj.id = this.id;
    obj.name = this.name;
    obj.price = this.price;
    obj.url = this.url;
    console.log("obj is ",obj);
    this.props.pass(obj);
    this.counter ++;
    this.setState({counter:this.counter});
    console.log("counter state is..",this.state)
    // this.setState({products:obj}); 
}

 render(){
     return(
         <div>
             <Form callMyAjax={this.callMe.bind(this)} idfn={this.takeId.bind(this)} pricefn={this.takePrice.bind(this)} namefn={this.takeName.bind(this)} urlfn={this.takeUrl.bind(this)} addfn ={this.addProduct.bind(this)} ></Form>
             <Totalproduct cnfn ={this.state.counter}></Totalproduct>
         </div>
     )
 }
}