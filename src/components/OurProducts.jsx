import React, { useState, useEffect } from 'react'
import DynamicImage from './Dynamicproducts';
import '../components/product.css'


const OurProducts = (props) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    
    const fetchProducts = async () => {
      try {
        await fetch('http://localhost:1337/api/products?populate=*', {
          method: "GET"
        }).then((rsp) => rsp.json()).then((resp) => {
          
          const data=Array.isArray(resp?.data) && resp.data.map((item, index) =>{
            const {id, attributes:{Title, Image ,Description}} = item
              return {id,description:Description,title:Title,imageUrl:`http://localhost:1337${Image.data[0].attributes.url}`}
          })
          setProducts(data)
          console.log('====================================');
          console.log(data);
          console.log('====================================');
        })
 
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/products.json ')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className='App' >
       
      <div className="row-container p-10 " style={{ color: 'black' }}>
        {products.map((product, index) => (

          <DynamicImage
            key={product.id}
            src={product.imageUrl}
            alt={"P image"}
            width="300px"
            height="300px"
            title={product.title}
            des = {product.description}
            layout={index % 2 === 0 ? 'row' : 'column'}

          />
        ))}
      </div>

    </div>
  )
}

export default OurProducts
