import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from 'next-connect';
import { connect } from "../../../utils/connection";
import image from "../../../models/slider";
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
    console.log(req.body);
     await connect() // connect to database
    var post = new image({
          path: req.file.path, 
    })
    res.status(200).json(await image.create(post));
  }
)
apiRoute.get(async (req,res) => {
  await connect() // connect to database
      res.json(await image.find({}))
})

export default apiRoute;