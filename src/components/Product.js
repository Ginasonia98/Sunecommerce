import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { set } from "lodash";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);
  return (
    <section className="container-fluid py-5 min-vh-100 ">
      <div className="title text-center text-decoration-underline fs-3 fw-bold">
        All Item
      </div>
      <div className="row row-cols row-cols-md-3 row-cols-lg-5 g-4 mt-3 mx-lg-5 mx-4 ">
        {loading && (
          <div>
            {" "}
            <h1>Loading...</h1>
          </div>
        )}
        {data.map((product) => (
          <div key={product.id} className="card-group gy-0">
            <div className="card shadow mt-4">
              <div className="card-body d-flex flex-column p-2">
                <img
                  src={product.image}
                  className="img-card-profile mx-auto mb-2"
                  alt="#"
                />
                <div className="card-description">
                  <h6 className="text-center ">{product.title}</h6>
                  <h6 className="text-center ">{`Category: ${product.category}`}</h6>
                  <h6 className="text-center ">{`Price:  ${product.price}`}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
