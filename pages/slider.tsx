import styles from '../styles/slider.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Homeside from './homeslide'
import Side from './sidebar'
import Mfoooter from './mfooter'
import { useEffect, useState } from 'react'
export default function slider() {
    const [image, setImage] = useState({ preview: "" });
    const [Img, setImg] = useState('')
    const [slide, setSlide] = useState([]);

    const fetchData = () => {
        return fetch("http://localhost:3000/api/slider/sliderpost")
            .then((response) => response.json())
            .then((data) => setSlide(data));
    }

    useEffect(() => {
        fetchData();
    }, [])
    if (typeof document !== "undefined") {
                  // alert("hello");
                  var x = document.getElementsByClassName('delete');
                  var myImg = document.getElementById('myImg') as HTMLElement;
            //      var z = document.getElementsByClassName('myImg') as HTMLCollectionOf<Element>;
                 // console.log(myImg.src)
                //   myImg.src = "imgSrc";
                var my = document.getElementById('uni') as HTMLImageElement;
                // var y = document.getElementsByClassName('uni') as HTMLCollectionOf<Element>;
                
                //  var g = document.getElementById("myImg").src;

                //   document.getElementById("demo").innerHTML = x;
                  var closeIcon = document.getElementsByClassName('delete'); 
                  for (var i = 0; i < closeIcon.length; i++) {
                 closeIcon[i].addEventListener('click', function(e){
                  e.preventDefault();
               //   alert("hell");
             // console.log(myImg.innerHTML)
                 // var x = myImg.innerHTML;
                 var x = myImg.innerHTML;
                 my.src = x;
                
                //    y.src=x;
                
                  console.log(x)
                     }); 
              } 
             
        }

    const handleSubmit = async (event: any) => {
        console.log('button click')
        event.preventDefault();
        const formData = new FormData(event.target);
        fetch('http://localhost:3000/api/slider/sliderpost',
            {
                method: 'POST',
                body: formData,
            })
            .catch((error) => {
                debugger
                console.error('Error', error);
            });
    }

    const handleChange = (e: any) => {

        if (e.target.name == 'Img') {
            setImg(e.target.value)
        }
        if (e.target.type == "file") {
            if (e.target.files.length) {
                setImage({
                    preview: URL.createObjectURL(e.target.files[0]),
                });
            }
        }
    }
    const upFile = () => {
        const input = window.document.getElementById('Img')!
        // const show = window.document.getElementById('removes')!
        input.click();
        // if(show.style.display ==="block"){
        //   show.style.display="none";
        // }else{
        //   show.style.display="block";
        // }
    }
    const checkAll = () => {
        let input: any = window.document.getElementById('maincheck')!
        let ch = document.querySelectorAll<HTMLInputElement>('input[name=theGroup]')
        let checkboxes = document.querySelectorAll<HTMLInputElement>('input[name=theGroup]')
        if (input.checked) {
            console.log('hii')
            //checkboxes.checked=true
            checkboxes.forEach(function (e) {
                e.checked = true
            });
        }
        else {
            checkboxes.forEach(function (e) {
                e.checked = false
            });
        }
    }
    const deletePost = () => {

        if (confirm("Are you sure to delete the selected item")) {
            let checkboxes = document.querySelectorAll<HTMLInputElement>('input[name=theGroup]:checked')
            let titles = document.querySelectorAll<HTMLInputElement>('.title')
            var titlerequest = "?"
            for (var i = 0; i < checkboxes.length; i++) {
                // array.push(titles[parseInt(checkboxes[i].value)].innerHTML)
                titlerequest += "arr=" + (titles[parseInt(checkboxes[i].value)].innerHTML).trim() + "&"
            }
            titlerequest = "http://localhost:3000/api/slider/sliderpost" + titlerequest.substring(0, titlerequest.length - 1)
            console.log(titlerequest)


            return fetch(titlerequest,
                { method: 'DELETE' });

        }
        else {
            console.log("No");
        }
    }
    const removeImage = () => {
        setImage(
            {
                preview: ''
            }
        );
        const show = window.document.getElementById('removes')!
        show.style.display = "block";
    };
    const show = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        const div: HTMLElement = event.currentTarget;
        let parent = div.childNodes[0].childNodes[0].childNodes[1] as HTMLElement
        var my = document.getElementById('uni') as HTMLImageElement;
        my.src=parent.innerHTML           
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
                                <a className="navbar-brand fw-semibold h1 ms-4">Slider</a>
                                <div>
                                    <Image src="/assets/add_black_24dp 1.png" alt={''} width={20} height={20} className="" data-bs-toggle="modal" data-bs-target="#addimg" />
                                    <button onClick={deletePost} className={styles.removebtn}>
                                        <Image src="/assets/delete_FILL0_wght400_GRAD0_opsz48 1.png" alt={''} width={20} height={20} />
                                    </button>
                                    <input className={styles.check} id="maincheck" type="checkbox" onClick={checkAll} />
                                    <Image src="/assets/Vector.png" alt={''} width={20} height={20} className="ms-4" />
                                </div>
                            </div>
                        </nav>
                        <div className="container-fluid">
                            <div className="row g-5 w-100 mt-1 ms-2">

                                {(() => {
                                    let post = [];
                                    for (let i = 0; i < slide.length; i++) {
                                        post.push(<div key={slide[i]['_id']} className="col-6 delte" data-bs-toggle="modal" data-bs-target="#staticbackdrop" onClick={show}>
                                            


                                            <div className={`${styles.homenav} p-4 `}>
                                                <div>
                                                    <p className='id title' style={{ display: "none" }} >{slide[i]['_id']}</p>
                                                    <p  className='myImg' style={{ display: "none" }} id='myImg'>{slide[i]['path']}</p>
                                                    <Image src={slide[i]['path']} alt={''} width={536} height={200}  className="img-fluid tab" />
                                                </div>
                                                <div className={`${styles.overshow}`}>
                                                    <div className="d-flex justify-content-between text-white mt-2 px-4 ">
                                                        <input className={styles.checks} type="checkbox" name="theGroup" value={i} />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        )
                                    }
                                    return post;
                                })
                                    ()}
                                {/* <div className="col-6">
                                    <div className={`${styles.homenav} p-4 `}>
                                        <div>

                                            <Image src="/assets/Rectangle 70.svg" alt={''} width={536} height={200} data-bs-toggle="modal" data-bs-target="#staticBackdrop1" className="img-fluid" />
                                        </div>
                                        <div className={`${styles.overshow}`}>
                                            <div className="d-flex justify-content-between text-white mt-2 px-4 ">
                                                <input className={styles.checks} type="checkbox" />

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className={`${styles.homenav} p-4 `}>
                                        <div>

                                            <Image src="/assets/Rectangle 70.svg" alt={''} width={536} height={200} className="img-fluid" data-bs-toggle="modal" data-bs-target="#my3" />
                                        </div>
                                        <div className={`${styles.overshow}`}>
                                            <div className="d-flex justify-content-between text-white mt-2 px-4 ">
                                                <input className={styles.checks} type="checkbox" />

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className={`${styles.homenav} p-4 `}>
                                        <div>

                                            <Image src="/assets/Rectangle 70.svg" alt={''} width={536} height={200} className="img-fluid" data-bs-toggle="modal" data-bs-target="#my4" />
                                        </div>
                                        <div className={`${styles.overshow}`}>
                                            <div className="d-flex justify-content-between text-white mt-2 px-4 ">
                                                <input className={styles.checks} type="checkbox" />

                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-6">
                                    <div className={`${styles.homenav} p-4 `}>
                                        <div>

                                            <Image src="/assets/Rectangle 70.svg" alt={''} width={536} height={200} className="img-fluid" data-bs-toggle="modal" data-bs-target="#my5" />
                                        </div>
                                        <div className={`${styles.overshow}`}>
                                            <div className="d-flex justify-content-between text-white mt-2 px-4 ">
                                                <input className={styles.checks} type="checkbox" />

                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='d-lg-none d-block'>
                <Side />
                <Homeside />
                <div className="container-fluid">
                    <div className='m-3 d-sm-none d-block'>
                        <p className='fw-semibold fs-6 text-center'>Machine Section</p>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6 ">
                            <div className='shadow'>
                                <Image src="/assets/Rectangle 70.svg" alt={''} width={536} height={200} className="img-fluid" />
                                <div className={styles.imgbox}>
                                    <p className="fs-6 fw-semibold text-center text-white p-2">MACHINE SECTION</p>
                                </div>

                            </div>
                        </div>

                        <div className="col-6">
                            <div className='shadow'>
                                <Image src="/assets/Rectangle 70.svg" alt={''} width={536} height={200} className="img-fluid" />
                                <div className={styles.imgbox}>
                                    <p className="fs-6 fw-semibold text-center text-white p-2">MACHINE SECTION</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='shadow'>
                                <Image src="/assets/Rectangle 70.svg" alt={''} width={536} height={200} className="img-fluid" />
                                <div className={styles.imgbox}>
                                    <p className="fs-6 fw-semibold text-center text-white p-2">MACHINE SECTION</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='shadow'>
                                <Image src="/assets/Rectangle 70.svg" alt={''} width={536} height={200} className="img-fluid" />
                                <div className={styles.imgbox}>
                                    <p className="fs-6 fw-semibold text-center text-white p-2">MACHINE SECTION</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='shadow'>
                                <Image src="/assets/Rectangle 70.svg" alt={''} width={536} height={200} className="img-fluid" />
                                <div className={styles.imgbox}>
                                    <p className="fs-6 fw-semibold text-center text-white p-2">MACHINE SECTION</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='shadow'>
                                <Image src="/assets/Rectangle 70.svg" alt={''} width={536} height={200} className="img-fluid" />
                                <div className={styles.imgbox}>
                                    <p className="fs-6 fw-semibold text-center text-white p-2">MACHINE SECTION</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Mfoooter />
            </div>


            {/* add modal */}

            {/* 
            <div className="modal fade" id="addimg" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="addimgLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-transparent border-0 ">
                        <div className="modal-header border-0 p-0">
                            <button type="button" className="bg-transparent border-0 text-white" data-bs-dismiss="modal" aria-label="Close">
                                <span className="material-icons">close</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className={`${styles.box1}   bg-white m-0 mt-4 p-0`}>
                                <div className={`${styles.box2} m-4 `}>
                                    <div className={`${styles.box3} p-4 m-2 mx-0 text-center `}>
                                        <Image src="/assets/Group.svg" alt={''} width={20} height={20} />
                                        <p className={`${styles.imgtext} fw-normal mb-2`}>Drop Your images here or browse.</p>
                                        <button className={`${styles.btncolor} border-0 text-white p-1 px-4   `}   >Select</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}


            <form onSubmit={handleSubmit}>
                <div className={`${styles.modalpop} modal fade`} id="addimg" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="addimgLabel" aria-hidden="true">
                    <div className=' modal-dialog modal-dialog-centered d-block'>
                        <div className="modal-content mt-5 pt-5 bg-transparent border-0 ">
                            <div className="modal-header border-0 p-0">
                                <button type="button" className="bg-transparent border-0 text-white" data-bs-dismiss="modal" aria-label="Close">
                                    <span className="material-icons">close</span>
                                </button>
                            </div>
                            <div className="modal-body p-0 d-flex justify-content-center">
                                {image.preview ? (<>
                                    <img src={image.preview} alt="dummy" />
                                    <button onClick={removeImage} className={styles.removebtn}>

                                        <Image src="/assets/delete_FILL0_wght400_GRAD0_opsz48 1.png" alt={''} width={20} height={20} />
                                    </button>

                                </>
                                ) : (
                                    <>
                                        <div className={`${styles.box1} container  bg-white m-0 mt-4 p-0`}>

                                            <div className={`${styles.box2} m-5 `}>
                                                <div className={styles.box3}>

                                                    <div className='text-center'>
                                                        <Image src="/assets/Group.svg" alt={''} width={20} height={20} />
                                                        <p className={`${styles.imgtext} fw-normal lh-lg mb-2`}>Drop Your images here or browse.</p>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </>
                                )}
                                <div className={styles.searchbtn}>
                                    <button className={`${styles.btncolor} border-0 text-white p-1 px-4   `} id="removes" style={{ display: "block" }} onClick={upFile} type='submit' >Select Image</button>
                                    <input accept="image/* " type="file" id="Img" name="Img" style={{ display: "none" }} onChange={handleChange} />
                                </div>

                                {/* </div>
                                 
                                </div>
                               
                            </div>  */}



                            </div>
                        </div>
                    </div>
                </div>
            </form>

            {/* modal */}


                       <div className={`${styles.modalpop} modal fade`} id="staticbackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className=' modal-dialog modal-dialog-centered d-block'>
                                <div className="modal-content mt-5 pt-5 bg-transparent border-0 ">
                                    <div className="modal-header border-0 p-0">
                                        <button type="button" className="bg-transparent border-0 text-white" data-bs-dismiss="modal" aria-label="Close">
                                            <span className="material-icons">close</span>
                                        </button>
                                    </div>
                                    <div className="modal-body p-0">

                                        <div className='container-fluid '> <Image id="uni" src="" alt={''} width={1000} height={900} className="img-fluid mt-4 uni" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                  


            {/* // <div className={`${styles.modalpop} modal fade`} id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdrop1Label" aria-hidden="true">
            //     <div className=' modal-dialog modal-dialog-centered d-block'>
            //         <div className="modal-content mt-5 pt-5 bg-transparent border-0 ">
            //             <div className="modal-header border-0 p-0">
            //                 <button type="button" className="bg-transparent border-0 text-white" data-bs-dismiss="modal" aria-label="Close">
            //                     <span className="material-icons">close</span>
            //                 </button>
            //             </div>
            //             <div className="modal-body p-0">

            //                 <div className='container-fluid '> <Image src="/assets/Rectangle 70.svg" alt={''} width={1000} height={900} className="img-fluid mt-4" /></div>
            //             </div>
            //         </div>
            //     </div>
            // </div>





            // <div className={`${styles.modalpop} modal fade`} id="my3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="my3Label" aria-hidden="true">
            //     <div className=' modal-dialog modal-dialog-centered d-block'>
            //         <div className="modal-content mt-5 pt-5 bg-transparent border-0 ">
            //             <div className="modal-header border-0 p-0">
            //                 <button type="button" className="bg-transparent border-0 text-white" data-bs-dismiss="modal" aria-label="Close">
            //                     <span className="material-icons">close</span>
            //                 </button>
            //             </div>
            //             <div className="modal-body p-0">

            //                 <div className='container-fluid '> <Image src="/assets/Rectangle 70.svg" alt={''} width={1000} height={900} className="img-fluid mt-4" /></div>
            //             </div>
            //         </div>
            //     </div>
            // </div>





            // <div className={`${styles.modalpop} modal fade`} id="my4" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="my4Label" aria-hidden="true">
            //     <div className=' modal-dialog modal-dialog-centered d-block'>
            //         <div className="modal-content mt-5 pt-5 bg-transparent border-0 ">
            //             <div className="modal-header border-0 p-0">
            //                 <button type="button" className="bg-transparent border-0 text-white" data-bs-dismiss="modal" aria-label="Close">
            //                     <span className="material-icons">close</span>
            //                 </button>
            //             </div>
            //             <div className="modal-body p-0">

            //                 <div className='container-fluid '> <Image src="/assets/Rectangle 70.svg" alt={''} width={1000} height={900} className="img-fluid mt-4" /></div>
            //             </div>
            //         </div>
            //     </div>
            // </div>


            // <div className={`${styles.modalpop} modal fade`} id="my5" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="my5Label" aria-hidden="true">
            //     <div className=' modal-dialog modal-dialog-centered d-block'>
            //         <div className="modal-content mt-5 pt-5 bg-transparent border-0 ">
            //             <div className="modal-header border-0 p-0">
            //                 <button type="button" className="bg-transparent border-0 text-white" data-bs-dismiss="modal" aria-label="Close">
            //                     <span className="material-icons">close</span>
            //                 </button>
            //             </div>
            //             <div className="modal-body p-0">

            //                 <div className='container-fluid '> <Image src="/assets/Rectangle 70.svg" alt={''} width={1000} height={900} className="img-fluid mt-4" /></div>
            //             </div>
            //         </div>
            //     </div>
            // </div> */}



        </>
    )

}