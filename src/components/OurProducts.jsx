import React,{useState, useEffect} from 'react'
import DynamicImage from './Dynamicproducts';
import '../components/product.css'
 

const OurProducts = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch('/products.json ')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div  className='App' >
        <div className="row-container p-10 " style={{color:'black'}}>
          {images.map((image,index) => (
            
        <DynamicImage 
          key={image.id}
          src={image.imageUrl}
          alt={image.altText}
          width="300px"
          height="300px"
          title = {image.title}
          layout={index % 2 === 0 ? 'row' : 'column'}
       
        />
      ))}
      </div>
    </div>
  )
}

export default OurProducts
