import React from 'react'

const Teclado = ({ adicionarTexto, limparTexto, calcularResultado, apagarRespostaAnterior, mostrarImagem, apagarCaractere }) => {
  return (
    <>
      <div className='flex-col justify-center items-center p[16px]'>
        <div className='grid grid-cols-4 gap-x-[14px] gap-y-[14px] w-fit p-[20px] '> 
          <button 
            onClick={mostrarImagem}
            className='h-[27px] w-[75px] bg-[#9ACD32] text-black font-bold rounded-[16px]'>Mito</button>

          <button onClick={() => {
            apagarRespostaAnterior();
            adicionarTexto('√')
        }}className='h-[27px] w-[75px] bg-[#9ACD32] text-black font-bold rounded-[16px]'>Raiz
        </button>

          <button  onClick={() => {
            apagarRespostaAnterior();
            adicionarTexto('^')
        }}
        className='h-[27px] w-[75px] bg-[#9ACD32] text-black font-bold rounded-[16px]'>Elevado</button>
          <button onClick={() => {{apagarCaractere()}}}
          className='h-[27px] w-[75px] bg-[#9ACD32] text-black font-bold rounded-[16px]'>Apagar</button>
        </div>
        <div className= 'grid grid-cols-4 gap-x-[14px] gap-y-[14px] w-fit p-[20px] bg-[#1e1e1e] rounded-[16px] shadow-[0-0-12px-rgba(0,0,0,0.6)]'>

          <button onClick={() => {
           apagarRespostaAnterior(); 
           adicionarTexto('9');
        }}style={estiloBotao}>9
        </button>

          <button onClick={() => {
            apagarRespostaAnterior();
            adicionarTexto('8')
        }}style={estiloBotao}>8
        </button>

          <button onClick={() => {
            apagarRespostaAnterior();
            adicionarTexto('7')
        }}style={estiloBotao}>7
        </button>

          <button onClick={() => {
            adicionarTexto('+');
        }}style={estiloBotaoOperacao}>+
        </button>

          <button onClick={() => {
            apagarRespostaAnterior();
            adicionarTexto('6')
        }}style={estiloBotao}>6
        </button>

          <button onClick={() => {
            apagarRespostaAnterior();
            adicionarTexto('5')
        }}style={estiloBotao}>5
        </button>

        <button onClick={() => {
            apagarRespostaAnterior();
            adicionarTexto('4')
        }}style={estiloBotao}>4
        </button>

        <button onClick={() => {
          adicionarTexto('-');
        }}style={estiloBotaoOperacao}>-
        </button>

        <button onClick={() => {
            apagarRespostaAnterior();
            adicionarTexto('3')
        }}style={estiloBotao}>3
        </button>

        <button onClick={() => {
            apagarRespostaAnterior();
            adicionarTexto('2')
        }}style={estiloBotao}>2
        </button>

        <button onClick={() => {
            apagarRespostaAnterior();
            adicionarTexto('1')
        }}style={estiloBotao}>1
        </button>

        <button onClick={() => {
        adicionarTexto('*');
        }}style={estiloBotaoOperacao}>x
        </button>

        <button onClick= {limparTexto} 
            style={estiloBotaoEspecial}>C
        </button>

        <button onClick={() => {
            apagarRespostaAnterior();
            adicionarTexto('0')
        }}style={estiloBotao}>0
        </button>

        <button onClick={calcularResultado}
            style={estiloBotaoOperacao}>=
        </button>

        <button onClick={() => {
        adicionarTexto('/');
        }}style={estiloBotaoOperacao}>÷
        </button>

        </div>
        
      </div>
    </>
  );
}

const estiloBotao = { 
  width: '75px',
  height: '75px',
  fontSize: '22px',
  fontWeight: 'bold',
  backgroundColor: '#ADFF2F',
  color: '#000',
  borderRadius: '10px',
  border: 'none',
  boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
  cursor: 'pointer',
};

const estiloBotaoOperacao = {
  width: '75px',
  height: '75px',
  fontSize: '35px',
  fontWeight: 'bold',
  backgroundColor: '#9ACD32',
  color: '#000',
  borderRadius: '10px',
  border: 'none',
  boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
  cursor: 'pointer',
};

const estiloBotaoEspecial = {
  ...estiloBotao,
  backgroundColor: '#FF0000',
  color: '#fff'
};

export default Teclado;
