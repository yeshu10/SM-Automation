import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from 'next-connect';
import { connect } from "../../../utils/connection";
import slider from "../../../models/slider";
//import { ResponseFuncs } from "../../../utils/type"
import multer from 'multer';
declare var require: any
require('mongoose').set('debug', true);
export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
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
const upload = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => cb(null,'./public/uploads'),
      filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
      },
    }),
  });
  
apiRoute.use(upload.single('Img'));


apiRoute.post(async (req, res) => {
  //   if (req.body["Function"]=="Update")
  //   {
  //     await connect() // connect to database
      
  //     let data: {[key: string]: any} = {} 
  //     if(req.file){
  //         var path=req.file.path;
  //     path="/uploads/"+path.substring(path.lastIndexOf("\\") + 1, path.length);
  //     data.path=path
  //     }
  //     console.log(data)
  //     res.json(await slider.updateOne({_id: req.body.pid}, {$set: data}))
  //   }
  // else
  // {
      console.log(req.body);
       await connect() // connect to database
       var path=req.file.path;
       path="/uploads/"+path.substring(path.lastIndexOf("\\") + 1, path.length);
      var post = new slider({
        path: path,
        
      })
      res.status(200).json(await slider.create(post));
    }
  // }
  )

apiRoute.get(async (req,res) => {
  await connect() // connect to database
  if(req.query.id){
    res.json(await slider.find({_id: req.query.id}))
  }
  else
      res.json(await slider.find({}))
})


apiRoute.delete(async (req,res) => {
  await connect() // connect to database
  console.log(req.query.arr)
      res.json(await slider.deleteMany({_id: req.query.arr}))
})


export default apiRoute;

