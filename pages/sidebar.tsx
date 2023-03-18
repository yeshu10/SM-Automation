
import styles from '../styles/Side.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Homeside from './homeslide'
export default function Side() {

    return (

        <>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"></link>


            <div className={`${styles.main} container-fluid mx-0 p-0  d-lg-block d-none`}>
                <div className={styles.maincontent}>
                    <Image src="/assets/Group 109.svg" alt={''} width={98} height={63} className="mt-2" />
                </div>
                <div>
                    <ul className='list-unstyled '>
                        <Link href='/dashboard' className={styles.linkpage}>
                            <li className='d-flex  p-2 ps-5 pe-5'>
                                <span className="material-icons">dashboard</span>
                                <p className='fw-semibold ms-3 fs-6 mb-0'>Dashboard</p>
                            </li>
                        </Link>

                        <Link href='/mainhome' className={styles.linkpage}>
                            <li className='d-flex  p-2 ps-5 pe-5 mt-3'>
                                <span className="material-icons">home</span>
                                <p className='fw-semibold ms-3 fs-6 mb-0'>Home</p>
                            </li>
                        </Link>

                        <Link href='/about' className={styles.linkpage}>
                            <li className='d-flex  p-2 ps-5 pe-5 mt-3'>
                                <span className="material-icons">info</span>
                                <p className='fw-semibold ms-3 fs-6 mb-0'>About</p>
                            </li>
                        </Link>

                        <Link href='/maincategory' className={styles.linkpage}>
                            <li className='d-flex  p-2 ps-5 pe-5 mt-3'>
                                <span className="material-icons">category</span>
                                <p className='fw-semibold ms-3 fs-6 mb-0'>Category</p>
                            </li>
                        </Link>

                        <Link href='/slider' className={styles.linkpage}>
                            <li className='d-flex  p-2 ps-5 pe-5 mt-3'>
                                <span className="material-icons">tune</span>
                                <p className='fw-semibold ms-3 fs-6 mb-0'>Slider</p>
                            </li>
                        </Link>

                        <Link href='/inquiry' className={styles.linkpage}>
                            <li className='d-flex  p-2 ps-5 pe-5 mt-3'>
                                <span className="material-icons">support_agent</span>
                                <p className='fw-semibold ms-3 fs-6 mb-0'>Inquiry</p>
                            </li>
                        </Link>

                        <Link href='/Foot' className={styles.linkpage}>
                            <li className='d-flex  p-2 ps-5 pe-5 mt-3'>
                                <span className="material-icons">phone</span>
                                <p className='fw-semibold ms-3 fs-6 mb-0'>Footer</p>
                            </li>
                        </Link>

                        <Link href='/home' className={styles.linkpage}>
                            <li className='d-flex  p-2 ps-5 pe-5 mt-3'>
                                <span className="material-icons">visibility</span>
                                <p className='fw-semibold ms-3 fs-6 mb-0'>Preview</p>
                            </li>
                        </Link>
                    </ul>


                    <div className='mt-5 pt-5'>
                        <p className={`${styles.linkpage} fw-semibold mt-5 pt-2 fs-6 mb-0 text-center`}>Logout</p>
                    </div>

                </div>


            </div>


            <div className='d-lg-none d-block'>
                <nav className={`${styles.nav} navbar flex-nowarp `}>
                    <div className="container-fluid p-2">

                        <div className=''>
                            <button className='border-0 bg-transparent' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"
                            ><Image src="/assets/menu_black_24dp 1.png" alt={''} width={35} height={34} /></button>
                            <Image src="/assets/mechanical-engineering 1.png" alt={''} width={35} height={34} className="ms-3" />
                            <label className='fs-5 fw-lighter text-white lh-lg ms-3'><span className='fw-bold fs-5'>SM</span>Automation</label>
                        </div>
                        <div className='d-flex'>

                            {/* <div className={`${styles.searchbox} `}>
                                <input type='text' placeholder='Type here. . .'></input>
                                <Image src="/assets/search_black_24dp (2) 1.png" alt={''} width={30} height={30} className={styles.imgbox} />
                                <span className={`${styles.imgg} material-icons`}>dashboarddfd</span>
                            </div> */}
                            <Image src="/assets/search_black_24dp (2) 1.png" alt={''} width={30} height={30} className={styles.imgbox} />

                            <Image src="/assets/Group.png" alt={''} width={30} height={30} className="ms-3 " />
                        </div>
                    </div>
                </nav>


            </div>






        </>






    )
}



{/* <div className={`${styles.main} container-fluid mx-0 p-0  `}>
                <div className={styles.maincontent}>
                    <Image src="/assets/Group 109.svg" alt={''} width={98} height={63} className="mt-2" />
                </div>
                <div>
                    <ul className='list-unstyled text-center'>
                        <Link href='/dashboard' className={styles.linkpage}>
                            <li className='d-flex  p-2'>
                                <span className="material-symbols-outlined">home</span>

                                <p className='fw-semibold ms-3 fs-5 mb-0'>Dashboard</p>
                            </li>
                        </Link>

                        <Link href='/dashboard' className={styles.linkpage}>
                            <li className='d-flex justify-content-center p-2 mt-3'>
                                <Image src="/assets/dashboard_black_24dp 1.png" alt=" " width={20} height={20} className={`${styles.imgcolor} mt-1`} />
                                <p className='fw-semibold ms-3 fs-5 mb-0'>Dashboard</p>
                            </li>
                        </Link>

                        <Link href='/dashboard' className={styles.linkpage}>
                            <li className='d-flex justify-content-center p-2 mt-3'>
                                <Image src="/assets/dashboard_black_24dp 1.ico" alt=" " width={20} height={20} className={`${styles.imgcolor} mt-1`} />
                                <p className='fw-semibold ms-3 fs-5 mb-0'>Dashboard</p>
                            </li>
                        </Link>

                        <Link href='/dashboard' className={styles.linkpage}>
                            <li className='d-flex justify-content-center p-2 mt-3'>
                                <Image src="/assets/dashboard_black_24dp 1.png" alt=" " width={20} height={20} className={`${styles.imgcolor} mt-1`} />
                                <p className='fw-semibold ms-3 fs-5 mb-0'>Dashboard</p>
                            </li>
                        </Link>

                        <Link href='/dashboard' className={styles.linkpage}>
                            <li className='d-flex justify-content-center p-2 mt-3'>
                                <Image src="/assets/dashboard_black_24dp 1.png" alt=" " width={20} height={20} className={`${styles.imgcolor} mt-1`} />
                                <p className='fw-semibold ms-3 fs-5 mb-0'>Dashboard</p>
                            </li>
                        </Link>


                    </ul>
                </div>
            </div> */}

{/* <div className={styles.side}>
                <div className={styles.sidedata}>
                    <span className={styles.dash}>
                        <div className={styles.logo}>
                            <Image src="/assets/logo1.png" alt=" " width={20} height={20} />
                            <Link href='/dashboard'>Dashboard</Link>
                        </div>
                    </span>
                    <br /><br />
                    <span className={styles.home}>
                        <Image src="/assets/Home.png" alt=" " width={20} height={20} />
                        <Link href='/home'> Home</Link>
                    </span>
                    <br /><br />
                    <span className={styles.about}>
                        <Image src="/assets/About.png" alt=" " width={20} height={20} />
                        <Link href='/about'> About</Link>
                    </span>
                    <br /><br />
                    <span className={styles.category}>
                        <Image src="/assets/Home.png" alt=" " width={20} height={20} />
                        <Link href='/category'>Category </Link>
                    </span>
                    <br /><br />
                    <span className={styles.sign}>
                        <Image src="/assets/Slider.png" alt=" " width={20} height={20} />
                        <Link href='/signin'>Sign in </Link>
                        <br /><br />
                    </span>
                    <span className={styles.footer}>
                        <Image src="/assets/Footer.png" alt=" " width={20} height={20} />
                        <Link href='/footer'> Footer</Link>
                    </span>
                    <br /><br />
                    <Link href='/logout'>Logout</Link>
                </div>
            </div>  */}

function getInitialProps(ctx: any) {
    throw new Error('Function not implemented.')
}
