import React from 'react';
import { Image } from 'react-bootstrap';

export default () => {
  return (
      <div className='text-center justify-content-center '>
        <h1 className="pt-5 ">
          Bienvenido a <span style={{ fontFamily: 'cursive', color: '#AAC4FF' }}>Happy Cake </span><Image src='https://cdn-icons-png.flaticon.com/512/1349/1349830.png' style={{ width: '6vh' }} className='pb-2' />
        </h1>
        <h6> El lugar de los pasteles felices! </h6>
      </div>

  );
}
