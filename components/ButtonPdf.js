import React from 'react'

const ButtonPdf = ({title, author, onClick}) => {
  return (
    <button
      type="button"
      key={title}
      onClick={onClick}
      className="flex items-center py-2 px-4 m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
    >
      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-yellow-500 sm:h-12 sm:w-12">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <div className="ml-4 text-left">
        <p className="text-sm font-medium text-gray-900">
          {title}
        </p>
        <p className="text-sm text-gray-500">
          {author}
        </p>
      </div>
    </button>
  )
}

export default ButtonPdf
