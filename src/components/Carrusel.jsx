import React from 'react';
import '../assets/styles/component/Carrusel.scss';

const Carrusel = ({ Children }) => (
  <section className='carousel'>
    <div className='carousel__container'>
      {Children}
    </div>
  </section>
);

export default Carrusel;
