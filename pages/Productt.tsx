import React, { Component } from 'react'
import {actFetchProductsRequest,AddCart} from './actions'
import {connect} from 'react-redux';
export class Product extends Component <any, any>{
    constructor(props:any) {
        super(props)
       
    }

    componentDidMount(){
        this.props.actFetchProductsRequest();
    }
    
    render() {
        const {_products} = this.props._products;
        if(_products.length>0){
           
           return (
                <div className="row" style={{marginTop:'10px'}}>
                    <div className="col-md-12">
                        <div className="row">
                            {
                                _products.map((item: { image: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; },index: React.Key | null | undefined)=>(
                                    <div key={index} className="col-md-2" style={{marginBottom:'10px'}}>
                                        <img src={item.image} className="img-resposive" style={{width:'100%',height:'100px'}}/>
                                        <h5>{item.name}</h5>
                                        <span className="badge badge-primary" style={{cursor:'pointer'}} onClick={()=>this.props.AddCart(item)}>Add Cart</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            ) 
        }
        return(
            <div className="row">
                <h2>Loading...!</h2>
            </div>
        )
        
    }
}

const mapStateToProps = (state: { _todoProduct: any; }) =>{
    return {
         _products: state._todoProduct,
       };
}
function mapDispatchToProps(dispatch:any){
    return{
        actFetchProductsRequest:()=>dispatch(actFetchProductsRequest()),
        AddCart:(item: any)=>dispatch(AddCart(item))
     
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product)
