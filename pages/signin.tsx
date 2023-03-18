import { SetStateAction, useState } from 'react';
import styles from '../styles/Sign.module.css'
import Image from 'next/image'
// import Del from '../public/assets/Background.png'
//import Bac from '../public/assets/Background.png'
import Signside from './signside'
import Link from 'next/link';
//const USmail=  process.env.EMAIL;
//const USpass= process.env.PASS;
export default function Sign() 
{
  const [Email , setEmail] = useState('')
  const [Pas , setPass] = useState('')  
      const handleSubmit = async (event : any) => {
        console.log('button click')
  //      console.log(USpass)
  //      const data = {
  //        Mail: event.target.Email.value,
  //        Pas: event.target.Pass.value,
          // const [Email , setEmail] = useState('')
       // const [Pass , setPass] = useState('')     
    const formData = new FormData(event.target)
       fetch('http://localhost:3000/api/signin/signpost',
        {
        method: 'POST', // or 'PUT'
        body : formData,
        })
        .catch((error) => { console.error('Error' ,error);
        });

        }
   const handleChange =(e: { target: { name: string; value: SetStateAction<string>; }; })=>
  {
    if(e.target.name=='Email')
    {
      setEmail(e.target.value)
    }
    if(e.target.name=='Pas')
    {
      setPass(e.target.value)
    }
  }
  return (
    <>
      <div className='d-lg-block d-none'>
        <div className='m-4 d-flex'>
          <div className={`${styles.main} container-fluid mx-0 p-0 `}>
            <div className={styles.maincontent}>
              <Image src="/assets/Group 109.svg" alt={''} width={98} height={63} className="mt-2" />
            </div>
            <Image src="/assets/Man.png" alt=" " width={360} height={321} className='img-fluid mt-4' />
          </div>

          <div className={`${styles.box} container-fluid `}>
            <div className={`${styles.formbox} container-fluid`}>
              <div className="">
                <h2 className='fw-bold mb-5'>Let’s Sign In to SM Automation</h2>
                <form onSubmit={handleSubmit}>

                  <div className={styles.hmm}>
                    <input type="text" name="Email" id='Email' placeholder="email" onChange={handleChange} />
                    <label htmlFor="name">E-mail</label>
                  </div>
                  <div className={`${styles.hmm} mt-4`}>
                    <input type="Password" name="pas" id="Pass" placeholder="........" onChange={handleChange} />
                    <label htmlFor="name">Password</label>
                  </div>

                  <div className='d-flex justify-content-between mt-4'>
                    <div>
                      <input className={styles.checks} type="checkbox" />
                      <label className='fs-6 fw-bold ms-3'>Remember Me</label>
                    </div>
                    <small className={` ${styles.color1}  fw-light`}>Forgot Password ?</small>
                  </div>
                  <Link href='/dashboard'><button type='submit' className={`${styles.btncolor} w-100 border-0 p-3 mt-5 text-white shadow `} >Login</button></Link>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/*function setEmail(value: SetStateAction<string>) {
  throw new Error('Function not implemented.');
}

function setPass(value: SetStateAction<string>) {
  throw new Error('Function not implemented.');
}
//function setEmail(value: SetStateAction<string>) {
  //throw new Error('Function not implemented.');
//}
*/