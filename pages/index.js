import Head from 'next/head'
import Navbar from '../components/navbar'
import SocialMedia from '../components/SocialMedia'


export default function Home() {
  // const bg_image = require('../assets/images/bg_student.jpg');
  return (
    <div class="h-screen w-full">
      <Head>
        <title>SOCEM UVLP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>
      <div class="bg-fixed bg-cover bg-no-repeat bg-center h-screen w-full flex items-center" style={{backgroundImage: 'url(/bg_student.jpg)' }}>
        <button className="py-4 px-6 text-2xl rounded-lg mx-auto bg-yellow-400 text-white hover:bg-yellow-300 hover:text-yellow-800">
          INSCRIPCION
        </button>
        <SocialMedia></SocialMedia>
      </div>
      
    </div>
  );
}
