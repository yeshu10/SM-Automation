// import '../styles/globals.css'
// import type { AppProps } from 'next/app'

// import "bootstrap/dist/css/bootstrap.min.css";
// import { useEffect } from "react";

// export default function App({ Component, pageProps }: AppProps) {

//   useEffect(() => {
//     require("bootstrap/dist/js/bootstrap.bundle.min.js");
//   }, []);

//   return <Component {...pageProps} />
// }


import '../styles/globals.css'
import type { AppProps } from 'next/app'

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Provider } from 'react-redux';
import  {store} from '../store';

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return(
              <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
     
  );
}

