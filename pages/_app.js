import '@/styles/globals.css'
import {Montserrat} from "next/font/google"
import Head from 'next/head'
import NavBar from './components/Navbar'
import '../styles/styles.css'
const montserrat=Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})
export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
    </Head>
    <main className={`${montserrat.variable} font-mont bg-black text-light w-full min-h-screen`}>
      <NavBar/>
      <Component {...pageProps} />
    </main>
    </>
  )
}
