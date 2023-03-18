// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import Sign from "./signin";
// export default function Home() {
//   return (
//     <>
//             <Sign />

//     </>
//   );
// }




// import '../styles/globals.css';
// import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import  store from './stores';
// import styles from '../styles/Home.module.css'
import Sign from "./signin";
export default function Home() {
  return (
    <>
      <Provider store={store}>
            <Sign />
            </Provider>
    </>
  );
}

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// }

// export default MyApp;


// import React from "react";
// import ReactDOM from "react-dom";
// import "bootstrap/dist/css/bootstrap.css";
// import Sign from "./signin";
// import { Provider } from "react-redux";
// import store from "./stores";
// ReactDOM.render(
//   <Provider store={store}>
//  <Sign />
//   </Provider>,
//   document.getElementById("root")
// );
