import React, { useState } from "react";

export default function App() {
  const [image, setImage] = useState({ preview: "" });
  const [Img, setImg] = useState('');
  const handleChange = async (e : any) => {
    if (e.target.files.length){
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
          });
    }
    if(e.target.name=='Img')
    {
     setImg(e.target.value)
    }

    /*if(e.target.name=='Img')
      {
       setImg(e.target.value)
      }

    /*if ( e.target.name=='Img') {
      setImg({
        preview: URL.createObjectURL(e.target.value),
        raw:( e.target.value)
      });
    }*/
  };
  const removeImage = () => {
    setImage(
      {
        preview:''
      }
    );
  };

  const handleUpload =  async (e : any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
   // const formData = new FormData(e.target);
   // formData.append("image", image.raw);

    await fetch("http://localhost:3000/api/home/imagepost", {
      method: "POST",
     // headers: {
     //  "Content-Type": "multipart/form-data"
    //  },
      body: formData
    });
  };

  return (
    <div>
    
        {image.preview ? (
          <img src={image.preview} alt="dummy" width="300" height="300" />
        ) : (
           <>
          </>  )}
   
      <input
        type="file"
        name="Img"
        id="upload-button"
               onChange={handleChange}
      />
      <br />
      <button onClick={handleUpload}>Upload</button>
      <button onClick={removeImage}>
              Remove This Image
            </button>
    </div>
  );
}
// style={{ display: "none" }}
//<label htmlFor="upload-button">
//</label>
/*
<span className="fa-stack fa-2x mt-3 mb-2">
<i className="fas fa-circle fa-stack-2x" />
<i className="fas fa-store fa-stack-1x fa-inverse" />
</span>
<h5 className="text-center">Upload your photo</h5>*/

/*       <ul>
        {(()=>{
          let post=[];
          for(let i=0 ;i<image.length;i++){
          post.push(<li key={image[i]['id']}>{image[i]['preview']}</li>)
          }
          return post;
        })       
          ()}
      </ul>*/