import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from 'next-connect';
import { connect } from "../../../utils/connection";
import home from "../../../models/home";
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
  if (req.body["Function"]=="Update")
  {
    await connect() // connect to database
    
    let data: {[key: string]: any} = {} 
    data.title=req.body.Title
    data.desc=req.body.Desc  
    if(req.file){
        var path=req.file.path;
    path="/uploads/"+path.substring(path.lastIndexOf("\\") + 1, path.length);
    data.path=path
    }
    console.log(data)
    res.json(await home.updateOne({_id: req.body.pid}, {$set: data}))
  }
else
{
    console.log(req.body);
     await connect() // connect to database
     var path=req.file.path;
     path="/uploads/"+path.substring(path.lastIndexOf("\\") + 1, path.length);
    var post = new home({
      title: req.body.Title,
      desc:req.body.Desc,
      path: path,
      
    })
    res.status(200).json(await home.create(post));
  }
}
)


apiRoute.get(async (req,res) => {
  await connect() // connect to database
  if(req.query.id){
    res.json(await home.find({_id: req.query.id}))
  }
  else
      res.json(await home.find({}))
})


apiRoute.delete(async (req,res) => {
  await connect() // connect to database
  console.log(req.query.arr)
      res.json(await home.deleteMany({_id: req.query.arr}))
})
// apiRoute.put(async (req,res) => {
//   await connect() // connect to database
// //var path=req.file.path;
// //  path="/uploads/"+path.substring(path.lastIndexOf("\\") + 1, path.length);
//  console.log(req.query.id)
//  console.log(req.query.title)
//  console.log(req.query.desc)
//   console.log("HII")
//   res.json(await home.updateOne({_id: req.query.id}, {$set: {title: req.query.title,desc:req.query.desc}}))
// })


export default apiRoute;

