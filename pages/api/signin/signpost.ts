import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from 'next-connect';
import { connect } from "../../../utils/connection";
import user from "../../../models/user";
//import { ResponseFuncs } from "../../../utils/type"
import multer from 'multer';
require('mongoose').set('debug', true);

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
export interface NextApiRequestExtended extends NextApiRequest{
file: any;
}
const apiRoute = nextConnect<NextApiRequest,NextApiResponse>({
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
    var post = new user({
       email: req.body.Email,
       password:req.body.Pas,      
    })
        //console.log("hello");
    res.status(200).json(await user.create(post));
  }
)
apiRoute.get(async (req,res) => {
  await connect() // connect to database
      res.json(await user.find({}))
})
export default apiRoute;

