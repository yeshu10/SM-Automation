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
                <div className='container-fluid m-0 p-0 '>

                    <div className='p-4 px-2'>
                        <p className={`${styles.minquiry} fw-semibold fs-6 text-center`}> Inquiry Form </p>

                        <div id="carouselExampleIndicatorsss" className="carousel slide " data-bs-ride="flase">

                            <div className="carousel-inner">
                                <div className={`${styles.topinnerr} carousel-item active`}>
                                    <div className={styles.slidem}>
                                        <div className={`${styles.box} bg-white  shadow w-75 mx-4`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={1000} height={530} className="img-fluid mx-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.topinnerr} carousel-item active`}>
                                    <div className={styles.slidem}>
                                        <div className={`${styles.box} bg-white  shadow w-75 mx-4`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={1000} height={530} className="img-fluid mx-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.topinnerr} carousel-item active`}>
                                    <div className={styles.slidem}>
                                        <div className={`${styles.box} bg-white  shadow w-75 mx-4`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={1000} height={530} className="img-fluid mx-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.topinnerr} carousel-item active`}>
                                    <div className={styles.slidem}>
                                        <div className={`${styles.box} bg-white  shadow w-75 mx-4`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={1000} height={530} className="img-fluid mx-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.topinnerr} carousel-item active`}>
                                    <div className={styles.slidem}>
                                        <div className={`${styles.box} bg-white  shadow w-75 mx-4`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={1000} height={530} className="img-fluid mx-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className={`${styles.btnarrr} carousel-control-prev`} type="button" data-bs-target="#carouselExampleIndicatorsss" data-bs-slide="prev">
                                <span className="material-icons fs-1">
                                    chevron_left
                                </span>
                            </button>
                            <button className={`${styles.btnarrr} carousel-control-next`} type="button" data-bs-target="#carouselExampleIndicatorsss" data-bs-slide="next">
                                <span className="material-icons fs-1">
                                    chevron_right
                                </span>
                            </button>
                        </div>
                        <div id="carouselExampleIndicators" className="carousel slide mx-2 mt-3 " data-bs-ride="true">

                            <div className={`${styles.inner} carousel-inner`}>
                                <div className={`${styles.itemss} carousel-item active`}>
                                    <div className={styles.box}>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.itemss} carousel-item `}>
                                    <div className={styles.box}>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.itemss} carousel-item `}>
                                    <div className={styles.box}>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.itemss} carousel-item `}>
                                    <div className={styles.box}>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.itemss} carousel-item `}>
                                    <div className={styles.box}>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                        <div className={`${styles.cardbox} shadow mx-2`}>
                                            <Image src="/assets/atm.jpg" alt={''} width={100} height={100} className=" " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className={`${styles.btnarr} carousel-control-prev`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="material-icons fs-1">
                                    chevron_left
                                </span>
                            </button>
                            <button className={`${styles.btnarr} carousel-control-next`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="material-icons fs-1">
                                    chevron_right
                                </span>
                            </button>
                        </div>

                        <p className='fw-semibold fs-6 mt-4 px-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc aliquam lobortis enim, vitae massa. Nunc arcu porttitor elementum cursus turpis eget sit facilisis pretium. Faucibus pretium sem felis bibendum mauris, consequat dictum neque ultrices. Id sed purus aliquam in facilisi accumsan.</p>
                        <div className="d-flex">
                            <p className="fs-6 fw-semibold mb-2 me-2">Quantity:</p>
                            <button type='submit' className={`${styles.btncolor} border-0 text-white px-3 d-flex flex-nowrap `}>1
                                <div className={`${styles.qbtn} ms-2`}> <span className="material-icons ">
                                    keyboard_arrow_up
                                </span>
                                    <span className="material-icons" >
                                        keyboard_arrow_down
                                    </span></div>
                            </button>

                        </div>
                        <p className='fw-semibold fs-5 mt-3 px-2'>₹ 1,00,000/- </p>
                        <Link href='/RAQ'><button type='submit' className={`${styles.btncolor} border-0 text-white p-1 px-4 fs-6 `}>ADDED TO RFQ</button></Link>
                    </div>
                    <Mfoooter />
                </div>
            </div>


        </>
    )
}
