/* eslint-disable react-hooks/rules-of-hooks */
import styles from '../styles/homes.module.css'
import {SetStateAction, useState } from 'react';
import { useEffect, useRef } from 'react';
import Side from './sidebar';
import Image from "next/image";
declare global {
  interface Window {
    onload: any;
      }
}
export default function homes() {

  const [home, setHome] = useState([]);
  const [image, setImage] = useState({ preview: "" });
  const [Title, setTitle] = useState('')
  const [Img, setImg] = useState('')
  const [Desc, setDesc] = useState('')



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
  

  const handleSubmit = async (event: any) => {
    const dis = () =>{
      var modal = document.getElementById("myModal")!;
      modal.style.display = "block";
    }
{dis()}
  if( (document.getElementById("pid") as HTMLInputElement).value)
    {
      console.log( (document.getElementById("pid") as HTMLInputElement).value)
      console.log(Title)
   //   console.log( (document.getElementById("Img") as HTMLInputElement).value)
   //   alert("hello");
   //   alert((document.getElementById("Img") as HTMLInputElement).value)
       let idU=(document.getElementById("pid") as HTMLInputElement).value
    //   console.log(idU)
       let titleU=(document.getElementById("Title") as HTMLInputElement).value
    //   console.log((document.getElementById("Title") as HTMLInputElement).value)
       let descU=(document.getElementById("Desc") as HTMLInputElement).value
     if ((document.getElementById("Img") as HTMLInputElement).value) {
        setImg((document.getElementById("Img") as HTMLInputElement).value)
        alert((document.getElementById("Img") as HTMLInputElement).value);
      }

const formData1 = new FormData(event.target);
    formData1.set("Function", "Update");
      fetch('http://localhost:3000/api/home/homepost',
       {
         method: 'POST',
          body: formData1,
     })}
     else{
    console.log('button click')
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('http://localhost:3000/api/home/homepost',
      {
        method: 'POST',
        body: formData,
      })
      .catch((error) => {
        debugger
        console.error('Error', error);
      });
  }
  }
  const upFile = () => {
    const input = window.document.getElementById('Img')!
    const show = window.document.getElementById('removes')!
    input.click();
    if(show.style.display ==="block"){
      show.style.display="none";
    }else{
      show.style.display="block";
    }
  }
  
 const [loaded, setStatus] = useState(false);
     const pload=()=>{
   
    // console.log('happy');
    var url_string = window.location.href; 
        var url = new URL(url_string);
         var c = url.searchParams.get("id");
                  if(c){
        //  console.log(c);

             const fetchData = () => {
           return fetch("http://localhost:3000/api/home/homepost?id="+c)
                 .then((response) => response.json())
                 .then((data) => {
                  setHome(data);
               //   setTitle(data.target.value)
                  (document.getElementById("pid") as HTMLInputElement).value=data[0]["_id"];
                (document.getElementById("Title") as HTMLInputElement).value=data[0]["title"];
               (document.getElementById("Desc") as HTMLInputElement).value=data[0]["desc"];
               // (document.getElementById("Img") as HTMLInputElement).value=data[0]["path"];
               //   handleChange(document.getElementById("Img") as HTMLInputElement)
                // setTitle(data[0]["title"])
                // setDesc(data[0]["desc"])
                setImage({
                  preview:data[0]["path"],
                });
                 });
                          }
           useEffect(() => {
           fetchData();
         },[])
   
// return fetch("http://localhost:3000/api/about/aboutpost?id="+c,
//           { method: 'GET' });
                       }         
                  else
console.log('sorry');
         
  }
  if (typeof window !== 'undefined') {
  
// window.onload = pload();
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
  const handleChange = (e: any) => {
    if (e.target.name == 'Title') {
      setTitle(e.target.value)
    }
    if (e.target.name == 'Img') {
      setImg(e.target.value)
    }
    if (e.target.name == 'Desc') {
      setDesc(e.target.value)
    }
    if (e.target.type == "file") {
      if (e.target.files.length) {
        setImage({
          preview: URL.createObjectURL(e.target.files[0]),
        });
      }
    }
  }
  return (
    <>
      <div className='d-block'>
        <div className="d-flex">
          <Side />
          <div className='w-100'>
            <nav className={`${styles.homenav} navbar`}>
              <div className="container-fluid">
                <a className="navbar-brand fw-semibold h1 ms-4">Home</a>

              </div>
            </nav>
            <div className="container-fluid">
              <div className=" ms-4 me-4 mt-5">
                <div className={`${styles.homenav} mt-3 p-4`}>
                  <form id="homeData" onSubmit={handleSubmit} >
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
                    {/* onChange={(e) =>handleChange(e)} */}
                    {/* <input className={styles.File} type="file" id="Img" name="Img" onChange={handleChange} /> */}
                    {/* <div className={styles.btncolor}><input className={styles.File} type="file" id="Img" name="Img" onChange={handleChange} /></div> */}

                    {/* <div className={`${styles.overshow}`}>
                        <div className=" text-white mt-2 px-4 ">
                          <div className={`${styles.box3} p-4 pt-5 m-2 mx-0 text-center `}>
                            <Image src="/assets/Group.svg" alt={''} width={20} height={20} />
                            <p className={`${styles.imgtext} fw-normal mb-2`}>Drop Your images here or browse.</p>

                            <input  accept="image/* " type="file" id="Img" name="Img" style={{ display: "none" }} onChange={handleChange} />
  
                            <button className={`${styles.btncolor} border-0 text-white p-1 px-4   `}   >Search</button></div>
                        </div>
                      </div>
  */}

<div id="myModal" className={`${styles.modal} modal`}>
   <div className={`${styles.content} modal-content`}>
    <span onClick={clo} className={`${styles.close} close`}>&times;</span>
    <p> Your data is saved</p>
  </div>

</div>

                    <div className='pb-5'>
                      <button type='submit' className={`${styles.btncolor} border-0 text-white p-1 px-4 float-end `} >Save</button>
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
{/* 
 style={{ display: "none" }}
ref={hiddenFileInput} 
      <div className={styles.header}>Home</div>
      <div className={styles.homes}>
        <div className={styles.category}>
          <h6 className={styles.title}>Title :</h6>
          <form id="homeData" onSubmit={handleSubmit} >
            <input className={styles.intext} type="text" id="Title" name="Title" placeholder="title" onChange={handleChange} />

            <div>
              <h6 className={styles.title}>Description:</h6>
              <input className={styles.indesc} type="Desc" id="Desc" name="Desc" placeholder="Desc" onChange={handleChange} /> </div>
            <div className={styles.Filebox}><input className={styles.File} type="file" id="Img" name="Img" onChange={handleChange} /></div>
            <button className={styles.save} type='submit'> Save</button>
          </form>
        </div>
      </div> 
    
        const handleChange =(e: { target: { name: string; value: SetStateAction<string>; }; })=>
    */}