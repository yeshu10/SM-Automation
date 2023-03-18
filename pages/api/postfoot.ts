
import * as fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'
export default  async function handler(
  req: NextApiRequest,
  res: NextApiResponse ){
   console.log(req)
    if (req.method === 'POST') {
    // Process a POST request
    let data = await fs.promises.readdir('footerdata');
    console.log(req.body)
    fs.writeFile(`footerdata/footdata.json`,JSON.stringify(req.body), ()=>{})
    res.status(200).json(["yes post request"])
    
    } else {
    
  res.status(200).json(["allBlogs"]) // name, email, desc, phone
    }
}