import styles from '../styles/Head.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Homeside from './homeslide'
export default function Head() {

    return (

        <>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"></link>

           <nav className={`${styles.homenav} navbar`}>
              <div className="container-fluid">
              <div className={styles.logo}>
                            {/* <button className='border-0 bg-transparent' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" */}
                            {/* <Image src="/assets/menu_black_24dp 1.png" alt={''} width={35} height={34} /></button> */}
                            <Image src="/assets/mechanical-engineering 1.png" alt={''} width={35} height={34} className="ms-3" />
                            <label className='fs-5 fw-lighter text-white lh-lg ms-3'><span className='fw-bold fs-5'>SM</span> Automation</label>
            </div>
            <div className={styles.allnav} >
                <Link href='/clienthome' className={styles.linkpage}>
                    <span> <p className='fw-semibold ms-3 fs-6 mb-0 '>Home</p> </span>
                </Link>
                <Link href='/CAbout' className={styles.linkpage}>                   
                  <span> <p className='fw-semibold ms-3 fs-6 mb-0 '>About</p></span>
                </Link>
                <Link href='/productscat' className={styles.linkpage}>                   
                     <p className='fw-semibold ms-3 fs-6 mb-0'>Products</p>
                </Link>
                <Link href='/inquiryForm' className={styles.linkpage}>                   
                     <p className='fw-semibold ms-3 fs-6 mb-0'>Inquiry</p>
                </Link>
                <Image src="/assets/Cart.png" alt={''} width={20} height={20} className="ms-4" />
                <Image src="/assets/Search.png" alt={''} width={20} height={20} className="ms-4" />
                </div>
              </div>
            </nav>
                </>
    )
}

function getInitialProps(ctx: any) {
    throw new Error('Function not implemented.')
}
