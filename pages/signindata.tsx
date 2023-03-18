import { SetStateAction, useState } from 'react';
import styles from '../styles/Sign.module.css'
import Image from 'next/image'
import Del from '../public/assets/Background.png'
//import Bac from '../public/assets/Background.png'
import Signside from './signside'
const USmail=  process.env.EMAIL;
const USpass= process.env.PASS;
export default function Sign() {
  const [Email , setEmail] = useState('')
  const [Pass , setPass] = useState('')  
      const handleSubmit = async (event : any) => {
        console.log('button click')
        console.log(USpass)
        const data = {
          Mail: event.target.Email.value,
          Pas: event.target.Pass.value,
        }   
       // const [Email , setEmail] = useState('')
       // const [Pass , setPass] = useState('')     
        fetch('http://localhost:3000/api/postsign',
        { method: 'POST', // or 'PUT'
        headers: {
        'Content-Type': 'application/json',
        },
        body : JSON.stringify(data),
        })
      .then(data => {
        console.log('Success:', data);
        }) .catch((error) => { console.error('Error' ,error);
        });

        console.log(data);
        console.log(data.Pas);
     if(data.Mail=!USmail)
      {
     console.log('mail is not same')
    }
  }
  const handleChange =(e: { target: { name: string; value: SetStateAction<string>; }; })=>
  {
    if(e.target.name=='Email')
    {
      setEmail(e.target.value)
    }
  }
  return (
<>      
<Signside/>

 <div className={styles.right}>
    <div className={styles.login}>
        <br /><br />
            <h3>Let's Sign In To SM Automation </h3>
            <form onSubmit={handleSubmit}>
        <input className={styles.intext}  type="text"  id="Email"  name="Email" placeholder="email"  onChange={handleChange}/>
         <br />
         <br />
        <input className={styles.intext} type="text" id="Pass" name="pas"  placeholder="password"/>
              <br />
       <br />
       <span className={styles.rem}><Image  src={Del} alt=" "  width={10} height={10}/>Remember Me</span> <span className={styles.forg} >Forgot Password ?</span>
       <br />
       <button type="submit" className={styles.button}>Login</button>
       </form>
      </div>
  </div>
        </>    
  )
}


function setEmail(value: SetStateAction<string>) {
  throw new Error('Function not implemented.');
}
//function setEmail(value: SetStateAction<string>) {
  //throw new Error('Function not implemented.');
//}
/*
<script>
  function validateFormWithJS() {
    const name = document.querySelector('#name').value
    const password = document.querySelector('#pass').value

    if (name!pass) {
      alert('Please enter your email')
      return false }

    if (rollNumber.length < 3) {
      alert('Roll Number should be at least 3 digits long.')
      return false
    }
  }
</script>
e.preventDefault()

console.log()
 const data (phone, name, email, desc};


fetch('http://localhost:3000/api/postcontact',
{ method: 'POST', // or 'PUT'
headers: {
'Content-Type': 'application/json',
}
body: JSON.stringify(data),
})
.then(response => response.text()) .then(data => {
console.log('Success:', data);
}) .catch((error) => { console.error('Error' ,error);
});
}
*/