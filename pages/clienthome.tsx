import styles from '../styles/Chome.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Homeside from './homeslide'
import Side from './sidebar'
import Mfoooter from './mfooter'
import React, { useEffect, useState } from "react";
import Head from './header'
import CFoot from './Cfooter'
export default function Chome() {
  const [home, setHome] = useState([]);
  const [slide, setSlide] = useState([]);


  const fetchData1 = () => {
    return fetch("http://localhost:3000/api/slider/sliderpost")
        .then((response) => response.json())
        .then((data) => setSlide(data));
}

useEffect(() => {
    fetchData1();
}, [])

    const fetchData = () => {
      return fetch("http://localhost:3000/api/home/homepost")
            .then((response) => response.json())
            .then((data) => setHome(data));
    }
  
    useEffect(() => {
      fetchData();
    },[])   
    const imageSliderList = () => {
        let imageSlider = [];
        for (let i = 0; i < slide.length; i++) {
          imageSlider.push(
            <div className={`${styles.itemss} carousel-item active`}>
              <div className={styles.box}>
              <div className={`${styles.box1} bg-white m-0 p-0`}>
                  <img src={slide[i]['path']}   width="247" height="130" />
                  
                </div>
                
                </div>
              </div>
            );
        }
        return imageSlider;
      }

     return (
        <>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"></link>
                   <Head />
            <div className='d-lg-block d-none w-100'>
                <div className="d-flex">
                           <div className= {`${styles.chomenav} w-100`}>             
                    {(()=>{
    let post=[];
    for(let i=0 ;i<home.length;i++){
                    post.push(    <div  key={home[i]['_id']}  className="container-fluid">
                                   
                          <div className=" ms-4 me-4 mt-5">
                                 
                                <div className={`${styles.homenav} mt-5 w-100`}>
                              
                                    {/* <div className="d-flex px-3 nowrap">
                                    <div className={styles.img}>
                                            <Image src={home[i]['path']} alt={''} width={352} height={300} />
                                        </div>
                                        <div className="mt-5 w-100">
                                            <p className='d-none id title'>{home[i]['_id']}</p>
                                            <p className="fs-6 fw-semibold"><span className={`fw-normal ${styles.text1}`}>{home[i]['title']} </span></p>
                                            <p className="fs-6 fw-semibold"></p>
                                            <p className={`${styles.text2} fs-6 fw-normal`}>
                                            {home[i]['desc']}</p>
                                        </div>
                                        {/* <div className={styles.img}>
                                            <Image src={home[i]['path']} alt={''} width={352} height={300} />
                                        </div> */}
                                    {/* </div> */} 
                                    <div className=" d-flex px-3 ">

                                    <div className={styles.img}>
                                            <Image src={home[i]['path']} alt={''} width={352} height={300} />
                                        </div>
                                        
                                        <div className="mt-5 p-5">
                                            <p className='d-none id title'>{home[i]['_id']}</p>
                                            <p className="fs-6 fw-semibold"><span className={`fw-normal ${styles.text1}`}>{home[i]['title']} </span></p>
                                            <p className="fs-6 fw-semibold"></p>
                                            <p className={`${styles.text2} fs-6 fw-normal`}>
                                            {home[i]['desc']}</p>
                                        </div>
                                                          </div>
                        
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
               

                  

<div>
                   <div id="carouselExampleIndicators" className="carousel slide  mb-4 pt-5" data-bs-ride="false">

<div className={`${styles.inner} carousel-inner`}>
 
 
  {imageSliderList()}
 
</div>

<button className={`${styles.btnarr} carousel-control-prev`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
  <span className="material-icons">
    chevron_left
  </span>

</button>
<button className={`${styles.btnarr} carousel-control-next`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  <span className="material-icons">
    chevron_right
  </span>
</button>
</div>

</div>

<CFoot/>
                   </div>




































                    
            <div className='d-lg-none d-block'>
                <Side />
                <Homeside />
              <div className='container-fluid m-0 p-0 '>

                    <div className='p-3'>
                        <h4 className={`${styles.Mtext2} fw-semibold mt-3 mb-3`}>Manufacturer & Exporter of Jwellery Machines</h4>
                        <div className="">
                            <Image src="/assets/18770 1.svg" alt={''} width={965} height={530} className="img-fluid" />
                        </div>
                        <div>
                            <p className="fs-6 fw-normal mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc aliquam lobortis enim, vitae massa. Nunc arcu porttitor elementum cursus turpis eget sit facilisis pretium. Faucibus pretium sem felis bibendum mauris, consequat dictum neque ultrices. Id sed purus aliquam in facilisi accumsan. Id molestie nibh odio odio sapien volutpat at.</p>
                        </div>
                    </div>

                    <div className={`${styles.mbox1} p-3`}>
                        <h4 className={`${styles.Mtext2} fw-semibold mt-3 mb-3`}>Manufacturer & Exporter of Jwellery Machines</h4>
                        <div className="">
                            <Image src="/assets/Rectangle 274.png" alt={''} width={965} height={530} className="img-fluid" />
                        </div>
                        <div>
                            <p className="fs-6 fw-normal mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc aliquam lobortis enim, vitae massa. Nunc arcu porttitor elementum cursus turpis eget sit facilisis pretium. Faucibus pretium sem felis bibendum mauris, consequat dictum neque ultrices. Id sed purus aliquam in facilisi accumsan. Id molestie nibh odio odio sapien volutpat at.</p>
                        </div>
                    </div>

                </div>

                <div id="carouselExampleIndicators" className="carousel slide mt-4 mb-5" data-bs-ride="true">
                    <div className={`${styles.dots1} carousel-indicators`}>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className={styles.box}>
                                <Image src="/assets/Rectangle 69.png" alt={''} width={965} height={530} className="img-fluid" />
                                <Image src="/assets/Rectangle 69.png" alt={''} width={965} height={530} className="img-fluid" />
                                <Image src="/assets/Rectangle 69.png" alt={''} width={965} height={530} className="img-fluid" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className={styles.box}>
                                <Image src="/assets/Rectangle 69.png" alt={''} width={965} height={530} className="img-fluid" />
                                <Image src="/assets/Rectangle 69.png" alt={''} width={965} height={530} className="img-fluid" />
                                <Image src="/assets/Rectangle 69.png" alt={''} width={965} height={530} className="img-fluid" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className={styles.box}>
                                <Image src="/assets/Rectangle 69.png" alt={''} width={965} height={530} className="img-fluid" />
                                <Image src="/assets/Rectangle 69.png" alt={''} width={965} height={530} className="img-fluid" />
                                <Image src="/assets/Rectangle 69.png" alt={''} width={965} height={530} className="img-fluid" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className={styles.box}>
                                <Image src="/assets/Rectangle 69.png" alt={''} width={965} height={530} className="img-fluid" />
                                <Image src="/assets/Rectangle 69.png" alt={''} width={965} height={530} className="img-fluid" />
                                <Image src="/assets/Rectangle 69.png" alt={''} width={965} height={530} className="img-fluid" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className={styles.box}>
                                <Image src="/assets/Rectangle 69.png" alt={''} width={965} height={530} className="img-fluid" />
                                <Image src="/assets/Rectangle 69.png" alt={''} width={965} height={530} className="img-fluid" />
                                <Image src="/assets/Rectangle 69.png" alt={''} width={965} height={530} className="img-fluid" />
                            </div>
                        </div>
                    </div>

                </div>

                <Mfoooter />
            </div>






        </>






    )
}
