import React from 'react'

const SocialMedia = () => {
  return (
    <div className="text-white fixed flex flex-col social mt-96">
      <a href="https://wa.me/59170112243" target="_blank" className="bg-gray-600 bg-opacity-40 hover:bg-green-600 flex m-1 px-4 py-2 rounded-full w-full justify-end">
        WhatsApp
        <svg className="h-8 w-8 inline ml-2"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />  <path d="M15 7a2 2 0 0 1 2 2" />  <path d="M15 3a6 6 0 0 1 6 6" /></svg>
      </a>
      <a href="https://www.facebook.com/SocemUnivalleLP" target="_blank" className="bg-gray-600 bg-opacity-40 hover:bg-blue-600 flex m-1 px-4 py-2 rounded-full w-full justify-end">
        Facebook
        <svg className="h-8 w-8 inline ml-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
      </a>
      <a href="https://youtube.com/c/SOCEMUVLP" target="_blank" className="bg-gray-600 bg-opacity-40 hover:bg-red-600 m-1 px-4 py-2 rounded-full w-full flex justify-end">
        YouTube
        <svg className="h-8 w-8 inline ml-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
      </a>
      <a href="https://www.instagram.com/socemunivallelp/" target="_blank" className="bg-gray-600 bg-opacity-40 hover:bg-pink-700 flex m-1 px-4 py-2 rounded-full w-full justify-end">
        Instagram
        <svg className="h-8 w-8 inline ml-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
      </a>
    </div>
  )
}

export default SocialMedia
