import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Header from "./Header";
import { BsPencil } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.css";

const Body = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <Header />

      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <Button variant="primary" className="me-2">
              Products-4
            </Button>
            <Button variant="secondary" className="me-2">
              Promotions-4
            </Button>
            <Button variant="info">Online-4</Button>
          </div>

          <div className="d-flex">
            <Button variant="primary" className="me-2">
              New Product
            </Button>
            <Button variant="secondary" className="me-2">
              Create Slice
            </Button>
            <Button variant="info">Bulk Upload</Button>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {products?.map((product) => (
            <div className="col mb-4" key={product.id}>
              <Card>
                {product.image && (
                  <Card.Img variant="top" src={product.image} />
                )}
                <Card.Body>
                  <Card.Text>
                    <strong>Name:</strong>
                    {product.title}
                  </Card.Text>
                  <Card.Text>
                    <strong>Price:</strong>
                    {product.price}
                  </Card.Text>

                  <div className="d-flex justify-content-between mt-3">
                    <Button variant="primary">Promote</Button>
                    <Button variant="success">Promote Online</Button>
                    <Button variant="warning">
                      <BsPencil size={30} />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
