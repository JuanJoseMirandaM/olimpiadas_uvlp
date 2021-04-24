import Head from 'next/head';

export default function Navbar() {
  return (
    <nav class="absolute w-full bg-black bg-opacity-25 shadow-xl">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
    
          <div class="flex space-x-4">
            <a href="#" class="flex items-center py-5 px-2 text-white">
              <svg class="h-6 w-6 mr-1 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              
              <span class="font-bold">SOCEM UVLP</span>
            </a>          
          </div>
    
          <div class="hidden md:flex items-center space-x-1">
            <a href="#" class="py-5 px-3 text-gray-400 hover:text-white">Acerca de</a>
            <a href="#" class="py-5 px-3 text-gray-400 hover:text-white">Olimpiadas</a>
            <a href="#" class="py-5 px-3 text-gray-400 hover:text-white">Contactos</a>
            {/* <a href="" class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a> */}
          </div>
    
          <div class="md:hidden flex items-center text-white">
            <button class="mobile-menu-button">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
    
        </div>
      </div>
    </nav>
  );
}