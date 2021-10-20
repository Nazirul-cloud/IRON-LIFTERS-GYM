import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import program from '../../../Images/cta-bg.jpg'
import Category from '../Category/Category';


let programStyle = {
    backgroundImage: `url(${program})`
 }

const Categorys = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('Category.json')
        .then( res => res.json())
        .then(data => setCategories(data))
    } ,[]);

    return (
        <div style={programStyle} className="pb-5">
            <div id="#cata" className="text-center pt-5 pb-4" >
                <h2 className="fw-bold fs-2 text-danger">CHOOSE YOUR PROGRAM</h2>
                <small className="text-light">Our Iron Lifters experts can help you discover new training techniques and exercises that offer a dynamic and efficient full-body workout.</small>
            </div>
            <Row xs={1} md={3} className="g-5 m-3 ">
              {
                  categories.map(category => <Category 
                    key  ={category.id}
                    category ={category}
                  ></Category>)
              }
            </Row>
        </div>
    );
};

export default Categorys;