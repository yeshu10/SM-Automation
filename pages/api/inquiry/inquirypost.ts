import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from 'next-connect';
import { connect } from "../../../utils/connection";
import about from "../../../models/about";
//import { ResponseFuncs } from "../../../utils/type"
import multer from 'multer';
import inquiry from "../../../models/inquiry";
declare var require: any
require('mongoose').set('debug', true);
// export const config = {
//   api: {
//     bodyParser: false, // Disallow body parsing, consume as stream
//   },
// };
export interface NextApiRequestExtended extends NextApiRequest{
  method: any;
  file: any;
}
const apiRoute = nextConnect<NextApiRequestExtended, NextApiResponse>({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});
apiRoute.post(async (req, res) => {
      console.log(req.body);
     await connect() // connect to database
   
    var post = new inquiry({
      sno:1,
      name:req.body.Name,
           company: req.body.Company,
           city:req.body.City,
           mobile:req.body.Mobile,
           email:req.body.Email,
            desc: req.body.Desc,
    })
    res.status(200).json(await inquiry.create(post));
  
}
)

apiRoute.get(async (req,res) => {
if(req.query.c){
  await connect() // connect to database
  console.log(req.query.c)
    // res.json(await inquiry.find({}))
    res.json(await inquiry.countDocuments({}))
}
else{
    await connect() // connect to database
    res.json(await inquiry.find({}))

}
})




export default apiRoute;
