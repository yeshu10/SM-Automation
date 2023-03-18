/* eslint-disable react-hooks/rules-of-hooks */
import { SetStateAction, useEffect, useState } from 'react';
import { fileURLToPath } from 'url';
import styles from '../styles/subcat.module.css'
import Side from './sidebar'
import Image from 'next/image'
declare global {
  interface Window {
    onload: any;
      }
}
export default function subcat() {
  const [cat, setCat] = useState([]);
  const [TiTle, setTiTle] = useState('')
  const [Img, setImg] = useState([])  //{ preview: "", raw: "" } 
  const [Desc, setDesc] = useState('')
  const [Quant, setQuant] = useState('')
  const [Price, setPrice] = useState('')
  //const [image, setImage] = useState([]);
  const [image, setImage] = useState([{ preview: " " }]);
  if (typeof document !== "undefined") {
    var  modal = document.getElementById('myModal') as HTMLElement;
  var btn = document.getElementById('myBtn') as HTMLElement;
  }
  const rel =()=>{
    window.location.reload();
  }
  const clo =()=>{
    var span = document.getElementsByClassName("close")[0];
    var  modal = document.getElementById('myModal') as HTMLElement;
      modal.style.display = "none";
      {rel()}
  }
  
  const handleSubmit = async (event: any) => {

    const dis = () =>{
      var modal = document.getElementById("myModal")!;
      modal.style.display = "block";
    }
{dis()}

    if( (document.getElementById("pid") as HTMLInputElement).value)
    {
    console.log('button click')
    const formData = new FormData(event.target);
    formData.set("Function", "AddSubCategory");

    fetch('http://localhost:3000/api/category/idpost',
      {
          method: 'POST', 
        body: formData,
      })
      .catch((error) => {
        debugger
        console.error('Error', error);
      });
  }
}


  const [loaded, setStatus] = useState(false);
        const pload=()=>{
      
        console.log('happy');
       var url_string = window.location.href; 
           var url = new URL(url_string);
            var c = url.searchParams.get("id");
                     if(c){
           //  console.log(c);
   
                const fetchData = () => {
              return fetch("http://localhost:3000/api/category/idpost?id="+c)
                    .then((response) => response.json())
                    .then((data) => {
                     setCat(data);
            
                     (document.getElementById("pid") as HTMLInputElement).value=data[0]["_id"];
                                               });
                            }
              useEffect(() => {
              fetchData();
            },[])
             }         
                     else
   console.log('sorry');
            
     }
     if (typeof window !== 'undefined') {
     
   // window.onload = pload();
     }
     if (typeof document !== 'undefined') {
       // use document
       let c=0
       if(document.readyState === "complete" && c==0){
       pload()
       c++
       }
       
       document.onreadystatechange = () => {
         setStatus(document.readyState === "complete");
        
    }
     }


  const handleChange = (e: any) => {
    if (e.target.name == 'TiTle') {
      setTiTle(e.target.value)
    }
    if (e.target.name == 'Img') {
      setImg(e.target.value)
    }
    if (e.target.name == 'Desc') {
      setDesc(e.target.value)
    }
    if (e.target.name == 'Quant') {
      setQuant(e.target.value)
    }
    if (e.target.name == 'Price') {
      setPrice(e.target.value);
    }
    if (e.target.type == "file") {
      if (e.target.files.length) {
        image.push({
          preview: URL.createObjectURL(e.target.files[0]),
        })
        setImage(image);
      }
    }
  }
  const removeImage = () => {
    setImage([
      {
        preview: ''
      }
    ]);
  };
  const upFile = () => {
    const input = window.document.getElementById('Img')!
    input.click();
  }

  const imageSliderList = () => {
    let imageSlider = [];
    for (let i = 0; i < image.length; i++) {
      imageSlider.push(
        <div className={`${styles.itemss} carousel-item active`}>
          <div className={styles.box}>
            <div className={`${styles.box1} bg-white m-0 p-0`}>
              <img src={image[i].preview}   width="247" height="130" />
             
             <button onClick={removeImage} className={styles.removebtn}>
                <Image src="/assets/delete_FILL0_wght400_GRAD0_opsz48 1.png" alt={''} width={20} height={20} />
              </button>
           
            </div>
          </div>
        </div>);
    }
    return imageSlider;
  }

  return (
    <>
            <div className='d-block '>
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
                <div className={`${styles.homenav} mt-3 p-4 mx-2`}>
                  <form id="categoryData" onSubmit={handleSubmit} className='mx-2'>
                    <div className='mt-2' >
                      <input type="text" name="pid" id="pid" style={{ display: "none" }} />
                      <p className="fs-6 fw-semibold mb-2">Title :</p>
                      <input type='text' id="TiTle" name="TiTle" placeholder="title" onChange={handleChange} className={`${styles.inputbox} w-100`} />
                    </div>

                    <div className='mt-3'>
                      <p className="fs-6 fw-semibold mb-2">Description :</p>
                      <textarea id="Desc" name="Desc" placeholder="Desc" onChange={handleChange} className={`${styles.textarea} w-100`} />
                    </div>
                    <p className="fs-6 fw-semibold mb-2 mt-4 ">Images :</p>
                    <div id="carouselExampleIndicators" className="carousel slide  mb-4" data-bs-ride="false">

                      <div className={`${styles.inner} carousel-inner`}>
                        {imageSliderList()}
                        <div className={`${styles.itemss} carousel-item active`}>
                          <div className={styles.box}>
                            <div className={`${styles.box1}   bg-white m-0 p-0`}>
                              <div className={`${styles.box2} m-2 `}>
                                <div className={`${styles.box3} mx-2 m-3 mx-0 text-center `}>
                                  <Image src="/assets/Group.svg" alt={''} width={20} height={20} />
                                  <p className={`${styles.imgtext} fw-normal mb-2`}>Drop Your images here or browse.</p>
                                  <input type="file" id="Img" name="Img" style={{ display: "none" }} onChange={handleChange} />
                                  <button className={`${styles.btncolor} border-0 text-white p-1 px-4 `} onClick={upFile} type="button">Search</button>
                                </div>
                              </div>
                            </div>



                            {/* <div className={`${styles.cardbox} bg-white mx-2`}>
                              <Image src="/assets/Rectangle 69.png" alt={''} width={173} height={130} className="d-none " />
                            </div>
                            <div className={`${styles.cardbox} bg-white mx-2`}>
                              <Image src="/assets/Rectangle 69.png" alt={''} width={173} height={130} className="d-none " />
                            </div>
                            <div className={`${styles.cardbox} bg-white mx-2`}>
                              <Image src="/assets/Rectangle 69.png" alt={''} width={173} height={130} className="d-none " />
                            </div> */}
                          </div>
                        </div>
                        {/* <div className={`${styles.itemss} carousel-item active`}>
                          <div className={styles.box}>
                            <div className={`${styles.cardbox} bg-white mx-2`}>
                              <Image src="/assets/Rectangle 69.png" alt={''} width={173} height={130} className="d-none " />
                            </div>
                            <div className={`${styles.cardbox} bg-white mx-2`}>
                              <Image src="/assets/Rectangle 69.png" alt={''} width={173} height={130} className="d-none " />
                            </div>
                            <div className={`${styles.cardbox} bg-white mx-2`}>
                              <Image src="/assets/Rectangle 69.png" alt={''} width={173} height={130} className="d-none " />
                            </div>
                            <div className={`${styles.cardbox} bg-white mx-2`}>
                              <Image src="/assets/Rectangle 69.png" alt={''} width={173} height={130} className="d-none " />
                            </div>
                          </div>
                        </div> 
                         <div className={`${styles.itemss} carousel-item `}>
                          <div className={styles.box}>
                            <div className={`${styles.cardbox} bg-white mx-2`}>
                              <Image src="/assets/Rectangle 69.png" alt={''} width={173} height={130} className="d-none " />
                            </div>
                            <div className={`${styles.cardbox} bg-white mx-2`}>
                              <Image src="/assets/Rectangle 69.png" alt={''} width={173} height={130} className="d-none " />
                            </div>
                            <div className={`${styles.cardbox} bg-white mx-2`}>
                              <Image src="/assets/Rectangle 69.png" alt={''} width={173} height={130} className="d-none " />
                            </div>
                            <div className={`${styles.cardbox} bg-white mx-2`}>
                              <Image src="/assets/Rectangle 69.png" alt={''} width={173} height={130} className="d-none " />
                            </div>
                          </div>
                        </div>
                        <div className={`${styles.itemss} carousel-item `}>
                          <div className={styles.box}>
                            <div className={`${styles.cardbox} bg-white mx-2`}>
                              <Image src="/assets/Rectangle 69.png" alt={''} width={173} height={130} className="d-none " />
                            </div>
                            <div className={`${styles.cardbox} bg-white mx-2`}>
                              <Image src="/assets/Rectangle 69.png" alt={''} width={173} height={130} className="d-none " />
                            </div>
                            <div className={`${styles.cardbox} bg-white mx-2`}>
                              <Image src="/assets/Rectangle 69.png" alt={''} width={173} height={130} className="d-none " />
                            </div>
                            <div className={`${styles.cardbox} bg-white mx-2`}>
                              <Image src="/assets/Rectangle 69.png" alt={''} width={173} height={130} className="d-none " />
                            </div>
                          </div>
                        </div>
                        <div className={`${styles.itemss} carousel-item `}>
                          <div className={styles.box}>
                            <div className={`${styles.cardbox} bg-white mx-2`}>
                              <Image src="/assets/Rectangle 69.png" alt={''} width={173} height={130} className="d-none " />
                            </div>
                            <div className={`${styles.cardbox} bg-white mx-2`}>
                              <Image src="/assets/Rectangle 69.png" alt={''} width={173} height={130} className="d-none " />
                            </div>
                            <div className={`${styles.cardbox} bg-white mx-2`}>
                              <Image src="/assets/Rectangle 69.png" alt={''} width={173} height={130} className="d-none " />
                            </div>
                            <div className={`${styles.cardbox} bg-white mx-2`}>
                              <Image src="/assets/Rectangle 69.png" alt={''} width={173} height={130} className="d-none " />
                            </div>
                          </div>
                        </div>  */}
                      </div>
                    
                      <button className={`${styles.btnarr} carousel-control-prev`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="material-icons">
                          chevron_left
                        </span>

                      </button>
                      <button className={`${styles.btnarr} carousel-control-next`} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="material-icons">
                          chevron_right
                        </span>
                      </button>
                    </div>




                    <div className='d-flex flex-nowrap '>

                      <div className='mt-3 w-100 me-1'>
                        <p className="fs-6 fw-semibold mb-2">Quantity :</p>

                        <input type='text' id="Quant" placeholder="Quant" name="Quant" onChange={handleChange} className={`${styles.inputbox} p-2 w-100`} />
                      </div>
                      <div className='mt-3 w-100 ms-1'>
                        <p className="fs-6 fw-semibold mb-2">Price :</p>
                        <input type='text' id="Price" placeholder="Price" name="Price" onChange={handleChange} className={`${styles.inputbox} p-2 w-100`} />

                      </div>

                    </div>
                    <div id="myModal" className={`${styles.modal} modal`}>
                      <div className={`${styles.content} modal-content`}>
                      <span onClick={clo} className={`${styles.close} close`}>&times;</span>
                      <p> Your data is saved</p>
                       </div>
                       </div>  

                    <div className='pb-5 pt-5 mt-5'>
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
// function setTitle(value: SetStateAction<string>) {
//   throw new Error('Function not implemented.');
// }

// function setImg(value: SetStateAction<string>) {
//   throw new Error('Function not implemented.');
// }
// onClick={() => { upFile(); setImage([ ...image,{ id: nextId++, preview:URL.createObjectURL(e.target.files[0]), } ])}}