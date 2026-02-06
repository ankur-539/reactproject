import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaTable } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { TbCards } from "react-icons/tb";

function Product() {

  const [item, updateitem] = useState([]);

  const prodapi = () => {
    // axios.get("https://dummyjson.com/products?limit=20").then((e) => {
    //   console.log(e.data.products);
    //   updateitem(e.data.products);
    // });

    axios.get("https://jsonfakery.com/products").then((e) => {
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
      <div className="row mt-4 g-0">
        <div className="col-sm-6 d-flex jus-cen">
          <div className="form-check form-check-inline p-0 ">
            <select className='form-select'>
              <option hidden>Filter Product By</option>
              <option>Manufacturer</option>
              <option>Name</option>
              <option>Price</option>
              <option>Categories</option>
            </select>
          </div>

          <div className="form-check form-check-inline p-0">
            <select className='form-select'>
              <option>filter By</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6 text-end t-al-c mtt">
          <span className="badge bg-light text-black me-2 fs-5"><TbCards /></span>
          <span className="badge bg-light text-black me-2 fs-5" ><FaTable /></span>
          <span className="badge bg-light text-black fs-5"><FaListAlt /></span>
        </div>
      </div>
      <div className="row">
        {item.map((d) => {
          return (
            <div className="col-md-3">
              <div className="card mt-4 border-0 shadow abc1">
                <img src={d.image} className="card-img-top imggg" alt="..." />
                <div className="card-body ">
                  <h5 className="card-title"><b>Name: </b>{d.name}</h5>
                  <p className="card-text"><b>Category : </b>{d.product_category.name}₹</p>
                  <p className="card-text"><b>Price : </b>{d.price}</p>
                  <Link to="" className="btn btn-primary">Add</Link>
                </div>
              </div>
            </div>
          )
        })}

        {/* <div className="col-sm-12 mt-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className='border'>Image</th>
                <th scope="col" className='border'>Name</th>
                <th scope="col" className='border'>Price</th>
                <th scope="col" className='border'>Manufacturer</th>
                <th scope="col" className='border'>Categories</th>
              </tr>
            </thead>
            <tbody>
              {item.map((d) => {
                return (
                  <tr>
                    <td className='border'><img src={d.image} alt='...' className='imgggg' /></td>
                    <td className='border'>{d.name}</td>
                    <td className='border'>{d.price}</td>
                    <td className='border'>{d.manufacturer}</td>
                    <td className='border'>{d.product_category.name}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div> */}
      </div>
    </div>
  )
}

export default Product;