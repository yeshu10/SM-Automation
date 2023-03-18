import styles from '../styles/homeslide.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function Mfoooter() {

    return (

        <>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"></link>

            <div className='mt-4'>
                <div className='d-flex justify-content-center'>
                    <div className={`${styles.arrowup} position-absolute pt-5 mt-2`}></div>
                </div>
                <div className={`${styles.footerbox} container-fluid p-3`}>
                    <p className='text-white text-center  fs-6'>CONTACT US</p>

                </div>


                <div className={`${styles.footerbox1} container-fluid `}>


                    <div className='text-center pt-4'>
                        <Image src="/assets/mechanical-engineering 1.svg" alt={''} width={30} height={30} className="" />
                        <label className={`${styles.linkpage} fs-6 fw-normal lh-lg ms-3`}><span className='fw-bold fs-6'>SM</span>Automation</label>
                    </div>


                    <div className="row pt-4">
                        <div className="col-6 text-center">
                            <Image src="/assets/WA.png" alt={''} width={25} height={25} className="" />
                            <p className={`${styles.mtext}  fw-normal lh-lg ms-3`}>+911234567890</p>
                        </div>
                        <div className="col-6 text-center">
                            <Image src="/assets/Email (1).png" alt={''} width={25} height={25} className="" />
                            <p className={`${styles.mtext}  fw-normal lh-lg ms-3`}>smautomation@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
