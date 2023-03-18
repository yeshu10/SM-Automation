import styles from '../styles/mainhome.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Homeside from './homeslide'
import Side from './sidebar'
import Mfoooter from './mfooter'
import React, { useEffect, useState } from "react";
export default function Homes() {
  const [home, setHome] = useState([]);
  const[status,setStatus]=useState('');

    const fetchData = () => {
      return fetch("http://localhost:3000/api/home/homepost")
            .then((response) => response.json())
            .then((data) => setHome(data));
    }
  
    useEffect(() => {
      fetchData();
    },[])   
       
    const checkAll=()=>
    {
        let input:any = window.document.getElementById('maincheck')!
        let ch = document.querySelectorAll<HTMLInputElement>('input[name=theGroup]') 
        let checkboxes = document.querySelectorAll<HTMLInputElement>('input[name=theGroup]')
        if (input.checked){
            console.log('hii')
            //checkboxes.checked=true
            checkboxes.forEach(function(e){
                e.checked=true
            });
    }
    else
    {
        checkboxes.forEach(function(e){
            e.checked=false
        });
    }
}

const delBox=()=>
{
    var  modal = document.getElementById('myDel') as HTMLElement;
    modal.style.display = "block";  
}
const Close =()=>
{
    
    var  x = document.getElementById('myDel') as HTMLElement;
    x.style.display = "none";  
}

        const deletePost= () => {
           // alert("hello");
            // if (confirm("Are you sure to delete the selected item")) {
                //console.log( "Yes");
                let checkboxes = document.querySelectorAll<HTMLInputElement>('input[name=theGroup]:checked') 
let titles=document.querySelectorAll<HTMLInputElement>('.title')
var titlerequest="?"
for (var i = 0; i < checkboxes.length; i++) {
 // array.push(titles[parseInt(checkboxes[i].value)].innerHTML)
  titlerequest+="arr="+(titles[parseInt(checkboxes[i].value)].innerHTML).trim()+"&"
}
titlerequest="http://localhost:3000/api/home/homepost"+titlerequest.substring(0,titlerequest.length-1)
console.log(titlerequest)
        return fetch(titlerequest,
        { method: 'DELETE' });
     
            //   } 
            //   else {
            //     console.log( "No");
            //   }
            }
            
     return (

        <>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"></link>
            <div className='d-lg-block d-none'>
                <div className="d-flex">
                    <Side />
                    <div className='w-100'>
                        <nav className={`${styles.homenav} navbar`}>
                            <div className="container-fluid">
                                <a className="navbar-brand fw-semibold h1 ms-4">Home</a>
                                <div>
                                    <Link href='/home'><Image src="/assets/add_black_24dp 1.png" alt={''} width={20} height={20} className="" /></Link>

                                   
                                     <button onClick= {delBox} className={styles.removebtn}> 
                                     <Image src="/assets/delete_FILL0_wght400_GRAD0_opsz48 1.png" alt={''} width={20} height={20} />
                                     </button> 
                                     <input className={styles.check} id="maincheck" type="checkbox" onClick= {checkAll}  />
                                    {/* <Image src="/assets/delete_FILL0_wght400_GRAD0_opsz48 1.png" alt={''} width={20} height={20} className="ms-4" /> */}
                                    <Image src="/assets/Vector.png" alt={''} width={20} height={20} className="ms-4" />
                                </div>
                            </div>
                        </nav>

                     
                   
                    {(()=>{
    let post=[];
    for(let i=0 ;i<home.length;i++){
                    post.push(    <div  key={home[i]['_id']}  className="container-fluid">
                 
                       
                          <div className=" ms-4 me-4 mt-5">
                                 
                                <div className={`${styles.homenav} mt-5`}>
                              
                                    <div className="d-flex px-3 nowrap">
                                        <div className="mt-5 w-100">
                                            <p className='d-none id title'>{home[i]['_id']}</p>
                                            <p className="fs-6 fw-semibold">Title : <span className={`fw-normal ${styles.text1}`}>{home[i]['title']} </span></p>
                                            <p className="fs-6 fw-semibold">Description :</p>
                                            <p className={`${styles.text1} fs-6 fw-normal`}>
                                            {home[i]['desc']}</p>
                                        </div>
                                        <div className="">
                                            <Image src={home[i]['path']} alt={''} width={352} height={300} className="p-3" />
                                        </div>
                                    </div>
                                   
                                    <div className={`${styles.overshow}`}>
                                        <div className="d-flex justify-content-between text-white mt-2 px-4 ">
                                            <input className={styles.checks} type="checkbox" name="theGroup" value={i}/>
                                            <Link href={`/home?id=${home[i]['_id']}`}><Image src="/assets/edit_FILL0_wght400_GRAD0_opsz48 1.png" alt={''} width={25} height={25} className="" /></Link>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        
                        </div>)
        }
        return post;
        })       
        ()}
        
        </div>
                </div>
                   </div>

                  
<div id="myDel" className={`modal ${styles.modal}`}>
  <span onClick={Close} className={`close ${styles.close}`} title="Close Modal">×</span>
  <div className={`modal-content ${styles.content}`} >
    <div className={`container ${styles.container}`}>
      <h1>Delete Data</h1>
      <p>Are you sure you want to delete ?</p>
    
      <div className="clearfix">
        <button type="button" onClick={Close} className="cancelbtn">Cancel</button>
        <button type="button" onClick={deletePost} className="deletebtn">Delete</button>
      </div>
    </div>
  </div>
</div>


                   
                            {/*<div className={`${styles.homenav} mt-5`}>
                                    <div className="d-flex px-3">
                                        <div className="mt-5">
                                            <p className="fs-6 fw-semibold">Title : <span className={`fw-normal ${styles.text1}`}>Manufacturer & Exporter of Jwellery Machines</span></p>
                                            <p className="fs-6 fw-semibold">Description :</p>
                                            <p className={`${styles.text1} fs-6 fw-normal`}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc aliquam lobortis enim, vitae massa. Nunc arcu porttitor elementum cursus turpis eget sit facilisis pretium. Faucibus pretium sem felis bibendum mauris, consequat dictum neque ultrices. Id sed purus aliquam in facilisi accumsan. Id molestie nibh odio odio sapien volutpat at.</p>
                                        </div>
                                        <div className="">
                                            <Image src="/assets/Rectangle 274.png" alt={''} width={352} height={300} className="p-3" />
                                        </div>
                            </div>


                                    <div className={`${styles.overshow}`}>
                                        <div className="d-flex justify-content-between text-white mt-2 px-4 ">
                                            <input className={styles.checks} type="checkbox" />
                                            <Image src="/assets/edit_FILL0_wght400_GRAD0_opsz48 1.png" alt={''} width={25} height={25} className="" />
                                        </div>
                                    </div>

                                </div>*/}

                           




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
