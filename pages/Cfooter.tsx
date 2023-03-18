import styles from '../styles/CFoot.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function CFoot() {
    const [home, setHome] = useState([]);


    const fetchData = () => {
        return fetch("http://localhost:3000/api/footer/footpost")
              .then((response) => response.json())
              .then((data) => {setHome(data);
              const wt: HTMLElement = document.getElementById('wat') as HTMLElement
              wt.innerHTML = data[0]['whatsapp']; 
              const el: HTMLElement = document.getElementById('mail') as HTMLElement
              el.innerHTML = data[0]['email']; 
              
               } );
      }
    
      useEffect(() => {
        fetchData();
      },[])   

    return (

        <>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"></link>

{/* <div className={styles.box}>hi</div> */}
<div className={`${styles.homenav} navbar`}>
              <div className="container-fluid">
            <div className={styles.contact}>
            <p> CONTACT US </p>
            </div>
               
              <div className={styles.img}>
              <Image src="/assets/Group 109.png" alt={''} width={100} height={100} className="ms-3 " />       
              </div>
              <li className='d-flex p-2 ps-5 pe-5 mt-3'>
                                {/* <span className="material-icons">info</span> */}
                                <span className="material-icons"> <Image src="/assets/whatsapp 1.png" alt=" " width={30} height={30} className='position-absolute p-1 ps-2' /> </span>
                                <p className={`${styles.numb}fw-semibold ms-3 fs-6 mb-0 p-2`}id="wat">  </p>
              </li>
              <li className='d-flex  p-2 ps-5 pe-5 mt-3'>
                                {/* <span className="material-icons">info</span> */}
                                <span className="material-icons"> <Image src="/assets/Email (1).png" alt=" " width={30} height={30} className='position-absolute p-1 ps-2' /> </span>
                                <p className={`${styles.numb}fw-semibold ms-3 fs-6 mb-0 p-2`} id="mail"></p>
              </li>
              
                             
                 
              
                    </div>
             
            </div>



            {/* <footer className={`${styles.homefoot} footer w-100`}>
              <div className="container-fluid">
                <div>
                    <div className={styles.box}>Contact Us</div>
                <div className={styles.img}> <Image src="/assets/Group 109.png" alt={''} width={100} height={100} className="ms-3" /> </div>       
                    <span> <Image src="/assets/whatsapp 1.png" alt=" " width={30} height={30} className='position-absolute p-1 ps-2' /></span><p className={`${styles.numb}fw-semibold ms-3 fs-6 mb-0`}> 12345678</p> 
                     <span> <Image src="/assets/Email (1).png" alt=" " width={30} height={30} className='position-absolute p-1 ps-2' /></span><p className='fw-semibold ms-3 fs-6 mb-0'> @gmail</p>  
                </div>
              </div>
            </footer>  */}
             
                </>
    )
}

function getInitialProps(ctx: any) {
    throw new Error('Function not implemented.')
}
