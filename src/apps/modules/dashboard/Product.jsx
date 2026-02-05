import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Product() {

  const [item, updateitem] = useState([]);

  const prodapi = () => {
    // axios.get("https://dummyjson.com/products?limit=20").then((e) => {
    //   console.log(e.data.products);
    //   updateitem(e.data.products);
    // });

    axios.get("https://jsonfakery.com/products").then((e)=>{
      console.log(e.data);
      updateitem(e.data)
    })

    // axios.get("https://fake-store-api.mock.beeceptor.com/api/products").then((e)=>{
    //   console.log(e)
    // })
  };
  useEffect(() => {
    prodapi();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        {item.map((d) => {
          return (
            <div className="col-md-3">
              <div class="card mt-4 border-0 shadow abc1">
                <img src={d.image} class="card-img-top imggg" alt="..." />
                <div class="card-body ">
                  <h5 class="card-title">{d.name}</h5>
                  <p class="card-text"><b>Price : </b>{d.price}₹</p>
                  <Link to="" class="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Product;