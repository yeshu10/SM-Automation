// Interface to defining our object of response functions
export interface ResponseFuncs {
    GET?: Function
    POST?: Function
    PUT?: Function
    DELETE?: Function
  }
  // Interface to define our Category model on the frontend
  export interface SubCategory {
  //  _id?: {type: String}
            title: {type: String},
            desc: {type: String},
            quant: {type: String},
            price: {type: String},
            path: {type: String},
  
      }