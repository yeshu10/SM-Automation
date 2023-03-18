import styles from '../styles/maincategory.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Homeside from './homeslide'
import Side from './sidebar'
import Mfoooter from './mfooter'
import React, { useEffect, useState } from "react";

export default function Homes() {
    const [cat, setCat] = useState([]);

    const fetchData = () => {
      return fetch("http://localhost:3000/api/category/idpost")
            .then((response) => response.json())
            .then((data) => setCat(data));
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
        const deletePost= () => {
           
            if (confirm("Are you sure to delete the selected item")) {
let checkboxes = document.querySelectorAll<HTMLInputElement>('input[name=theGroup]:checked') 
let titles=document.querySelectorAll<HTMLInputElement>('.title')
var titlerequest="?"
for (var i = 0; i < checkboxes.length; i++) {
 // array.push(titles[parseInt(checkboxes[i].value)].innerHTML)
  titlerequest+="arr="+(titles[parseInt(checkboxes[i].value)].innerHTML).trim()+"&"
}
titlerequest="http://localhost:3000/api/category/idpost"+titlerequest.substring(0,titlerequest.length-1)
console.log(titlerequest)

// var arrayTitle=[]
// for (var i = 0; i < array.length; i++) 
//     arrayTitle.push(titles[parseInt(array[i])].innerHTML)
// console.log(arrayTitle)
  

        return fetch(titlerequest,
        { method: 'DELETE' });

                      }
                      else {
                        console.log( "No");
                      }
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
                                <a className="navbar-brand fw-semibold h1 ms-4">Category</a>
                                <div>
                                    <Link href='/category'><Image src="/assets/add_black_24dp 1.png" alt={''} width={20} height={20} className="" /></Link>
                                  
                                     <button onClick= {deletePost} className={styles.removebtn}> 
                                     <Image src="/assets/delete_FILL0_wght400_GRAD0_opsz48 1.png" alt={''} width={20} height={20} />
                                     </button> 
                                     <input className={styles.check} id="maincheck" type="checkbox" onClick= {checkAll}  />
                                  
                                    <Image src="/assets/Vector.png" alt={''} width={20} height={20} className="ms-4" />
                                </div>
                            </div>
                        </nav>
                        <div className="container-fluid">
                            <div className="row g-5 w-100 mt-1 ms-2">
                            {(()=>{
    let post=[];
    for(let i=0 ;i<cat.length;i++){
                    post.push(     <div key={cat[i]['_id']}  className="col-6">
                                    <div className={`${styles.homenav} p-4 `}>
                                        <div>
                                        <p className='d-none id title'>{cat[i]['_id']}</p>
                                            <p className="fs-6 fw-semibold">Title : <span className={`fw-normal ${styles.text1}`}>{cat[i]['title']} </span></p>
                                            <Image src={cat[i]['path']} alt={''} width={536} height={200} className="img-fluid" />
                                        </div>
                                        <div className={`${styles.overshow}`}>
                                            <div className="d-flex justify-content-between text-white mt-2 px-4 ">
                                            <input className={styles.checks} type="checkbox" name="theGroup" value={i} />
                                            <Link href={`/category?id=${cat[i]['_id']}`}><Image src="/assets/edit_FILL0_wght400_GRAD0_opsz48 1.png" alt={''} width={25} height={25} className="" /></Link>
                                            <Link href={`/subcategory?id=${cat[i]['_id']}`}><Image src="/assets/add_black_24dp 1.png" alt={''} width={20} height={20} className="" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                            return post;
                            })       
                            ()}
                                {/*    <div className="col-6">
                                    <div className={`${styles.homenav} p-4 `}>
                                        <div>
                                            <p className="fs-6 fw-semibold">Title : <span className={`fw-normal ${styles.text1}`}>MACHINE SECTION</span></p>
                                            <Image src="/assets/Group 1148.png" alt={''} width={536} height={200} className="img-fluid" />
                                        </div>
                                        <div className={`${styles.overshow}`}>
                                            <div className="d-flex justify-content-between text-white mt-2 px-4 ">
                                                <input className={styles.checks} type="checkbox" />
                                                <Image src="/assets/edit_FILL0_wght400_GRAD0_opsz48 1.png" alt={''} width={25} height={25} className="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            <div className="col-6">
                                    <div className={`${styles.homenav} p-4 `}>
                                        <div>
                                            <p className="fs-6 fw-semibold">Title : <span className={`fw-normal ${styles.text1}`}>MACHINE SECTION</span></p>
                                            <Image src="/assets/Group 1148.png" alt={''} width={536} height={200} className="img-fluid" />
                                        </div>
                                        <div className={`${styles.overshow}`}>
                                            <div className="d-flex justify-content-between text-white mt-2 px-4 ">
                                                <input className={styles.checks} type="checkbox" />
                                                <Image src="/assets/edit_FILL0_wght400_GRAD0_opsz48 1.png" alt={''} width={25} height={25} className="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className={`${styles.homenav} p-4 `}>
                                        <div>
                                            <p className="fs-6 fw-semibold">Title : <span className={`fw-normal ${styles.text1}`}>MACHINE SECTION</span></p>
                                            <Image src="/assets/Group 1148.png" alt={''} width={536} height={200} className="img-fluid" />
                                        </div>
                                        <div className={`${styles.overshow}`}>
                                            <div className="d-flex justify-content-between text-white mt-2 px-4 ">
                                                <input className={styles.checks} type="checkbox" />
                                                <Image src="/assets/edit_FILL0_wght400_GRAD0_opsz48 1.png" alt={''} width={25} height={25} className="" />
                                            </div>
                                        </div>
                                    </div>
    </div>*/}

                            </div>
                        </div>

                    </div>
                </div>
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
