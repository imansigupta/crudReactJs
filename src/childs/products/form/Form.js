import React from 'react';
import './Form.css'

export const Form =(props)=>{    
    
        return(
            <div>
                <fieldset>
                    <legend>Product Details</legend>
                    
                        <div>
                            <input type="text" onChange={props.idfn} placeholder="Enter the Product Id"/>
                        </div>
                        <div>
                            <input type="text" onChange={props.namefn} placeholder="Enter The product Name"/>
                        </div>
                        <div>
                            <input type="text" onChange={props.pricefn} placeholder="Enter the Product Price"/>
                        </div>
                        <div>
                            <input type="text" onChange={props.urlfn} placeholder="Enter the product Url"/>
                        </div>
                        <button onClick={props.addfn}>ADD The Product</button>
                        {/* <Load onClick={props.callMyAjax}></Load> */}
                        <button onClick={props.callMyAjax}>Load</button>
                </fieldset>
            </div>
        )
    
}


