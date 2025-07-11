"use client"

import React, { useState, useRef } from 'react'
import Teclado from 'C:/Users/pixel/Desktop/estudo/calculadora-tailwind/my-app/src/components/btn'


function Home() {
  const textareaRef = useRef(null);
  
  const [fezConta, setfezConta] = useState("false")
  const [deve_Aparecer_Imagem, set_Deve_Aparecer_Imagem] = useState(false)
  const [texto, setTexto] = useState('');

  //---------------------------------------------------------
  const focarTextarea = () => {
    if (textareaRef.current) textareaRef.current.focus();
  };

  const adicionarTexto = (valor) => {
    setTexto(prev => prev + valor);
    focarTextarea();
  };

  const limparTexto = () => {
    setTexto('');
    focarTextarea();
  };
//-----------------------------------------------------------
  const calcularResultado = () => {
    setfezConta("true")
    try {
      const resultado = eval(texto);
      setTexto(resultado.toString());
    } catch (err) {
      setTexto("Erro");
    }
    focarTextarea();
  };
//-----------------------------------------------------------
const apagarRespostaAnterior = () => {
  if (fezConta === "true") {
    setTexto('');
    setfezConta("false");
  }
  focarTextarea();
};

//-----------------------------------------------------------
  const apagarCaractere = (valor) => {
    setTexto(prev => prev.slice(0, -1));
    focarTextarea();
  };

//-----------------------------------------------------------

const mostrarImagem = () => {
  set_Deve_Aparecer_Imagem(prev => !prev);
};

  return(
    <>
    <div className='grid grid-cols-2 bg-black'>
      <div className=' flex justify-center items-center h-screen flex-col bg-black'>
        <div className= 'bg-[#1f1f1f] border-[3px] border-[#ADFF2F] rounded-[16px] p-6 shadow-[0_0_15px_rgb(0,128,0)]'>
          <textarea 
            ref={textareaRef}
            value={texto}
            onKeyDown={e => e.preventDefault()} // Bloqueia teclado físico
            className='overflow-hidden whitespace-nowrap resize-none text-right text-[40px] font-bold bg-[#2c2c2c] text-[#e0ffe0] border-[2px] border-[#ADFF2F] rounded-[10px] outline-none p-[10px] shadow-[inset_0_0_10px_rgba(255,255,255)] w-[380px] h-[80px] mb-[10px]'
            style={{ fontFamily: 'Calculadora' }}
          />
          <Teclado 
            adicionarTexto={adicionarTexto} 
            limparTexto={limparTexto} 
            calcularResultado={calcularResultado} 
            apagarRespostaAnterior={apagarRespostaAnterior}
            mostrarImagem={mostrarImagem} 
            apagarCaractere={apagarCaractere}
          />
        </div>
      </div>
      <div className= 'flex justify-center items-center h-screen'>
          {deve_Aparecer_Imagem && (
          <img 
          src="/bolsonaro.jpg"
          alt="foto do bolsonaro"
          className="mt-4 w-[900px] mx-auto"
        />
      )}

      </div>
    </div>
    </>
  );
}

export default Home;
