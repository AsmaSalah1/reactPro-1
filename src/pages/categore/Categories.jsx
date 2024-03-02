import React, { useEffect, useState } from 'react'
function Categories() {

  const [Categoriess,setCategories] =useState([]);
  const getData =async()=>{
    const response =await fetch(`https://ecommerce-node4.vercel.app/categories/active?page=1&limit=9`);
    const data =await response.json();
    console.log(data.categories  );
    setCategories(data.categories);
    }
    useEffect(() => {
      getData();
    }, []);
    
      return (
        <>
         {Categoriess.map(category => 
         <div key={category.id}>
    
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
          <img src={category.image.secure_url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{category.name}</h5>
          </div>
        </div>
      </div>
    
    </div>
    
 
         </div>
          )}
        </>
      );
}

export default Categories