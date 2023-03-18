
import * as fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect';
import multer from 'multer';

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

export interface NextApiRequestExtended extends NextApiRequest{
  file: any;
}


const apiRoute = nextConnect<NextApiRequestExtended, NextApiResponse>({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
})

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null,'./public/uploads'),
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    },
  }),
});

apiRoute.use(upload.single('Img'));

apiRoute.post((req, res) => {
 console.log(req.file);
 
 fs.readFile('categorydata/catdata.json', 'utf8', function (err, data) {
  var js = JSON.parse(data);
  if (req.body["Function"]=="Addcategory"){
    var filepath1=req.file.path;
    js.push({ID:new Date().toISOString().replace(/:/g, '-'),Title: req.body["Title"], Path: filepath1 ,subcategory:[]});

  fs.writeFile("categorydata/catdata.json", JSON.stringify(js), function(err){
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
  } else{
    var filepath=req.file.path;
    js[js.length-1]["subcategory"].push({ID:new Date().toISOString().replace(/:/g, '-'),Title: req.body["TiTle"],Desc: req.body["Desc"],Quant: req.body["Quant"], Path: filepath});

  fs.writeFile("categorydata/catdata.json", JSON.stringify(js), function(err){
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
  }
});

 res.status(200).json({ data: "success"});
});

export default apiRoute;










