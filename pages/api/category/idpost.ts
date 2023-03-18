import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from 'next-connect';
import { connect } from "../../../utils/connection";
import category from "../../../models/category";
//import { ResponseFuncs } from "../../../utils/type"
import multer from 'multer';
import subcategory from "../../../models/subcategory";
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


apiRoute.get(async (req,res) => {
  if(req.query.d){
    await connect() // connect to database
    console.log(req.query.d)
      // res.json(await inquiry.find({}))
       res.json(await category.countDocuments({}))
      // .mycollection.aggregate([{$project: { count: { $size:"$foo" }}}])
  // res.json( category.aggregate({ size:"subcategory" }))
    
  }
  if(req.query.sid){
    await connect() // connect to database
    console.log(req.query.sid)
    
   res.json(await category.find({ "subcategory._id": req.query.sid },{_id:0, "subcategory.$":1}))
    // var hell=await category.find({ subcategory: {$elemMatch: {_id: req.query.sid}   } })
    //var hell= await category.find({ "subcategory.$.desc": "mk" })
     //console.log( JSON.stringify(hell) );

  //      var hell=await category.find({},{"subcategory":1})
  //  // var hell= await category.find({ "subcategory.$.desc": "mk" })

  //  var subdetails=[];
  //  for(let i=0; i<hell.length;i++){
  //   //subdetails.push(hell[i]["subcategory"]);
  //   for(let j=0;j<hell[i]["subcategory"].length;j++){
  //     subdetails.push(hell[i]["subcategory"][j]);
  //   }
  //  }
  //     console.log( JSON.stringify(subdetails) );
  
        }
  await connect()
  
  if(req.query.id){
    res.json(await category.find({_id: req.query.id}))
  }
 else
     res.json(await category.find({}))
})



apiRoute.post(async (req, res) => {
    console.log(req.body);
     await connect() // connect to database
     if (req.body["Function"]=="Addcategory"){
      if (req.body["Fun"]=="Update")
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
        res.json(await category.updateOne({_id: req.body.pid}, {$set: data}))
      }
else{
     var path=req.file.path;
     path="/uploads/"+path.substring(path.lastIndexOf("\\") + 1, path.length);
     var post = new category({
      title: req.body.Title,
      desc: req.body.Desc,
      path: path,
      subcategory: []
    })
      res.status(200).json(await category.create(post));
  }
}
  else{
    console.log("working")
          await connect() // connect to database        
      
      if(req.file){
          var path=req.file.path;
      path="/uploads/"+path.substring(path.lastIndexOf("\\") + 1, path.length);
   //   data.path=path
            }
      console.log()
      res.json(await category.updateOne({_id: req.body.pid}, {$push:{"subcategory":{"title":req.body.TiTle ,"desc":req.body.Desc ,"path":path,"quant":req.body.Quant,"price":req.body.Price} }}))
   
    }})

apiRoute.delete(async (req,res) => {
   if((req.query.sid))
   {
     await connect() // connect to database
    let sid=req.query.sid as String;
    sid=sid.trim();
  console.log(sid)
  console.log(req.query.id)
  res.json(await category.updateOne({_id:req.query.id}, {$pull:{"subcategory":{_id:sid}}}))
}
  else
  {
    await connect() // connect to database
      console.log(req.query.arr)
           res.json(await category.deleteMany({_id: req.query.arr}))
  }
    
})


export default apiRoute;






// apiRoute.put(async (req,res) => {
//   await connect() // connect to database
// //var path=req.file.path;
// //  path="/uploads/"+path.substring(path.lastIndexOf("\\") + 1, path.length);
//  console.log(req.query.id)
//  console.log(req.query.title)
//  console.log(req.query.desc)
//   console.log("HII")
//   res.json(await category.updateOne({_id: req.query.id}, {$set: {title: req.query.title,desc:req.query.desc}}))
// })

// else{
//   var path=req.file.path;
//   path="/uploads/"+path.substring(path.lastIndexOf("\\") + 1, path.length);
//   var postsub = new category({
//     subcategory: [{
//       title: req.body.TiTle,
//       desc: req.body.Desc,
//       path: path,
//       quant:req.body.Quant,
//       price: req.body.Price,
//           }]  
//   })
// res.status(200).json(await category.create(postsub));
// }
// }
// })
