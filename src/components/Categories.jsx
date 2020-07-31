import React from 'react';
import '../assets/styles/component/Categories.scss';

const Categories = ({ Children }) => (
  <div className='categories'>
    <h3 className='categories__title'>Mi lista</h3>
    {Children}
  </div>
);

export default Categories;
