import styles from '../styles/about.module.css'
import Side from './sidebar';
import Image from 'next/image';
import Homeside from './homeslide';
import Mfoooter from './mfooter';
import React, { useEffect, useState } from "react";
import Link from 'next/link';
export default function about() {

    const [about, setAbout] = useState([]);

    const fetchData = () => {
      return fetch("http://localhost:3000/api/about/aboutpost")
            .then((response) => response.json())
            .then((data) => setAbout(data));
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
 //console.log(titles[parseInt(checkboxes[i].value)].innerHTML)
  titlerequest+="arr="+(titles[parseInt(checkboxes[i].value)].innerHTML).trim()+"&"
}
titlerequest="http://localhost:3000/api/about/aboutpost"+titlerequest.substring(0,titlerequest.length-1)
console.log(titlerequest)
//console.log(arr)

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
            <div className='d-lg-block d-none'>
                <div className="d-flex">
                    <Side />
                    <div className='w-100'>
                        <nav className={`${styles.homenav} navbar`}>
                            <div className="container-fluid">
                                <a className="navbar-brand fw-semibold h1 ms-4">About</a>
                                <div>
                                <Link href='/aboutform'> <Image src="/assets/add_black_24dp 1.png" alt={''} width={20} height={20} className="" /></Link>
                              
                                     <button onClick= {deletePost} className={styles.removebtn}> 
                                     <Image src="/assets/delete_FILL0_wght400_GRAD0_opsz48 1.png" alt={''} width={20} height={20} />
                                     </button> 
                                     <input className={styles.check} id="maincheck" type="checkbox" onClick= {checkAll}  />
                                     <Image src="/assets/Vector.png" alt={''} width={20} height={20} className="ms-4" />
                                </div>
                            </div>
                        </nav>
                                           
                    {(()=>{
    let post=[];
    for(let i=0 ;i<about.length;i++){
                    post.push(    <div  key={about[i]['_id']}  className="container-fluid">

                                                <div className=" ms-4 me-4 mt-5">

                                <div className={`${styles.homenav} mt-5`}>
                                    <div className="d-flex px-3 nowrap">
                                        <div className="mt-5 w-100" >
                                        <p className='d-none id title'>{about[i]['_id']}</p>
                                            <p className="fs-6 fw-semibold">Title : <span className={`fw-normal ${styles.text1}`}>  {about[i]['title']}</span></p>
                                            <p className="fs-6 fw-semibold">Description :</p>
                                            <p className={`${styles.text1} fs-6 fw-normal`}>
                                            {about[i]['desc']}</p>
                                        </div>
                                        <div className="">
                                            <Image src={about[i]['path']} alt={''} width={352} height={300} className="" />
                                        </div>
                                    </div>
                                
                                    <div className={`${styles.overshow}`}>
                                        <div className="d-flex justify-content-between text-white mt-2 px-4 ">
                                            <input className={styles.checks} type="checkbox" name="theGroup" value={i} />
                                            <Link href={`/aboutform?id=${about[i]['_id']}`}>   <Image src="/assets/edit_FILL0_wght400_GRAD0_opsz48 1.png" alt={''} width={25} height={25} className="" /></Link>
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

            <div className='d-lg-none d-block'>
                <Side />
                <Homeside />
                <div className='container-fluid m-0 p-0 '>

                    <div className='p-3'>
                        <h4 className={`${styles.Mtext2} fw-semibold mt-3 mb-3 text-end`}>Title</h4>
                        <div className="">
                            <Image src="/assets/Man.png" alt={''} width={965} height={530} className="img-fluid" />
                        </div>
                        <div>
                            <p className="fs-6 fw-normal mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc aliquam lobortis enim, vitae massa. Nunc arcu porttitor elementum cursus turpis eget sit facilisis pretium. Faucibus pretium sem felis bibendum mauris, consequat dictum neque ultrices. Id sed purus aliquam in facilisi accumsan. Id molestie nibh odio odio sapien volutpat at.</p>
                        </div>
                    </div>

                    <div>
                        <ul>
                            <li className={`${styles.Mtext2} fw-normal text-capitalize fs-5  `}>Lorem ipsum dolor sit amet.</li>
                            <li className={`${styles.Mtext2} fw-normal text-capitalize fs-5  `}>Lorem ipsum dolor sit amet.</li>
                            <li className={`${styles.Mtext2} fw-normal text-capitalize fs-5  `}>Lorem ipsum dolor sit amet.</li>
                            <li className={`${styles.Mtext2} fw-normal text-capitalize fs-5  `}>Lorem ipsum dolor sit amet.</li>
                            <li className={`${styles.Mtext2} fw-normal text-capitalize fs-5  `}>Lorem ipsum dolor sit amet.</li>
                            <li className={`${styles.Mtext2} fw-normal text-capitalize fs-5  `}>Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>


                </div>
                <Mfoooter />
            </div>


            {/* <Side />
            <div className={styles.header}>About</div>
            <div className={styles.about}>
                <div className={styles.para}>
                    <span >
                        <Image src="/assets/pic.png" alt=" " width={170} height={200} />
                    </span>
                </div>
                <h4>Title:</h4> Title for Content
                <br />
                <h4>Description:</h4>

                <p>
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ipsam ab, expedita rerum placeat, eos ea officiis corrupti similique animi dolorem dolores, eaque veritatis dolor. Voluptatum iusto totam eveniet amet.
                </p>
            </div> */}
        </>

    )
}

/*
<div className={styles.text}>
        <h6>Title</h6><p>This is the title</p>
    <h6>Description</h6><p></p>
    </div>

    <div className='about'>
         <h4>Title:</h4> Title for Content
         <br />
         <h4>Description:</h4>
         <div className='para'>
<span >
<Image  src={img} alt=" " width={100}  height={100}  />
</span>
</div> 
        <p>
Butterflies are insects in the macrolepidopteran clade Rhopalocera from the order Lepidoptera, which also includes moths. Adult butterflies have large, often brightly coloured wings, and conspicuous, fluttering flight. The group comprises the large superfamily Papilionoidea, which contains at least one former group, the skippers (formerly the superfamily "Hesperioidea"), and the most recent analyses suggest it also contains the moth-butterflies (formerly the superfamily "Hedyloidea"). Butterfly fossils date to the Paleocene, about 56 million years ago
</p>
  </div>    
  */