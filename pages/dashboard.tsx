import { useEffect } from 'react';
import styles from '../styles/dash.module.css'
import Side from './sidebar'
export default function dash() {
    const fetchData = () => {
        let c=1;
        return fetch("http://localhost:3000/api/inquiry/inquirypost?c="+c)
              .then((response) => response.json())
                            .then((data) => {
                //   alert(data);
                  const element: HTMLElement = document.getElementById('inq') as HTMLElement
                element.innerHTML = data; 
                //   (document.getElementById("inq")InnerHTML=data;
              });
              // .then((data) => setInquiry(data));
      }
        useEffect(() => {
        fetchData();
      },[])
      const fetchData1 = () => {
        let d=1;
        return fetch("http://localhost:3000/api/category/idpost?d="+d)
              .then((response) => response.json())
              .then((data) => {
                console.log(data)
                // alert(data);
                  const element: HTMLElement = document.getElementById('cag') as HTMLElement
                element.innerHTML = data; 
                //   (document.getElementById("inq")InnerHTML=data;
              });
              // .then((data) => setInquiry(data));
      }
        useEffect(() => {
        fetchData1();
      },[])

    return (
        <>
            <div className='d-lg-block d-none'>
                <div className="d-flex">

                    <Side />
                    <div>
                        {/* */}
                        <nav className={`${styles.dashnav} navbar`}>
                            <div className="container-fluid p-2">
                                <span className="navbar-brand mb-0 h1 fw-semibold ms-4">Dashboard</span>
                            </div>
                        </nav>

                        <div className="container-fluid  pt-5 pb-5 mb-5">
                            <div className="row justify-content-center">
                                <div className="col-4 m-5 mb-0 p-5">
                                    <div className={styles.box}>
                                        <div className='p-5  text-center'>
                                            <div className='p-3 fw-semibold fs-3'>
                                                <p>Total Category</p>
                                                <p id="cag"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-4 m-5 mb-0  p-5">
                                    <div className={styles.box}>
                                        <div className='p-5  text-center'>
                                            <div className='p-3 fw-semibold fs-3'>
                                                <p>Total Sub-Category</p>
                                                <p>0</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-4 pt-3 p-5">
                                    <div className={styles.box}>
                                        <div className='p-5  text-center'>
                                            <div className='p-3 fw-semibold fs-3'>
                                                <p>Total Inquiry </p>
                                                <p id="inq"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* */}
                    </div>

                </div>

            </div>
        </>
    )

}

{/* <div className={styles.header}>Dashboard</div> 
<div className={styles.dash}>
    <div className={styles.fix}>
    <div className={styles.sub}> Total sub-Category 0 </div>
    <div className={styles.category}> Total Category  0</div>
   
    </div>
    <div className={styles.inquiry}> Total Inquiry 0</div>
</div> */}
