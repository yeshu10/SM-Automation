import Image from 'next/image'
import styles from '../styles/Signside.module.css'
// import img from '../public/assets/Man.png' 
// import log from '../public/assets/logo1.png' 
export default function Signside() {
  return (
<>        <div className={styles.side}>
    <div className={styles.logo}>
    <Image  src="/assets/logo1.png" alt=" "  width={20} height={20}/>
    <h4>SM</h4>
    <h6>Automation</h6>
    </div>
        <div className={styles.Img}>
        <Image  src="/assets/Man.png" alt=" "  width={350} height={200}/>
        </div>
 </div>
       </>    
  )
}