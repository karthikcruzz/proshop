import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
const ProductScreen = ({match}) => {
    const {id}=useParams()
    const product=products.find((p)=>p._id===Number(id))
  return (
  <>
    <Link className='btn btn-light my-3 ' to='/'>Go Back</Link>
    <Row>
        <Col md={6}>
            <Image src={product.image} alt={product.name}/>
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroupItem>
                    <h3>{product.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </ListGroupItem>
                <ListGroupItem>
                   <h3> Price: ${product.price}</h3>
                </ListGroupItem>
                <ListGroupItem>
                    Description: ${product.description}
                </ListGroupItem>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroupItem>
                        <Row>
                            <Col>
                            Price:
                            </Col>
                            <Col>
                            <h5>${product.price}</h5>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                            Status:
                            </Col>
                            <Col>
                            {product.countInStock>0?'In Stock':'Out of Stock'}
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Button className='btn-block' type='button' disabled={product.countInStock===0}>ADD TO CART</Button>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
    </Row>
  </>
  )
}

export default ProductScreen
