import Link from 'next/link';
//import { useTable } from "react-table";
//import "react-table/react-table.css";    
import { SetStateAction, useEffect, useState } from 'react';
import styles from '../styles/category.module.css'
import Image from 'next/image'
import Side from './sidebar'
import subcategory from '../models/subcategory';

declare global {
  interface Window {
    onload: any;
      }
}
export default function category()
{
  
   let Tdata: {[key: string]: any} = {} 
  const [cat, setCat] = useState([]);
  const[sub, setSub]=useState([]);
  const [image, setImage] = useState({ preview: "" });
  const [Title , setTitle] = useState('')
  const [Img, setImg] = useState('')  

  if (typeof document !== "undefined") {
    var  modal = document.getElementById('myModal') as HTMLElement;
  var btn = document.getElementById('myBtn') as HTMLElement;
  }
  const rel =()=>{
    window.location.reload();
  }
  const clo =()=>{
    var span = document.getElementsByClassName("close")[0];
    var  modal = document.getElementById('myModal') as HTMLElement;
      modal.style.display = "none";
      {rel()}
  }
  


  const handleSubmit = async (event : any) => {

    const dis = () =>{
      var modal = document.getElementById("myModal")!;
      modal.style.display = "block";
    }
{dis()}

    if( (document.getElementById("pid") as HTMLInputElement).value)
    {
      console.log( (document.getElementById("pid") as HTMLInputElement).value)
      console.log(Title)
      //  let idU=(document.getElementById("pid") as HTMLInputElement).value
      //  let titleU=(document.getElementById("Title") as HTMLInputElement).value
      //  let descU=(document.getElementById("Desc") as HTMLInputElement).value
       if ((document.getElementById("Img") as HTMLInputElement).value) {
        setImg((document.getElementById("Img") as HTMLInputElement).value)
        alert((document.getElementById("Img") as HTMLInputElement).value);
      }

      const formData1 = new FormData(event.target);
      formData1.set("Function", "Addcategory");
      formData1.set("Fun", "Update");
      fetch('http://localhost:3000/api/category/idpost',
       {
        method: 'POST',
        body: formData1,
     })
      }  
      else{
        console.log('button click')
              event.preventDefault();       
        const formData = new FormData(event.target);
        formData.set("Function", "Addcategory");
                
          fetch('http://localhost:3000/api/category/idpost',
          {
            method: 'POST',
          body: formData,
          })
        //  console.log('res: ' + JSON.stringify(response)) }) 
        .catch((error) => { 
            debugger
            console.error('Error' ,error);
                     });
          }
        }
//         if (typeof document !== "undefined") {
//           // alert("hello");
//           var closeIcon = document.getElementsByClassName('delete'); 
//           for (var i = 0; i < closeIcon.length; i++) {
//          closeIcon[i].addEventListener('click', function(e){
//           e.preventDefault();
         
//           let parent = (((e.target as HTMLElement ).parentElement)?.parentElement)?.parentElement;
//           alert("hell");
//           var el = (parent) as HTMLTableRowElement;
//            alert(el.childNodes[0]);
//              }); 
//       } 
     
// }
     
        const show = (event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
          const button: HTMLButtonElement = event.currentTarget;
          let parent = (((button ).parentElement)?.parentElement);
          
          var el = (parent) as HTMLTableRowElement;
         var sid=el.childNodes[0].textContent;
           alert(el.childNodes[0].textContent);
           let c=(document.getElementById("pid") as HTMLInputElement).value;
             return fetch('http://localhost:3000/api/category/idpost?id='+c+'&sid='+sid,
         { method: 'DELETE' });
                            
       

          // let checkboxes = document.querySelectorAll<HTMLInputElement>('input[name=CHECK]:checked')
          // alert(checkboxes.length) 
          // alert((document.getElementById("pid") as HTMLInputElement).value);
         // alert((document.getElementsByTagName("td")[0]).innerHTML);
         
        //  alert((document.getElementById("CHECK") as HTMLInputElement).value);
        };
        
       
        const [loaded, setStatus] = useState(false);
        const pload=()=>{
    
             var url_string = window.location.href; 
           var url = new URL(url_string);
            var c = url.searchParams.get("id");
                     if(c){
          
        
         
                const fetchData = () => {
              return fetch("http://localhost:3000/api/category/idpost?id="+c)
                    .then((response) => response.json())
                    .then((data) => {
                     setCat(data);
                  (document.getElementById("pid") as HTMLInputElement).value=data[0]["_id"];
                  (document.getElementById("Title") as HTMLInputElement).value=data[0]["title"];
                  (document.getElementById("Desc") as HTMLInputElement).value=data[0]["desc"];
                  //(document.getElementById("subData")as HTMLInputElement).innerText += data[0]["desc"];
                  console.log(data[0]["subcategory"])
                  setSub(data[0]["subcategory"])
                   setImage({
                     preview:data[0]["path"],
                   });
                    });
                             }
              useEffect(() => {
              fetchData();
            },[])
             }         
                     else
   console.log('sorry');
            
     }
     const table = () => {
      let tab = [];
      for (let i = 0; i < sub.length; i++) {
        tab.push(
        
          <tr>
          <td className="sid"  style={{ display: "none" }} > {sub[i]['_id']}</td> 
           <td id="t"> {sub[i]['title']}</td>
          <td id="q">{sub[i]['quant']}</td>
          <td id="p">{sub[i]['price']}</td>
          <td> <button  type="button" onClick= {show} className={`${styles.btn} delet`}> <Image src='/assets/DELETE.png' alt={''} width={20} height={20} /></button> </td> 
          </tr>
          
         );
      }
      return tab;
    }
     if (typeof document !== 'undefined') {
       // use document
       let c=0
       if(document.readyState === "complete" && c==0){
       pload()
       c++
       }
       
       document.onreadystatechange = () => {
         setStatus(document.readyState === "complete");
        
    }
    }
  
       const removeImage = () => {
            setImage(
              {
                preview: ''
              }
            );
            const show = window.document.getElementById('removes')!
            show.style.display="block";
          };
  const handleChange =(e:any)=>
    {
      if(e.target.name=='Title')
      {
        setTitle(e.target.value)
      }
      if(e.target.name=='Img')
      {
       setImg(e.target.value)
      }
      if (e.target.type == "file") {
    if (e.target.files.length){
        setImage({
          preview: URL.createObjectURL(e.target.files[0]),
            });
          }
        }
    }
    const upFile= ()=>{
      const input= window.document.getElementById('Img')!
      input.click();      
      const show = window.document.getElementById('removes')!
      if(show.style.display ==="block"){
        show.style.display="none";
      }else{
        show.style.display="block";
      }
    }
  return (
    <>
      <div className='d-lg-block d-none'>
        <div className="d-flex">
          <Side />
          <div className='w-100'>
            <nav className={`${styles.homenav} navbar`}>
              <div className="container-fluid">
                <a className="navbar-brand fw-semibold h1 ms-4">Category</a>
              </div>
            </nav>
            <div className="container-fluid">
              <div className=" ms-4 me-4 mt-5">
                <div className={`${styles.homenav} mt-3 p-4`}>
                  <form id="categoryData" onSubmit={handleSubmit} >
                    <div className='mt-2' >
                    <input type="text" name="pid" id="pid" style={{ display: "none" }} />
                      <p className="fs-6 fw-semibold mb-2">Title :</p>
                      <input type='text' id="Title" name="Title" placeholder="title" onChange={handleChange} className={`${styles.inputbox} w-100`} />
                    </div>

                    <div className='mt-3'>
                      <p className="fs-6 fw-semibold mb-2">Description :</p>
                      <textarea id="Desc" name="Desc" placeholder="Desc" onChange={handleChange} className={`${styles.textarea} w-100`} />
                    </div>
                    {image.preview ? (<>
                      <img src={image.preview} alt="dummy" width="300" height="200" />
                      <button onClick={removeImage} className={styles.removebtn}>                
                      <Image src="/assets/delete_FILL0_wght400_GRAD0_opsz48 1.png" alt={''} width={20} height={20} />
                      </button> 
                                 
                    </>
                    ) : (
                    <>
                        <div className={`${styles.box1}   bg-white m-0 mt-4 p-0 position-relative`} >
                          <div className={`${styles.box2} m-4 `}>
                            <div className={`${styles.box3} p-4 m-2 mx-0 text-center `}>
                              <Image src="/assets/Group.svg" alt={''} width={20} height={20} />
                              <p className={`${styles.imgtext} fw-normal mb-2`}>Drop Your images here or browse.</p>
                            </div>
                          </div>       
                        </div>
                      </>
                    )}

                    <div className={styles.searchbtn}>
                      <button className={`${styles.btncolor} border-0 text-white p-1 px-4   `} id="removes"  style={{ display: "block" }}  onClick={upFile} type='button' >Search</button>
                      <input accept="image/* " type="file" id="Img" name="Img" style={{ display: "none" }} onChange={handleChange} />
                    </div>

                    <div>  

                      
<div className={styles.subData} >
  <h4>Subcategory</h4>
<table  className={`${styles.TData} mt-5 w-100`}>

  <thead className={styles.Thead}>
  <tr>
                          
                          <th>Title</th>
                          <th>Quantity</th>
                          <th>Price</th>
                          <th>Action    </th>
  </tr>
  </thead>
  <tbody className={styles.Tbody} id="tab">
  {table()}
  </tbody>
</table> 
</div>
     </div>  


     <div id="myModal" className={`${styles.modal} modal`}>
   <div className={`${styles.content} modal-content`}>
    <span onClick={clo} className={`${styles.close} close`}>&times;</span>
    <p> Your data is saved</p>
  </div>

</div>      

                    <div className='pb-5 pt-5 mt-5'>
                      <button type='submit' className={`${styles.btncolor} border-0 text-white p-1 px-4 float-end `}>Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )

}
function setTitle(value: SetStateAction<string>) {
  throw new Error('Function not implemented.');
}

  function setImg(value: SetStateAction<string>) {
   throw new Error('Function not implemented.');
  }


  // for(var i=0 ; i <subcategory.length;i++)
  //                 {
  //                 (document.getElementById("subData")as HTMLInputElement).innerText +="Subcategory"+(i+1)+"\n"+("Desc:"+ data[0]["subcategory"][i]["desc"]+"\n"+"Price:"+ data[0]["subcategory"][i]["price"]+"\n"+"Quant :"+data[0]["subcategory"][i]["quant"]+"\n");
  //                 console.log(data[0]["subcategory"][i]["desc"])
  //                 }