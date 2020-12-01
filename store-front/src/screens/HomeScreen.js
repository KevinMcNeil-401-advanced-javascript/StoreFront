import React from 'react';
import Product from '../components/Product.js'
import products from '../products.js';
import { Row, Col } from 'react-bootstrap';

const HomeScreen = () => {

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={4} lg={3}>
            <Product key={product._id} product={product} />
          </Col>
        ))}

      </Row>
    </>
  )


}

export default HomeScreen;