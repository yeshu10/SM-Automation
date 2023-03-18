import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from 'next-connect';
import { connect } from "../../../utils/connection";
import footer from "../../../models/footer";

// declare var require: any
require('mongoose').set('debug', true);

// export const config = {
//   api: {
//     bodyParser: false, 
//   },
// };

export interface NextApiRequestExtended extends NextApiRequest{
  method: any;
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
    console.log("hello");
    console.log(req.body["wan"]);

     await connect() // connect to database
     console.log(req.body.wan);
    var post = new footer({
      whatsapp:req.body.wan,
      email:req.body.mail,   
      title:req.body.title,  
    })
    res.status(200).json(await footer.create(post));
  })

apiRoute.get(async (req,res) => {
  if(req.query.c){
    await connect() // connect to database
    console.log(req.query.c)
      // res.json(await inquiry.find({}))
      res.json(await footer.countDocuments({}))
  }
  else{
  await connect() // connect to database
      res.json(await footer.find({}))
  }
})
export default apiRoute;

