import styles from '../styles/cat.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Homeside from './homeslide'
import Side from './sidebar'
import Mfoooter from './mfooter'
import React, { useEffect, useState } from "react";
import Head from './header'
import CFoot from './Cfooter'

export default function cat() {
    const [cat, setCat] = useState([]);

    const fetchData = () => {
        return fetch("http://localhost:3000/api/category/idpost")
            .then((response) => response.json())
            .then((data) => setCat(data));
    }

    useEffect(() => {
        fetchData();
    }, [])
    const sub = () => {
        alert("hi")
    }
    return (

        <>

            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"></link>
            <Head />
            <div className='d-lg-block d-none'>
                <div className="d-flex">
                    <div className='w-100'>
                        <div className="container-fluid">
                            <div className="row g-5 w-100 mt-1 ms-2">
                                {(() => {
                                    let post = [];
                                    for (let i = 0; i < cat.length; i++) {
                                        post.push(<div key={cat[i]['_id']} className="col-4">
                                            {/* <div className={`${styles.homenav} p-4 `} onClick={sub}>
                                                <div className={styles.fimg}>
                                                    <Image src={cat[i]['path']} alt={''} width={536} height={200} className="img-fluid" />
                                                    <p className="fs-6 fw-semibold"><span className={`fw-normal ${styles.text1}`}>{cat[i]['title']} </span></p>
                                                </div>

                                            </div> */}
                                            <div className={styles.shadow}>
                                            <Link href={`/subproducts?id=${cat[i]['_id']}`}> <Image src={cat[i]['path']} alt={''} width={536} height={200} className="img-fluid" /></Link> 
                                                <div className={styles.maincategory}>
                                                    <p className="fs-6 fw-semibold text-center text-white p-2">{cat[i]['title']}</p>
                                              </div>
                                          </div>
                                        </div>
                                        )
                                    }
                                    return post;
                                })
                                    ()}

                            </div>
                        </div>

                    </div>
                </div>
               
            </div>
            <div className={styles.foot}>
            <CFoot/>
            </div>

            

            <div className='d-lg-none d-block'>
                <Side />
                <Homeside />
                <div className="container-fluid">
                    <div className="row mt-4">
                        <div className="col-6 ">
                            <div className='shadow'>
                                <Image src="/assets/Group 1148.png" alt={''} width={536} height={200} className="img-fluid" />
                                <div className={styles.imgbox}>
                                    <p className="fs-6 fw-semibold text-center text-white p-2">MACHINE SECTION</p>
                                </div>

                            </div>
                        </div>

                        <div className="col-6">
                            <div className='shadow'>
                                <Image src="/assets/Group 1148.png" alt={''} width={536} height={200} className="img-fluid" />
                                <div className={styles.imgbox}>
                                    <p className="fs-6 fw-semibold text-center text-white p-2">MACHINE SECTION</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='shadow'>
                                <Image src="/assets/Group 1148.png" alt={''} width={536} height={200} className="img-fluid" />
                                <div className={styles.imgbox}>
                                    <p className="fs-6 fw-semibold text-center text-white p-2">MACHINE SECTION</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='shadow'>
                                <Image src="/assets/Group 1148.png" alt={''} width={536} height={200} className="img-fluid" />
                                <div className={styles.imgbox}>
                                    <p className="fs-6 fw-semibold text-center text-white p-2">MACHINE SECTION</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='shadow'>
                                <Image src="/assets/Group 1148.png" alt={''} width={536} height={200} className="img-fluid" />
                                <div className={styles.imgbox}>
                                    <p className="fs-6 fw-semibold text-center text-white p-2">MACHINE SECTION</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='shadow'>
                                <Image src="/assets/Group 1148.png" alt={''} width={536} height={200} className="img-fluid" />
                                <div className={styles.imgbox}>
                                    <p className="fs-6 fw-semibold text-center text-white p-2">MACHINE SECTION</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Mfoooter />
            </div>








        </>






    )
}
