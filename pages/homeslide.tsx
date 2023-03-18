import styles from '../styles/homeslide.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function Homeside() {

    return (

        <>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"></link>

            <div className={` ${styles.side_header} offcanvas offcanvas-start `} data-bs-scroll="true" tabIndex={-1} id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header pb-0">
                    <div className='p-4 px-0'>
                        <Image src="/assets/mechanical-engineering 1.svg" alt={''} width={30} height={30} className="" />
                        <label className={`${styles.linkpage} fs-5 fw-normal lh-lg ms-3`}><span className='fw-bold fs-5'>SM</span>Automation</label>
                    </div>


                </div>

                <hr className='m-0'></hr>
                <div className="offcanvas-body">
                    <ul className='p-0'>
                        <Link href='/mainhome' className={styles.linkpage}>
                            <li className='d-flex  p-2 mt-3'>
                                <span className="material-icons">home</span>
                                <p className='fw-semibold ms-3 fs-6 fw-semibold mb-0'>Home</p>
                            </li>
                        </Link>
                        <Link href='/about' className={styles.linkpage}>
                            <li className='d-flex  p-2  mt-3'>
                                <span className="material-icons">info</span>
                                <p className='fw-semibold ms-3 fs-6 fw-semibold mb-0'>About</p>
                            </li>
                        </Link>

                        <Link href='/product' className={styles.linkpage}>
                            <li className='d-flex  p-2  mt-3'>
                                <span className="material-icons">category</span>
                                <p className='fw-semibold ms-3 fs-6 fw-semibold mb-0'>Products</p>
                            </li>
                        </Link>

                        <Link href='/inquiry' className={styles.linkpage}>
                            <li className='d-flex  p-2  mt-3'>
                                <span className="material-icons">help</span>
                                <p className='fw-semibold ms-3 fs-6 fw-semibold mb-0'>Inquiry</p>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>









            {/* 
            <div className={styles.mainboxsss}>
                <input type='checkbox' id='check' className={styles.check}></input>
                <div className={styles.searchbox}>
                    <input type='text' placeholder='Type here ...'></input>
                    <label htmlFor="check">
                        <p>icon</p>
                    </label>
                </div>
            </div> */}


        </>
    )
}
