/* eslint-disable react-hooks/rules-of-hooks */
import styles from '../styles/Inq.module.css'
import {SetStateAction, useState } from 'react';
import { useEffect, useRef } from 'react';
import Side from './sidebar';
import Image from "next/image";
import Head from './header';
import CFoot from './Cfooter';
declare global {
  interface Window {
    onload: any;
      }
}
export default function Inq() {

  const [name, setName] = useState('')
  const [comp, setComp] = useState('')
  const [city, setCity] = useState('')
  const [desc, setDesc] = useState('')
  const [mob, setMob] = useState('')
  const [mail, setMail] = useState('')



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



  
    console.log('button click')
    event.preventDefault();
    const formData = new FormData(event.target);

    var object: { [key: string]: string; } = {};
formData.forEach(function (value, key) {
    object[key] = value as string;
});
var json = JSON.stringify(object);

fetch('http://localhost:3000/api/inquiry/inquirypost',
    {
        method: 'POST', // or 'PUT' 
        headers: {
            'Content-Type': 'application/json',
            },
        body: json,
    })
    .catch((error) => {
        debugger
        console.error('Error', error);
      });

    // fetch('http://localhost:3000/api/inquiry/inquirypost',
    //   {
    //     method: 'POST',
    //     body: formData,
    //   })
    //   .catch((error) => {
    //     debugger
    //     console.error('Error', error);
    //   });
  
  }
  
  
  const handleChange = (e: any) => {
    if (e.target.name == 'Name') {
      setName(e.target.value)
    }
    if (e.target.name == 'Company') {
      setComp(e.target.value)
    }
    if (e.target.name == 'City') {
      setCity(e.target.value)
    }
    if (e.target.name == 'Mobile') {
      setMob(e.target.value)
    }
    if (e.target.name == 'Email') {
      setMail(e.target.value)
    }
    if (e.target.name == 'Desc') {
        setDesc(e.target.value)
      }
  }
  return (
    <>
     <Head />
     <h3 className={styles.inq}>Inquiry Form</h3>
      <div className='d-block'>
        <div className=" w-100">
         
          <div className={styles.formset}>
          

            <div className="container-fluid">
              <div className=" ms-4 me-4 mt-5">
                <div className={`${styles.homenav} mt-3 p-4`}>
                  <form id="homeData" onSubmit={handleSubmit} >
                    <div className='mt-2' >
                       <input type="text" name="pid" id="pid" style={{ display: "none" }} />
                      <p className="fs-6 fw-semibold mb-2">Name :</p>
                      <input type='text' id="Name" name="Name" placeholder="Name" onChange={handleChange} className={`${styles.inputbox} w-100`} />
                    </div>
                    <div className='mt-2' >
                      <p className="fs-6 fw-semibold mb-2">Company :</p>
                      <input type='text' id="Company" name="Company" placeholder="Company" onChange={handleChange} className={`${styles.inputbox} w-100`} />
                    </div>
                    <div className='mt-2' >
                      <p className="fs-6 fw-semibold mb-2">City  :</p>
                      <input type='text' id="City" name="City" placeholder="City" onChange={handleChange} className={`${styles.inputbox} w-100`} />
                    </div>
                    <div className='mt-2' >
                      <p className="fs-6 fw-semibold mb-2">Mobile :</p>
                      <input type='text' id="Mobile" name="Mobile" placeholder="Mobile" onChange={handleChange} className={`${styles.inputbox} w-100`} />
                    </div>
                    <div className='mt-2' >
                      <p className="fs-6 fw-semibold mb-2">Email :</p>
                      <input type='text' id="Email" name="Email" placeholder="Email" onChange={handleChange} className={`${styles.inputbox} w-100`} />
                    </div>
                    <div className='mt-3'>
                      <p className="fs-6 fw-semibold mb-2">Description :</p>
                      <textarea id="Desc" name="Desc" placeholder="Desc" onChange={handleChange} className={`${styles.textarea} w-100`} />
                    </div>

    
<div id="myModal" className={`${styles.modal} modal`}>
   <div className={`${styles.content} modal-content`}>
    <span onClick={clo} className={`${styles.close} close`}>&times;</span>
    <p> Your data is saved</p>
  </div>

</div>

                    <div>
                      <button type='submit' className={`${styles.btncolor} border-0  p-1 px-4  `} >Submit</button>
                   
                      <button type='button' className={`${styles.btncolor1} border-0  p-1 px-4 `} >Reset</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className={styles.foot}>
      <CFoot/>
      </div>
    </>
  )

}
