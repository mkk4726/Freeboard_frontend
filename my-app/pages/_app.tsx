// import '../styles/globals.css'
import { AppProps } from 'next/app'
import { Global } from '@emotion/react'
import { globalStyles } from '../src/commons/styles'
import Layout from '../src/commons/layout'
import ApolloSetting from '../src/commons/Apollo'


// Add firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApk961N2ug73vDzqe3JL2AUE4GNDeK_Kk",
  authDomain: "myproject-7081e.firebaseapp.com",
  projectId: "myproject-7081e",
  storageBucket: "myproject-7081e.appspot.com",
  messagingSenderId: "1022311691592",
  appId: "1:1022311691592:web:cf75c8277444dcefb3af7d",
  measurementId: "G-EEGX3TXLZ6"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);


export default function App({ Component, pageProps }: AppProps) {

  return (
    <ApolloSetting>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloSetting>
  )
}
