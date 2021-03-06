import Head from 'next/head'
import About from '../components/About'
import Navbar from '../components/Navbar'
import SocialMedia from '../components/SocialMedia'
import Olimpiadas from '../components/Olimpiadas'
import Footer from '../components/Footer'
import Typed from "react-typed";


export default function Home() {
  // const bg_image = require('../assets/images/bg_student.jpg');
  const textLines = ['OLIMPIADAS MEDICAS', '3ra MINI OLIMPIADA', 'INSCRIPCIONES HASTA EL 9 DE AGOSTO']
  return (
    <div className="w-full mb-auto">
      <Head>
        <title>OLIMPIADAS MEDICAS UVLP</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap" rel="stylesheet"/>
        <meta property="og:image" content="/logo.png"></meta>
      </Head>
      <SocialMedia></SocialMedia>
      <div className="bg-fixed bg-cover bg-no-repeat bg-center h-screen w-full" style={{backgroundImage: 'url(/bg_student.jpg)' }}>
        <div className="inset-0 flex justify-center items-center">
          <div className="container my-44 lg:my-72 lg:my-p10 lg:pt-0 z-30  ">
            <div className="flex justify-between items-center">
              <div className="mx-4 p-4 w-full lg:w-7/12">
                <div className="flex flex-col items-center">
                  <div className="bg-black bg-opacity-10 rounded-md w-full text-center py-2">
                    <p className="text-3xl md:text-4xl text-white mb-2 text-center">
                      <Typed strings={textLines} typeSpeed={90} backSpeed={60} loop/>
                    </p>
                  </div>
                </div>
                <div className="text-center mt-5">
                  <a href="https://forms.gle/DevPHTnL56Kn9tTk6" target="_blank">
                    <button className="btn__hero bg-yellow-500 hover:bg-yellow-400 duration-300 transition-colors rounded-full px-12 py-4 text-2xl text-white uppercase font-semibold focus:outline-none font-barlow">INSCRIBETE</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <About id="about"></About> 
      <Olimpiadas></Olimpiadas>
    </div>
  );
}
