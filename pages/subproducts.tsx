import styles from '../styles/cat.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Homeside from './homeslide'
import Side from './sidebar'
import Mfoooter from './mfooter'
import React, { useEffect, useState } from "react";
import Head from './header'
import CFoot from './Cfooter'

export default function cat() {
    const [cat, setCat] = useState([]);
    const[sub, setSub]=useState([]);

    const fetchData1= () => {
        return fetch("http://localhost:3000/api/category/idpost")
            .then((response) => response.json())
            .then((data) => setCat(data));
    }

    useEffect(() => {
        fetchData1();
    }, [])
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
                 let userStr = JSON.stringify(data);
                 console.log(userStr);
                //  alert(data)
                //  alert("hi")
                 console.log(data);
            //   (document.getElementById("pid") as HTMLInputElement).value=data[0]["_id"];
              (document.getElementById("Title") as HTMLElement).innerHTML=data[0]["title"];
            //   (document.getElementById("Desc") as HTMLInputElement).value=data[0]["desc"];
              //(document.getElementById("subData")as HTMLInputElement).innerText += data[0]["desc"];
              console.log(data[0]["subcategory"])
              setSub(data[0]["subcategory"])
              
                });
                         }
          useEffect(() => {
          fetchData();
        },[])
         }         
                 else
console.log('sorry');
        
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
    return (

        <>

            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"></link>
            <Head />

            <div className={styles.title}> <h4  id='Title'> </h4></div>
            <div className='d-lg-block d-none'>
                <div className="d-flex">
                    <div className='w-100'>
                        <div className="container-fluid">
                            <div className="row g-5 w-100 mt-1 ms-2">
                                {(() => {
                                    let post = [];
                                    for (let i = 0; i < sub.length; i++) {
                                        post.push(<div key={sub[i]['_id']} className="col-4">
                                            {/* <div className={`${styles.homenav} p-4 `} onClick={sub}>
                                                <div className={styles.fimg}>
                                                    <Image src={cat[i]['path']} alt={''} width={536} height={200} className="img-fluid" />
                                                    <p className="fs-6 fw-semibold"><span className={`fw-normal ${styles.text1}`}>{cat[i]['title']} </span></p>
                                                </div>

                                            </div> */}
                                            <div className={styles.shadow}>
                                            <Link href={`/Subdetails?id=${sub[i]['_id']}`}> <Image src={sub[i]['path'][0]} alt={''} width={536} height={200} className="img-fluid" /></Link> 
                                                <div className={styles.maincategory}>
                                                    <p className="fs-6 fw-semibold text-center text-white p-2">{sub[i]['title']}</p>
                                              </div>
                                          </div>
                                        </div>
                                        )
                                    }
                                    return post;
                                })
                                    ()}

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={styles.foot}>
            <CFoot/>
            </div>

           
           
           
           
           
           
           
           
           
            <div className='d-lg-none d-block'>
                <Side />
                <Homeside />
                <div className="container-fluid">
                    <div className="row mt-4">
                        <div className="col-6 ">
                            <div className='shadow'>
                                <Image src="/assets/Group 1148.png" alt={''} width={536} height={200} className="img-fluid" />
                                <div className={styles.imgbox}>
                                    <p className="fs-6 fw-semibold text-center text-white p-2">MACHINE SECTION</p>
                                </div>

                            </div>
                        </div>

                        <div className="col-6">
                            <div className='shadow'>
                                <Image src="/assets/Group 1148.png" alt={''} width={536} height={200} className="img-fluid" />
                                <div className={styles.imgbox}>
                                    <p className="fs-6 fw-semibold text-center text-white p-2">MACHINE SECTION</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='shadow'>
                                <Image src="/assets/Group 1148.png" alt={''} width={536} height={200} className="img-fluid" />
                                <div className={styles.imgbox}>
                                    <p className="fs-6 fw-semibold text-center text-white p-2">MACHINE SECTION</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='shadow'>
                                <Image src="/assets/Group 1148.png" alt={''} width={536} height={200} className="img-fluid" />
                                <div className={styles.imgbox}>
                                    <p className="fs-6 fw-semibold text-center text-white p-2">MACHINE SECTION</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='shadow'>
                                <Image src="/assets/Group 1148.png" alt={''} width={536} height={200} className="img-fluid" />
                                <div className={styles.imgbox}>
                                    <p className="fs-6 fw-semibold text-center text-white p-2">MACHINE SECTION</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='shadow'>
                                <Image src="/assets/Group 1148.png" alt={''} width={536} height={200} className="img-fluid" />
                                <div className={styles.imgbox}>
                                    <p className="fs-6 fw-semibold text-center text-white p-2">MACHINE SECTION</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Mfoooter />
            </div>








        </>






    )
}
