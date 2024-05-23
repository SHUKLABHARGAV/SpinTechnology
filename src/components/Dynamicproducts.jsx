// src/DynamicImage.js
import React from 'react';
import PropTypes from 'prop-types';
import './product.css'

 

const DynamicImage = ({ src, alt, width, height, className,title ,layout }) => {
  return (
   

    <div className={`dynamic-image   ${layout} ${className}`}>

    <img  
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ width: width, height: height , padding:'1%'}}
      />
      <h2>{title}</h2>
      </div>
       
  );
};

DynamicImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  layout: PropTypes.string,
 
};

DynamicImage.defaultProps = {
  width: '100%',
  height: 'auto',
  className: '',
  title:'',
  layout: 'row', // default layout
};

export default DynamicImage;
