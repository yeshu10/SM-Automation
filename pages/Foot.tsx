/* eslint-disable react-hooks/rules-of-hooks */
import styles from '../styles/footer.module.css'
import { SetStateAction, useEffect, useState } from 'react';
import Side from './sidebar'
import Image from 'next/image'
import Link from 'next/link';
export default function footer() {

    const [wan, setWan] = useState('')
    const [mail, setMail] = useState('')
    const [title, setTitle]=useState('')
    const [foot, setFoot] = useState([]);
    const fetchData1 = () => {
        let c=1;
        return fetch("http://localhost:3000/api/footer/footpost?c="+c)
              .then((response) => response.json())
                            .then((data) => {
                  const element: HTMLElement = document.getElementById('inq') as HTMLElement
                element.innerHTML = data; 
                //   (document.getElementById("inq")InnerHTML=data;
              });
              // .then((data) => setInquiry(data));
      }
        useEffect(() => {
        fetchData1();
      },[])
   
    //   const fetchData = () => {
    //     return fetch("http://localhost:3000/api/foot/footpost")
    //           .then((response) => response.json())
    //           .then((data) =>{ setFoot(data);
    //           (document.getElementById("wan") as HTMLInputElement).value=data[0]["wan"];
    //           (document.getElementById("mail") as HTMLInputElement).value=data[0]["mail"];
    //           (document.getElementById("title") as HTMLInputElement).value=data[0]["title"];
    //   });
    //   }
    
    //   useEffect(() => {
    //     fetchData();
    //   },[])   
    const handleSubmit = async (event: any) => {
        console.log('button click')
        event.preventDefault();
        const formData = new FormData(event.target);


        var object: { [key: string]: string; } = {};
        formData.forEach(function (value, key) {
            object[key] = value as string;
        });
        var json = JSON.stringify(object);

        fetch('http://localhost:3000/api/footer/footpost',
            {
                method: 'POST', // or 'PUT' 
                headers: {
                    'Content-Type': 'application/json',
                    },
                body: json,
            })
            
          .catch((error) => {
                debugger
                console.error('Error', error);
            });
    }
    const handleChange = (e: any) => {
        if (e.target.name == 'wan') {
          setWan(e.target.value)
        }
        if (e.target.name == 'mail') {
          setMail(e.target.value)
        }
        if (e.target.name == 'title') {
            setTitle(e.target.value)
          }
      }
      const show =()=>
      {
        const el = document.getElementById('new');

if (el != null) {
     if (el.style.display === 'none') {
    
      el.style.display = 'block';
    } else {
 
      el.style.display = 'block';
    }
  }
}

      

    return (
        <>
            {/* <Side />
        <div className={styles.header}>Footer</div> 
        <form onSubmit={handleSubmit}>
<div className={styles.category}>
    <h6 className={styles.title}>Whatsapp Number :</h6> 
    <div>
    <div className={styles.para}>
<span >
<Image  src="/Edit.png" alt=" "  width={20} height={20}/>
    <Image  src="/assets/Del.png" alt=" "  width={20} height={20}/>
</span>
</div> 

  <div className={styles.text}><Image  src="/assets/WA.png" alt=" "  width={20} height={20}/><input type="text" id="Title"  
  name="Title" placeholder=" " /></div>
      </div>
<div>
    <h6 className={styles.title}>Email :</h6>
    <div> <div className={styles.para}>
<span >
<Image  src="/assets/Edit.png" alt=" "  width={20} height={20}/>
    <Image   src="/assets/Del.png" alt=" "  width={20} height={20}/>
</span>
</div> 
    <div className={styles.text}><Image  src="/assets/Email.png" alt=" " 
    width={20} height={20}/><input type="text" id="Email"  name="Email" /></div>
</div>
</div>
    <h6 className={styles.title}>Title :</h6>
    <div><div className={styles.para}>
<span >
<Image  src="/assets/Edit.png" alt=" "  width={20} height={20}/>
    <Image   src="/assets/Del.png" alt=" "  width={20} height={20}/>
</span>
</div> 
<div className={styles.text}></div>
</div>
    <div className={styles.sub}><button> Add new field </button></div>
   <div className={styles.save}> <button> Discard</button><button type='submit' > Save</button></div>
</div>
</form> */}

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
                                            <p id='inq'></p>
                                            <p className="fs-6 fw-semibold mb-2">Whatsapp Number :</p>
                                            <div className='d-flex flex-nowarp'>
                                                <Image src="/assets/whatsapp 1.png" alt=" " width={30} height={30} className='position-absolute p-1 ps-2' />
                                                <input type='text' id="wan" name='wan' placeholder="12345 67890" className={`${styles.inputbox} pb-1 ps-5 `} onChange={handleChange} />
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
                                                <input type='text' id="mail" name="mail" placeholder="smautomation@gmail.com" className={`${styles.inputbox} pb-1 ps-5`} onChange={handleChange} />
                                                <div className='ms-5 '>
                                                    <Image src="/assets/Edit.png" alt=" " width={15} height={15} />
                                                    <Image src="/assets/Del.png" alt=" " width={15} height={15} className='ms-4' />
                                                </div>
                                            </div>
                                        </div>
                                        <div id='new' style={{ display: "none" }} className='mt-3'>
                                            <p className="fs-6 fw-semibold mb-2">Title :</p>
                                            <div className='d-flex flex-nowarp'>
                                                <Image src="/assets/Group (1).svg" alt=" " width={43} height={30} className={`${styles.upload} position-absolute p-1 ps-3 pe-3`}  />
                                                <input type='text' id="title" name="title" placeholder="Write here . . ." className={`${styles.inputbox} pb-1 ps-5`}  onChange={handleChange} />
                                                <div className='ms-5 '>
                                                    <Image src="/assets/Edit.png" alt=" " width={15} height={15} />
                                                    <Image src="/assets/Del.png" alt=" " width={15} height={15} className='ms-4' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className=' mt-4 text-center'>
                                           <button type='button' className={`${styles.btncolor} border-0 text-white p-1 px-4 text-center mb-5`} onClick={show} >Add New Field</button>
                                        </div>
                                        <div className={` ${styles.savebtn} pb-4`}>
                                            <button type='submit' className={`${styles.btncolor} border-0 text-white p-1 px-4 float-end `}>Save</button>
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