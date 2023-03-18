import styles from '../styles/footer.module.css'
import { SetStateAction, useState } from 'react';
import Side from './sidebar'
import Image from 'next/image'
import Link from 'next/link';
export default function footer() {
    const [WAN, setWan] = useState('')
    const [mail, setEmail] = useState('')  
    const handleSubmit = async (event : any) => {
        console.log('button click')
        event.preventDefault();
        const formData = new FormData(event.target);
          fetch('http://localhost:3000/api/footer/footpost',
          {
             method: 'POST',  
          body: formData,
          })
           .catch((error) => { 
            debugger
            console.error('Error' ,error);
          });
          }
          const handleChange =(e: any)=>
          {
            if(e.target.name=='wan')
            {
              setWan(e.target.value)
            }
            if(e.target.name=='mail')
            {
              setEmail(e.target.value)
            }
          }
    return(
        <>
            <div className='d-lg-block d-none'>
                <div className="d-flex">
                    <Side />
                    <div className='w-100'>
                        <nav className={`${styles.homenav} navbar`}>
                            <div className="container-fluid">
                                <a className="navbar-brand fw-semibold h1 ms-4">Category</a>

                            </div>
                        </nav>
                        <div className="container-fluid">
                            <div className=" ms-4 me-4 mt-5">
                                <div className={`${styles.homenav} mt-3 p-4`}>
                                    <form onSubmit={handleSubmit} className='ps-2'>
                                        <div className='mt-2' >
                                            <p className="fs-6 fw-semibold mb-2">Whatsapp Number :</p>
                                            <div className='d-flex flex-nowarp'>
                                                <Image src="/assets/whatsapp 1.png" alt=" " width={30} height={30} className='position-absolute p-1 ps-2' />
                                                <input type='text' id="wan" name="wan" placeholder="12345 67890" className={`${styles.inputbox} pb-1 ps-5 `}  onChange={handleChange}/>
                                              {/* <input type="text" /> */}
                                                <div className='ms-5 '>
                                                    <Image src="/assets/Edit.png" alt=" " width={15} height={15} />
                                                    <Image src="/assets/Del.png" alt=" " width={15} height={15} className='ms-4' />
                                                </div>
                                            </div>

                                        </div>

                                        <div className='mt-3'>
                                            <p className="fs-6 fw-semibold mb-2">Email :</p>
                                            <div className='d-flex flex-nowarp'>
                                                <Image src="/assets/Email (1).png" alt=" " width={30} height={30} className='position-absolute p-1 ps-2' />
                                                <input type='text' id="mail" name="mail" placeholder="smautomation@gmail.com" className={`${styles.inputbox} pb-1 ps-5`}  onChange={handleChange}/>
                                                <div className='ms-5 '>
                                                    <Image src="/assets/Edit.png" alt=" " width={15} height={15} />
                                                    <Image src="/assets/Del.png" alt=" " width={15} height={15} className='ms-4' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mt-3'>
                                            <p className="fs-6 fw-semibold mb-2">Title :</p>
                                            <div className='d-flex flex-nowarp'>
                                                <Image src="/assets/Group (1).svg" alt=" " width={43} height={30} className={`${styles.upload} position-absolute p-1 ps-3 pe-3`}  />
                                                <input type='text' id="Title" name="Title" placeholder="Write here . . ." className={`${styles.inputbox} pb-1 ps-5`}  onChange={handleChange} />
                                                <div className='ms-5 '>
                                                    <Image src="/assets/Edit.png" alt=" " width={15} height={15} />
                                                    <Image src="/assets/Del.png" alt=" " width={15} height={15} className='ms-4' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className=' mt-5 pt-5 text-center'>
                                            <Link href='/footer'> <button type='button' className={`${styles.btncolor} border-0 text-white p-1 px-4 text-center mb-5`}>Add New Field</button></Link>
                                        </div>
                                        <div className={` ${styles.savebtn} pb-4`}>

                                            <button type='submit' className={`${styles.btncolor} border-0 text-white p-1 px-4 float-end `}>Save</button>
                                            <button type='submit' className={`${styles.btncolor} border-0 text-white p-1 px-4 float-end me-4`}>Discard</button>
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