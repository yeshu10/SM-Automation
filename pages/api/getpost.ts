/*import { NextApiRequest, NextApiResponse } from "next"
import category from "../../../models/category"
import { connect } from "../../../utils/connection"
import { ResponseFuncs } from "../../../utils/type"
require('mongoose').set('debug', true)
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //capture request method, we type it as a key of ResponseFunc to reduce typing later
const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;
  //function for catch errors
const catcher = (error: Error) => res.status(400).json({ error });
  // GRAB ID FROM req.query (where next stores params)
const id: string = req.query.id as string;
console.log(id+"hello");
  // Potential Responses for /category/:id
const handleCase: ResponseFuncs = {
    // RESPONSE FOR GET REQUESTS
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      // const { category } = await connect(); // connect to database
      // category.findById(id, function(err: any, results: any) {
      //   console.log(results); // logs "null"
      //   if(err) {
      //     console.log("error: " + err); // logs nothing
      //     res.status(403).json("error"+err);
      //   } else {
      //     console.log("here"); // logs "here"
      //     res.status(200).json(results+"here");
      //   }
      // });
      // //return res.status(200).end();
      const { category } = await connect() // connect to database
      res.json(await category.find({}).catch(catcher))
    },
    // RESPONSE POST REQUESTS
     POST: async (req: NextApiRequest, res: NextApiResponse) => {  
      try {
         await connect() // connect to database
       //const val =  await category.create(req.body)
       //console.log(val)
       // res.json(val)
          } catch (error) {
        console.log("Error occured"+error);
      //  res.json({"data":"Data"})
          }  
          },

    // RESPONSE PUT REQUESTS
    PUT: async (req: NextApiRequest, res: NextApiResponse) => {
      const { category } = await connect() // connect to database
      res.json(
        await category.findByIdAndUpdate(id, req.body, { new: true }).catch(catcher)
      )
    },

    // RESPONSE FOR DELETE REQUESTS
    DELETE: async (req: NextApiRequest, res: NextApiResponse) => {
      const { category } = await connect() // connect to database
      res.json(await category.findByIdAndRemove(id).catch(catcher))
    },
  }

  // Check if there is a response for the particular method, if so invoke it, if not response with an error
  const response = handleCase[method]
  if (response) response(req, res)
  else res.status(400).json({ error: "No Response for This Request" })
}

export default handler*/