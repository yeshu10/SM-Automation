import styles from '../styles/details.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Homeside from './homeslide'
import Side from './sidebar'
import Mfoooter from './mfooter'
import {actFetchProductsRequest,AddCart} from './actions'
//import {AddCart} from './actions'
import React, { useEffect, useState } from "react";
import Head from './header'
import CFoot from './Cfooter'

export default function details() {
    
    var count = 0;
    const [cat, setCat] = useState([]);
    const[sub, setSub]=useState([]);

    const [loaded, setStatus] = useState(false);
    const pload=()=>{

         var url_string = window.location.href; 
       var url = new URL(url_string);
        var c = url.searchParams.get("id");
                 if(c){
            const fetchData = () => {
          return fetch("http://localhost:3000/api/category/idpost?sid="+c)
                .then((response) => response.json())
                .then((data) => {
                    //      setCat(data);
            
              console.log(data)
              setSub(data)
        //       //(document.getElementById("Title") as HTMLInputElement).value=data[0]["title"];
              var my = document.getElementById('uni') as HTMLImageElement;
        my.src=data[0]["subcategory"][0]['path'][0];
        const element: HTMLElement = document.getElementById('Price') as HTMLElement
                element.innerHTML = " ₹"+ data[0]["subcategory"][0]["price"]+"/-";

                const el: HTMLElement = document.getElementById('Desc') as HTMLElement
                el.innerHTML = data[0]["subcategory"][0]["desc"];
                const tl: HTMLElement = document.getElementById('Title') as HTMLElement
                tl.innerHTML = data[0]["subcategory"][0]["title"];


        
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
 if (typeof document !== "undefined") {
 var counterValue = (document.getElementById("counting") as HTMLElement)
 counterValue.innerHTML=count.toString();
 }
//  var counterValue = document.querySelector("#counter-value");
//  var counterIncrement = document.querySelector("#counter-increment");
//  var counterDecrement = document.querySelector("#counter-decrement");
 //var count = 0;
 
const increase = () => {
   count++;
     counterValue.innerHTML=count.toString();
 }
 
 const decrease = () => {
    count--;
      counterValue.innerHTML=count.toString();
  }

//  this.counterDecrement.addEventListener('click', () => {
//    this.count--
//    this.counterValue.setAttribute("value", count);
//  });
 

    // const imageSliderList = () => {
    //     let imageSlider = [];
    //     for (let i = 0; i < slide.length; i++) {
    //       imageSlider.push(
    //         <div className={`${styles.itemss} carousel-item active`}>
    //           <div className={styles.box}>
    //           <div className={`${styles.box1} bg-white m-0 p-0`}>
    //               <img src={slide[i]['path']}   width="247" height="130" />
                  
    //             </div>
                
    //             </div>
    //           </div>
    //         );
    //     }
    //     return imageSlider;
    //   }

     return (
        <>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"></link>
                   <Head />
                  
                   <div className='d-lg-block d-none'>
                <div className="d-flex">
                    <div className='container-fluid'>
                    <div className=''>
                        {/* <div className="container-fluid">    */}
                     
                     <div id="inq"></div>

                    <div className='p-4 px-2 row'>


                            <div className="col-md-6 col-12">



                                             <div id="carouselExampleIndicatorsss" className="carousel slide " data-bs-ride="flase">

                            <div className="carousel-inner">
                                <div className={`${styles.topinnerr} carousel-item active`}>
                                    <div className={styles.slidem}>
                                        <div className={`${styles.box} bg-white  shadow w-75 mx-4`}>
                                            <Image id="uni" src="" alt={''} width={1000} height={530} className="img-fluid mx-5" />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className={`${styles.topinnerr} carousel-item active`}>
                                    <div className={styles.slidem}>
                                        <div className={`${styles.box} bg-white  shadow w-75 mx-4`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={1000} height={530} className="img-fluid mx-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.topinnerr} carousel-item active`}>
                                    <div className={styles.slidem}>
                                        <div className={`${styles.box} bg-white  shadow w-75 mx-4`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={1000} height={530} className="img-fluid mx-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.topinnerr} carousel-item active`}>
                                    <div className={styles.slidem}>
                                        <div className={`${styles.box} bg-white  shadow w-75 mx-4`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={1000} height={530} className="img-fluid mx-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.topinnerr} carousel-item active`}>
                                    <div className={styles.slidem}>
                                        <div className={`${styles.box} bg-white  shadow w-75 mx-4`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={1000} height={530} className="img-fluid mx-5" />
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <button className={`${styles.btnarrr} carousel-control-prev`} type="button" data-bs-target="#carouselExampleIndicatorsss" data-bs-slide="prev">
                                <span className="material-icons fs-1">
                                    chevron_left
                                </span>
                            </button>
                            <button className={`${styles.btnarrr} carousel-control-next`} type="button" data-bs-target="#carouselExampleIndicatorsss" data-bs-slide="next">
                                <span className="material-icons fs-1">
                                    chevron_right
                                </span>
                            </button>
                        </div>
                        <div id="carouselExampleIndicators" className="carousel slide mx-2 mt-5 " data-bs-ride="true">

                            <div className={`${styles.inner} carousel-inner`}>
                                <div className={`${styles.itemss} carousel-item active`}>
                                    <div className={styles.box}>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.itemss} carousel-item `}>
                                    <div className={styles.box}>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.itemss} carousel-item `}>
                                    <div className={styles.box}>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.itemss} carousel-item `}>
                                    <div className={styles.box}>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.itemss} carousel-item `}>
                                    <div className={styles.box}>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className={`${styles.btnarr} carousel-control-prev`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="material-icons fs-1">
                                    chevron_left
                                </span>
                            </button>
                            <button className={`${styles.btnarr} carousel-control-next`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="material-icons fs-1">
                                    chevron_right
                                </span>
                            </button>
                        </div>
                        {/* </div>
                        <div className='d-flex w-50'> */}
                       

                        </div>
   

                         <div className="col-md-6 col-12 p-5">
                            <h3 className={styles.head} id="Title"></h3>
                         <p className='fw-semibold fs-6 mt-4 px-2'id="Desc"></p>
                        <div className="d-flex">
                            <p className="fs-6 fw-semibold mb-2 me-2">Quantity:</p>
                            <button type='submit' className={`${styles.btncolor} border-0 text-white px-3 d-flex flex-nowrap `} >
                            <span ><p id="counting"></p></span>  
                                             <div className={`${styles.qbtn} ms-2`}>                   
                                 <span id="counter-increment" className="material-icons increment"onClick={increase}>
                                    keyboard_arrow_up
                                </span>
                                    <span  id="counter-decrement" className="material-icons decrement" onClick={decrease}>
                                        keyboard_arrow_down
                                    </span>
                                    </div>
                            </button>

                        </div>

                        <p className='fw-semibold fs-5 mt-3 px-2' id="Price"></p>
                        <Link href='/addproduct'>  <button type='submit' className={`${styles.btncolor} border-0 text-white p-1 px-4 fs-6 `}>ADD TO RFQ</button></Link>
                              
                        </div>
                              
                               </div>       
                              
                               </div>   
                                
                               {/* <div className='col-6'>hiiiiiijnibuykiiii</div>       */}
                               </div>  
                               </div>
                               </div>
                               <div className={styles.foot}>
            <CFoot/>
            </div>

                               {/* </div> */}
                               </>
     )
}
       
