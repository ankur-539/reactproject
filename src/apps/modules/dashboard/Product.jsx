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

    // axios.get("https://jsonfakery.com/products/random/32").then((e) => {
    //   console.log(e.data);
    //   updateitem(e.data)
    // })
    axios.get('https://dummyjson.com/products?limit=100').then((e) => {
      console.log(e.data.products);
      updateitem(e.data.products)
    })

  };
  useEffect(() => {
    prodapi();
  }, []);


  const handleOption = (e) => {
    setOpt(e.target.value);
  }

  const filterdata = (f) => {
    console.log(f.target.value)
  }


  return (
    <div className="container-fluid">
      <div className="row mt-4 g-0">
        <div className="col-sm-6 d-flex jus-cen">
          <div className="form-check form-check-inline p-0 ">
            <select className='form-select' onChange={handleOption}>
              <option hidden value="datafilter">Filter Product By</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="categories">Categories</option>
            </select>
          </div>

          <div className="form-check form-check-inline p-0">
            <select className='form-select' id='o' onChange={filterdata}>
              <option hidden>By:-{opt}</option>
              {item.map((d) => {
                if (opt === "name") {
                  return (
                    <option value={d.title} >{d.title}</option>
                  )
                }
                else if (opt === "price")
                  return (
                    <option value={d.price}>{d.price}₹</option>
                  )
                else if (opt === "categories")
                  return (
                    <option value={d.category}>{d.category}</option>
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
          if (d.price <= 50) {
            return (
              <div className="col-md-3" key={d.id}>
                <Link to={"details/" + d.id} className='text-decoration-none'>
                  <div className="card mt-4 border-0 shadow abc1 bg-light bg-gradient">
                    <span class="badge text-bg-info position-absolute poss blink">Top Pics</span>
                    <img src={d.thumbnail} className="card-img-top imggg" alt="..." />
                    <div className="card-body bg-white rounded-bottom">
                      <h5 className="card-title fw-bold">{d.title}</h5>
                      <p className="card-text"><b>Category : </b>{d.category}</p>
                      <p className="card-text"><b>Price : </b>{d.price}₹</p>
                      <h5>{d.availabilityStatus} : <span className="badge text-bg-secondary">{d.stock}</span></h5>
                    </div>
                  </div>
                </Link>
              </div>
            )
          }
          else if(d.price > 50 && d.price <= 500) {
            return (
              <div className="col-md-3" key={d.id}>
                <Link to={"details/" + d.id} className='text-decoration-none'>
                  <div className="card mt-4 border-0 shadow abc1 bg-light bg-gradient">
                    <span className="badge text-bg-danger position-absolute poss blink">Top Sellers</span>
                    <img src={d.thumbnail} className="card-img-top imggg" alt="..." />
                    <div className="card-body bg-white rounded-bottom">
                      <h5 className="card-title fw-bold">{d.title}</h5>
                      <p className="card-text"><b>Category : </b>{d.category}</p>
                      <p className="card-text"><b>Price : </b>{d.price}₹</p>
                      <h5>{d.availabilityStatus} : <span className="badge text-bg-secondary">{d.stock}</span></h5>
                    </div>
                  </div>
                </Link>
              </div>
            )
          }

          else {
            return (
              <div className="col-md-3" key={d.id}>
                <Link to={"details/" + d.id} className='text-decoration-none'>
                  <div className="card mt-4 border-0 shadow abc1 bg-light bg-gradient">
                    <span className="badge text-bg-warning position-absolute poss blink">premium</span>
                    <img src={d.thumbnail} className="card-img-top imggg" alt="..." />
                    <div className="card-body bg-white rounded-bottom">
                      <h5 className="card-title fw-bold">{d.title}</h5>
                      <p className="card-text"><b>Category : </b>{d.category}</p>
                      <p className="card-text"><b>Price : </b>{d.price}₹</p>
                      <h5>{d.availabilityStatus} : <span className="badge text-bg-secondary">{d.stock}</span></h5>
                    </div>
                  </div>
                </Link>
              </div>
            )
          }
        })}
      </div>}

      {structure === "table" && <div className="row">
        <div className="col-sm-12 mt-4 overflow-auto">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className='border'>Id</th>
                <th scope="col" className='border'>Image</th>
                <th scope="col" className='border'>Name</th>
                <th scope="col" className='border'>Price</th>
                <th scope="col" className='border'>Categories</th>
                <th scope="col" className='border'>Stock</th>
                <th scope="col" className='border'>Rating</th>
              </tr>
            </thead>
            <tbody>
              {item.map((d) => {
                return (
                  <tr key={d.id}>
                    <td className='border align-middle'>{d.id}</td>
                    <td className='border align-middle'><img src={d.thumbnail} alt='...' className='imgggg' /></td>
                    <td className='border align-middle'>{d.title}</td>
                    <td className='border align-middle'>{d.price}₹</td>
                    <td className='border align-middle'>{d.category}</td>
                    <td className='border align-middle'>{d.stock}</td>
                    <td className='border align-middle'>{d.rating}</td>
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
            <div className="col-sm-4 mt-4" key={d.id}>
              <ul className="list-group list-group-numbered">
                <li className="list-group-item"><b>Name: </b>{d.title}</li>
                <li className="list-group-item"><b>Price: </b>{d.price}₹</li>
                <li className="list-group-item"><b>Categories: </b>{d.category}</li>
                <li className="list-group-item"><b>Stock: </b>{d.stock}</li>
              </ul>
            </div>
          )
        })}
      </div>}
      
    </div>
  )
}

export default Product;