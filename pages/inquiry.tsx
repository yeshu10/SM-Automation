import styles from '../styles/inquiry.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Homeside from './homeslide'
import Side from './sidebar'
import Mfoooter from './mfooter'
import { useEffect, useState } from 'react'

   
export default function Homes() {

 
const showcom =(event: React.MouseEvent<HTMLInputElement>)=>
{
    //     const el = document.querySelector<HTMLElement>('.all')!;
    // const cp = document.querySelectorAll<HTMLElement>('.comp')!;
    alert("hi");
    const div: HTMLInputElement = event.currentTarget;
    let n=div.getAttribute("cellno");
if(div.checked){
(document.querySelectorAll('.comp') as NodeListOf<HTMLElement>).forEach(function(el) {
     el.style.display = 'none';
   });
 (document.querySelectorAll('.comp'+n) as NodeListOf<HTMLElement>).forEach(function(el) {
    el.style.display = 'table-cell';
 });

 (document.querySelectorAll('.head') as NodeListOf<HTMLElement>).forEach(function(el) {
    el.style.display = 'none';
  });
(document.querySelectorAll('.head'+n) as NodeListOf<HTMLElement>).forEach(function(el) {
   el.style.display = 'table-cell';
});

}else {
    (document.querySelectorAll('.comp') as NodeListOf<HTMLElement>).forEach(function(el) {
        el.style.display = 'table-cell';
   });
   (document.querySelectorAll('.head') as NodeListOf<HTMLElement>).forEach(function(el) {
    el.style.display = 'table-cell';
});
}
    
    }

    const [inquiry, setInquiry] = useState([]);
    const fetchData = () => {
      return fetch("http://localhost:3000/api/inquiry/inquirypost")
            .then((response) => response.json())
            // .then((data) => {
            //     // alert(data);
            // });
            .then((data) => setInquiry(data));
    }
      useEffect(() => {
      fetchData();
    },[])
    const table = () => {
        let tab = [];
        for (let i = 0; i < inquiry.length; i++) {
          tab.push(
            <>
            <tr className='r1'>
            <td  scope="row" className='ps-5 comp comp0'><input type='checkbox'></input></td>
            <td  className='comp comp1' scope="row">{inquiry[i]['sno']}</td>
            <td  className='comp comp2' scope="col">{inquiry[i]['name']}</td>
            <td  id='inq' className='comp comp3' scope="col">{inquiry[i]['company']}</td>
            <td  className='comp comp4' scope="col">{inquiry[i]['city']}</td>
            <td  className='comp comp5' scope="col">{inquiry[i]['mobile']} </td>
            <td  className='comp comp6' scope="col">{inquiry[i]['email']}</td>
            <td  className='comp comp7' scope="col">{inquiry[i]['desc']}</td>
            </tr>
            </>
          
           );
        }
        return tab;
      }
    return (

        <>

            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"></link>
            <div className='d-lg-block d-none'>
                <div className="d-flex">
                    <Side />
                    <div className='w-100'>
                        <nav className={`${styles.homenav} navbar`}>
                            <div className="container-fluid">
                                <a className="navbar-brand fw-semibold h1 ms-4">Inquiry</a>
                                <div className='d-flex flex-nowarp'>


                                    <div className="dropdown-center">

                                        <Image src="/assets/filter_alt_FILL0_wght400_GRAD0_opsz48 1.png" alt={''} width={20} height={20} data-bs-toggle="dropdown" aria-expanded="false" className="" />
                                        <div className={`${styles.drop} dropdown-menu border-0`}>
                                            <div className="ps-3 mt-2">
                                                <input type="checkbox" id="dropdownCheck1" />
                                                <label className="form-check-label ms-2" htmlFor="dropdownCheck1">
                                                    ALL
                                                </label>
                                            </div>
                                            <div className="ps-3 mt-2">
                                            { //@ts-ignore
                                                <input type="checkbox" id="dropdownCheck2" cellno="3" onChange={showcom}/>
                                            }
                                                <label className="form-check-label ms-2" htmlFor="dropdownCheck2">
                                                    Company
                                                </label>
                                            </div>
                                            <div className="ps-3 mt-2">
                                            { //@ts-ignore
                                                <input type="checkbox" id="dropdownCheck3" cellno="4" onChange={showcom}/>
                                            }
                                                <label className="form-check-label ms-2" htmlFor="dropdownCheck3">
                                                    City
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                  <Image src="/assets/search_FILL0_wght400_GRAD0_opsz48 1.png" alt={''} width={20} height={20} className="ms-4" />
                                </div>
                            </div>
                        </nav>

                        <div className=' ms-5 me-4 mt-5'>
                            <table className={`${styles.maintable} `}>
                                <thead>
                                    <tr>
                                        <th className='head head0' scope="col"></th>
                                        <th className='head head1' scope="col">Sr.no</th>
                                        <th className='head head2' scope="col">Name</th>
                                        <th className='head head3' scope="col">Company</th>
                                        <th className='head head4' scope="col">City</th>
                                        <th className='head head5' scope="col">Mobile</th>
                                        <th className='head head6'scope="col">Email</th>
                                        <th className='head head7'scope="col">Description</th>
                                    </tr>
                                </thead>
                                <tbody >
                                {table()}
                                    {/* <tr>
                                        <td scope="row" className='ps-5'><input type='checkbox'></input></td>
                                        <th scope="row">1</th>
                                        <td scope="col">Jane Cooper</td>
                                        <td scope="col">Jane Cooper</td>
                                        <td scope="col">Ahemdabad</td>
                                        <td scope="col">12345 67890</td>
                                        <td scope="col">janecop@gmail.com</td>
                                        <td scope="col">Amet minim mollit...</td>

                                    </tr>
                                    <tr>
                                        <td scope="row" className='ps-5'><input type='checkbox'></input></td>
                                        <th scope="row">2</th>
                                        <td scope="col">Jane Cooper</td>
                                        <td scope="col">Jane Cooper</td>
                                        <td scope="col">Ahemdabad</td>
                                        <td scope="col">12345 67890</td>
                                        <td scope="col">janecop@gmail.com</td>
                                        <td scope="col">Amet minim mollit...</td>

                                    </tr>

                                    <tr>
                                        <td scope="row" className='ps-5'><input type='checkbox'></input></td>
                                        <th scope="row">3</th>
                                        <td scope="col">Jane Cooper</td>
                                        <td scope="col">Jane Cooper</td>
                                        <td scope="col">Ahemdabad</td>
                                        <td scope="col">12345 67890</td>
                                        <td scope="col">janecop@gmail.com</td>
                                        <td scope="col">Amet minim mollit...</td>

                                    </tr>
                                    <tr>
                                        <td scope="row" className='ps-5'><input type='checkbox'></input></td>
                                        <th scope="row">4</th>
                                        <td scope="col">Jane Cooper</td>
                                        <td scope="col">Jane Cooper</td>
                                        <td scope="col">Ahemdabad</td>
                                        <td scope="col">12345 67890</td>
                                        <td scope="col">janecop@gmail.com</td>
                                        <td scope="col">Amet minim mollit...</td>

                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                   </div>
                </div>
            </div>



            <div className='d-lg-none d-block'>
                <Side />
                <Homeside />
                <div className='container-fluid m-0 p-0 '>

                    <div className='p-sm-4 '>
                        <p className={`${styles.minquiry} fw-semibold fs-6 text-center mt-5 mt-sm-4 pt-2 pt-sm-0`}> Inquiry Form </p>

                        <div className="container-fluid ">
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
                                <div className='text-center mt-4 d-sm-block d-none'>
                                    <button type='submit' className={`${styles.btncolor} border-0 fw-semibold p-1 px-4 me-2`}>Submit</button>
                                    <button type='submit' className={`${styles.btncolor} border-0 fw-semibold p-1 px-4 ms-2`}>Reset</button></div>
                            </form>
                            <div className='text-center mt-5 d-block d-sm-none mb-5'>
                                <button type='submit' className={`${styles.btncol} border-0 fw-semibold p-1 px-4 me-2`}>Submit</button>
                                <button type='submit' className={`${styles.btncol} border-0 fw-semibold p-1 px-4 ms-2`}>Reset</button></div>
                        </div>
                    </div>
                    <Mfoooter />
                </div>
            </div>

        </>
    )
}
