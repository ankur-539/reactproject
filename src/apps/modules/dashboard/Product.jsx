import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaTable } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { TbCards } from "react-icons/tb";
function Product() {

  const [item, updateitem] = useState([]);
  const [opt, setOpt] = useState("");
  const [structure, setStructure] = useState("card")
  const prodapi = () => {

    axios.get("https://jsonfakery.com/products/random/32").then((e) => {
      console.log(e.data);
      updateitem(e.data)
    })

  };
  useEffect(() => {
    prodapi();
  }, []);


  const handleOption = (e) => {
    setOpt(e.target.value);
  }


  return (
    <div className="container-fluid">
      <div className="row mt-4 g-0">
        <div className="col-sm-6 d-flex jus-cen">
          <div className="form-check form-check-inline p-0 ">
            <select className='form-select' onChange={handleOption}>
              <option hidden value="datafilter">Filter Product By</option>
              <option value="menufacturer">Manufacturer</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="categories">Categories</option>
            </select>
          </div>

          <div className="form-check form-check-inline p-0">
            <select className='form-select' id='o'>
              <option hidden>By:-{opt}</option>
              {item.map((d) => {
                if (opt === "name") {
                  return (
                    <option value={d.name}>{d.name}</option>
                  )
                }
                else if (opt === "menufacturer")
                  return (
                    <option value={d.manufacturer}>{d.manufacturer}</option>
                  )
                else if (opt === "price")
                  return (
                    <option value={d.price}>{d.price}</option>
                  )
                else if (opt === "categories")
                  return (
                    <option value={d.product_category.name}>{d.product_category.name}</option>
                  )
              })}
            </select>
          </div>
        </div>
        <div className="col-sm-6 text-end t-al-c mtt">
          <span className="badge bg-light text-black me-2 fs-5" onClick={() => setStructure("card")}><TbCards /></span>
          <span className="badge bg-light text-black me-2 fs-5" onClick={() => setStructure("table")}><FaTable /></span>
          <span className="badge bg-light text-black fs-5" onClick={() => setStructure("list")}><FaListAlt /></span>
        </div>
      </div>

      {structure === "card" && <div className="row">
        {item.map((d) => {
          return (
            <div className="col-md-3">
              <div className="card mt-4 border-0 shadow abc1">
                <img src={d.image} className="card-img-top imggg" alt="..." />
                <div className="card-body ">
                  <h5 className="card-title"><b>Name: </b>{d.name}</h5>
                  <p className="card-text"><b>Category : </b>{d.product_category.name}</p>
                  <p className="card-text"><b>Price : </b>{d.price}₹</p>
                  <Link to="" className="btn btn-primary">Add</Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>}

      {structure === "table" && <div className="row">
        <div className="col-sm-12 mt-4 overflow-auto">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className='border'>Image</th>
                <th scope="col" className='border'>Name</th>
                <th scope="col" className='border'>Price</th>
                <th scope="col" className='border'>Manufacturer</th>
                <th scope="col" className='border'>Categories</th>
                <th scope="col" className='border'>Id</th>
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
                    <td className='border'>{d.id}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>}

      {structure === "list" && <div className="row">
        {item.map((d) => {
          return (
            <div className="col-sm-4 mt-4">
              <ul class="list-group list-group-numbered">
                <li class="list-group-item"><b>Name: </b>{d.name}</li>
                <li class="list-group-item"><b>Manufacturer: </b>{d.manufacturer}</li>
                <li class="list-group-item"><b>Price: </b>{d.price}₹</li>
                <li class="list-group-item"><b>Categories: </b>{d.product_category.name}</li>
              </ul>
            </div>
          )
        })}
      </div>}
    </div>
  )
}

export default Product;