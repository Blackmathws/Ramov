import React from 'react';

function Benefits() {
  return (
    <div className="h-[99vh] flex items-center bg-baltic_sea bg-benefits bg-[right_2rem] bg-contain bg-no-repeat">
      <div className="flex flex-col items-start gap-8 ml-48">
        <div className="text-xs text-mine_shaft font-semibold bg-sunglow rounded-full uppercase py-3 px-6">
          aproveite as vantagens!
        </div>
        <h1 className="text-3xl text-white tracking-tight leading-10">
          <span>Benefícios </span>
          <b className="text-sunglow"><i>Exclusivos</i></b>
        </h1>
      
        <a className="flex gap-4 text-xs font-medium text-white bg-royal_blue rounded-sm uppercase py-5 px-10 mt-6" href="">
          aproveitar benefícios
          <img src="/assets/icons/whatsapp.svg" alt="whatsapp" />
        </a>
      </div>
    </div>
  );
}

export default Benefits;
