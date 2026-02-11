import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';

function Productdetails() {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [qntt, newQntt] = useState(1);


    const prodapi = () => {
        axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
            console.log(res.data);
            setItem(res.data);

        })
    }
    useEffect(() => {
        prodapi()
    }, [])

    const abc = (e) => {
        newQntt(e.target.value);
    }

    return (

        <div className='container-fluid hight-1 bg-white'>
            <div className='row bg-light'>
                <div className='col-md-3 border d-flex align-items-center justify-content-center flex-column'>
                    {item.thumbnail && (
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: item.title,
                                    isFluidWidth: true,
                                    src: item.thumbnail,
                                },
                                largeImage: {
                                    src: item.thumbnail,
                                    width: 1200,
                                    height: 1800,
                                },
                            }}
                        />
                    )}
                </div>

                <div className='col-md-7 pt-3'>
                    <h2>{item.title}</h2>
                    <p className="text-muted">{item.category}</p>
                    <p>{item.description}</p>

                    <h4 className="text-primary">
                        ₹{item.price}
                        <small className="text-secondary ms-2">
                            ({item.discountPercentage}% off)
                        </small>
                    </h4>

                    {item.reviews && item.reviews.length > 0 && (
                        <div className="mt-4">
                            <h5>Reviews:</h5>
                            {item.reviews.map((r, idx) => (
                                <div key={idx} className="border-top pt-2">
                                    <p className="mb-1">
                                        <strong>{r.reviewerName}</strong> – ⭐ {r.rating}
                                    </p>
                                    <p className="mb-0">{r.comment}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="col-md-2 d-flex align-items-center justify-content-center">
                    <div className="card" >
                        <div className="card-body">
                            <h2 className="card-title">₹{item.price * qntt}</h2>
                            <select className="form-select mt-4" aria-label="Default select example" value={qntt} onChange={abc}>
                                <option selected>Select quntity</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <button type="button" className="btn btn-warning w-100 mt-3">Add to cart</button>
                            <button type="button" className="btn btn-danger w-100 mt-3">Buy now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Productdetails