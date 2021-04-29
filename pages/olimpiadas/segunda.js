import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useEffect, useState } from "react";
import Link from 'next/link'
import ModalPdf from '../../components/ModalPdf'

const Segunda = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const cancelButtonRef = useRef();

  const url1 = "https://drive.google.com/file/d/1KmBfHnCb2CVZID3PDIhJ4237PEvrmhHN/preview";
  const url2 = "https://drive.google.com/file/d/1ffAn-W3A-WE8BNG2y5Sr_81GQGzefAer/preview";
  const url3 = "https://drive.google.com/file/d/165sVlGQ-O2v9q9fQ2TfiPLep-qEtwvYt/preview";

  function closeModal1() {
    setOpen1(false);
  }

  function openModal1() {
    setOpen1(true);
  }

  function closeModal2() {
    setOpen2(false);
  }

  function openModal2() {
    setOpen2(true);
  }

  function closeModal3() {
    setOpen3(false);
  }

  function openModal3() {
    setOpen3(true);
  }

  return (
    <div className="w-full container px-4 md:px-0 mx-auto">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-2 pt-24">Segunda Mini Olimpiada</h1>
      <h2 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-yellow-600 mb-3 uppercase">El 15, 22 y 29 de Mayo</h2>
      
      <div className="mt-8">
        <h3 className="text-3xl font-bold my-4">Convocatoria</h3>
        <ul className="list-disc list-inside">
          <li>Cada grupo deberá tener sólo un representante, el representante se encargará del llenado de la boleta de inscripción.(sólo se aceptarán los grupos de 3 integrantes).</li>
          <li>Los integrantes de cada grupo deberán ser de la misma universidad, no importa si son de diferentes años.</li>
          <li>Los temas que se tomarán en cuenta son:
            <ul className="ml-4 list-disc list-inside">
              <li>FISIOLOGIA</li>
              <li>MICROBIOLOGIA</li>
              <li>PATOLOGIA</li>
            </ul>
          </li>
          <li>Cada prueba contará de 50 preguntas de selección múltiple con una duración de 60 minutos.</li>
          <li>Los puntos serás acumulativos y al final de la MINI OLIPIADA MÉDICA se dará certificado a los 3primeros equipo con mayor puntaje.</li>
          <li>Podrá visualizar a los grupos ganadores en nuestra PAGINA WEB, INSTAGRAM y FACEBOOK</li>
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-3xl font-bold my-4">Material de estudio</h3>
        <div className="grid gap-x-10 gap-y-8 grid-cols-1 md:grid-cols-3">
          <button
            type="button"
            onClick={openModal1}
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Fisiología Medica - GUSTON Y HALL
          </button>

          <button
            type="button"
            onClick={openModal2}
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Microbiología Medica - MURRAY
          </button>

          <button
            type="button"
            onClick={openModal3}
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Patología Estructural y Funcional - ROBBINS
          </button>
          
          {/* <div className="flex flex-col items-center justify-center">
            <h4 className="text-xl font-bold my-4">Fisiología Medica - GUSTON Y HALL</h4>
            <iframe src="https://drive.google.com/file/d/1KmBfHnCb2CVZID3PDIhJ4237PEvrmhHN/preview" width="90%" height="480"></iframe>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-xl font-bold my-4">Microbiología Medica - MURRAY</h4>
            <iframe src="https://drive.google.com/file/d/1ffAn-W3A-WE8BNG2y5Sr_81GQGzefAer/preview" width="90%" height="480"></iframe>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-xl font-bold my-4">Patología Estructural y Funcional - ROBBINS</h4>
            <iframe src="https://drive.google.com/file/d/165sVlGQ-O2v9q9fQ2TfiPLep-qEtwvYt/preview" width="90%" height="480"></iframe>
          </div> */}
        </div>
        {/* <div>
          <object
            data='https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf'
            type="application/pdf"
            width="500"
            height="678"
          >
          </object>
        </div>
        <a href="https://www.mediafire.com/file/adg0zunp43ldpfn/AUXILIARES_DE_DOCENCIA_2021_INF.pdf/file" target="_blank">AUXILIARES_DE_DOCENCIA_2021_INF.pdf/file</a> */}
      </div>
      {/* <ModalPdf>
        open={open1}
        cancelButtonRef={cancelButtonRef}
        closeModal={closeModal1}
        url={url1}
      </ModalPdf> */}
      <Transition show={open1} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          initialFocus={cancelButtonRef}
          static
          open={open1}
          onClose={closeModal1}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-2 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <iframe src={url1} width="100%" height="500"></iframe>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal1}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <Transition show={open2} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          initialFocus={cancelButtonRef}
          static
          open={open2}
          onClose={closeModal2}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-2 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <iframe src={url2} width="100%" height="500"></iframe>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal2}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <Transition show={open3} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          initialFocus={cancelButtonRef}
          static
          open={open3}
          onClose={closeModal3}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-2 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <iframe src={url3} width="100%" height="500"></iframe>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal3}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default Segunda
