/* eslint-disable react/jsx-no-duplicate-props */
import styles from '../styles/product.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Homeside from './homeslide'
import Side from './sidebar'
import Mfoooter from './mfooter'
export default function Product() {

    return (

        <>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"></link>
            <div className='d-lg-none d-block'>
                <Side />
                <Homeside />


                <div className='pt-4 px-4'>

                    <div className="container-fluid">
                        <div className="row">
                            <div className={`${styles.rabox} col-12 p-2`}>
                                <button type='submit' className={`${styles.btncolor} border-0 text-white float-end `}>
                                    <Image src="/assets/Vector (1).png" alt=" " width={15} height={15} className='' />
                                </button>
                                <div className='d-flex'>
                                    <div className={`${styles.cardbox1} shadow me-3`}>
                                        <Image src="/assets/atm.jpg" alt={''} width={150} height={150} className=" " />
                                    </div>
                                    <div className={styles.textbox}>
                                        <p className={`${styles.text} fw-semibold m-0 p-0 fs-6 lh-lg`}>AAKRUTI_XI PLUS</p>
                                        <p className='fw-normal m-0 p-0  lh-lg'>15 December 2022</p>
                                        <p className='fw-normal m-0 p-0  lh-lg'>Price : <span>₹ 1,00,000</span></p>
                                        <button type='submit' className={`${styles.btncolor} border-0 text-white d-flex flex-nowrap `}>1
                                            <span className="material-icons text-white ">
                                                chevron_left
                                            </span>
                                            <span className="material-icons text-white" >
                                                chevron_right
                                            </span>
                                        </button>
                                        <p className='fw-normal m-0 p-0  lh-lg'>Total : <span>₹ 1,00,000</span></p>
                                    </div>
                                </div>

                            </div>
                            <div className={`${styles.rabox2} col-12 p-2`}>
                                <button type='submit' className={`${styles.btncolor} border-0 text-white float-end `}>
                                    <Image src="/assets/Vector (1).png" alt=" " width={15} height={15} className='' />
                                </button>
                                <div className='d-flex'>
                                    <div className={`${styles.cardbox1} shadow me-3`}>
                                        <Image src="/assets/atm.jpg" alt={''} width={150} height={150} className=" " />
                                    </div>
                                    <div className={styles.textbox}>
                                        <p className={`${styles.text} fw-semibold m-0 p-0 fs-6 lh-lg`}>AAKRUTI_XI PLUS</p>
                                        <p className='fw-normal m-0 p-0  lh-lg'>15 December 2022</p>
                                        <p className='fw-normal m-0 p-0  lh-lg'>Price : <span>₹ 1,00,000</span></p>
                                        <button type='submit' className={`${styles.btncolor} border-0 text-white d-flex flex-nowrap `}>1
                                            <span className="material-icons text-white ">
                                                chevron_left
                                            </span>
                                            <span className="material-icons text-white" >
                                                chevron_right
                                            </span>
                                        </button>
                                        <p className='fw-normal m-0 p-0  lh-lg'>Total : <span>₹ 1,00,000</span></p>
                                    </div>
                                </div>

                            </div>
                            <div className={`${styles.rabox} col-12 p-2`}>
                                <button type='submit' className={`${styles.btncolor} border-0 text-white float-end `}>
                                    <Image src="/assets/Vector (1).png" alt=" " width={15} height={15} className='' />
                                </button>
                                <div className='d-flex'>
                                    <div className={`${styles.cardbox1} shadow me-3`}>
                                        <Image src="/assets/atm.jpg" alt={''} width={150} height={150} className=" " />
                                    </div>
                                    <div className={styles.textbox}>
                                        <p className={`${styles.text} fw-semibold m-0 p-0 fs-6 lh-lg`}>AAKRUTI_XI PLUS</p>
                                        <p className='fw-normal m-0 p-0  lh-lg'>15 December 2022</p>
                                        <p className='fw-normal m-0 p-0  lh-lg'>Price : <span>₹ 1,00,000</span></p>
                                        <button type='submit' className={`${styles.btncolor} border-0 text-white d-flex flex-nowrap `}>1
                                            <span className="material-icons text-white ">
                                                chevron_left
                                            </span>
                                            <span className="material-icons text-white" >
                                                chevron_right
                                            </span>
                                        </button>
                                        <p className='fw-normal m-0 p-0  lh-lg'>Total : <span>₹ 1,00,000</span></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <hr></hr>
                        <p className='fw-normal m-0 p-0 float-end'>Total : <span className={styles.text}>₹ 3,00,000</span></p>
                    </div>



                    <div className='p-sm-4'>
                        <p className={`${styles.text} fw-semibold fs-6 text-center mt-5 mt-sm-4 pt-2 pt-sm-0`}> Inquiry Form </p>

                        <div className="container-fluid p-0 ">
                            <form className={`${styles.mform}  p-sm-4`}>
                                <div >
                                    <label>Name</label><br></br>
                                    <input type='text' required ></input>

                                </div>

                                <div className={`${styles.mforrm} mt-4`}>
                                    <label>Company</label>
                                    <input type='text' required></input><br></br>

                                </div>
                                <div className='mt-4'>
                                    <label>City</label> <br></br>
                                    <input type='text'></input>
                                </div>
                                <div className='mt-4'>
                                    <label>Mobile</label> <br></br>
                                    <input type='text'></input>
                                </div>
                                <div className='mt-4'>
                                    <label>Email</label> <br></br>
                                    <input type='text'></input>
                                </div>
                                <div className='mt-4'>
                                    <label>Description</label> <br></br>
                                    <textarea></textarea>
                                </div>
                                <div className='mt-3'>
                                    <label>Security Code</label>
                                    <div className='d-flex flex-nowarp'>
                                        <p className='m-0 p-1'>qgphjD</p>
                                        <button className='border-0 bg-white'><Image src="/assets/cached_black_24dp 1.png" alt={''} width={15} height={15} className="" /></button>
                                        <input type='text'></input>
                                    </div>
                                </div>

                            </form>
                            <div className='text-center mt-5'>
                                <button type='submit' className={`${styles.btncol} border-0 fw-semibold p-1 px-4 me-2`}>Add More</button> <span className='fw-semibold'> OR </span>
                                <button type='submit' className={`${styles.btncol} border-0 fw-semibold p-1 px-4 ms-2`}>Send RFQ</button></div>
                        </div>
                    </div>



                </div>








                <Mfoooter />
            </div>



        </>
    )
}
