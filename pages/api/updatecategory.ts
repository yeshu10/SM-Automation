// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import category from '../../models/category'
import connectDb from "../../middleware/mongoose"
import type { NextApiRequest, NextApiResponse } from 'next'
const handler=async(req: NextApiRequest,res: NextApiResponse)=>{
    if(req.method=='POST')
    {
     console.log(req.body)
        for(let i=0;i<req.body.length; i++){
            let p = await category.findByIdAndUpdate(req.body[i]._id,req.body[i])
        }
        res.status(200).json({success: "Success "})
    }
  else{
   res.status(400).json({error: "This method is not allowed "})
  } 
    
}
export default connectDb(handler);
