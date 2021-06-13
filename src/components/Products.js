import { useEffect, useState } from "react";
import Users from "./Users";

const Products = () => {
    const [ products, setProducts ] = useState([]);
    useEffect(() => {
        console.log("***** useEffect from products invoked *****");
        //please ensure you have a REST API running in local on port 8080 with end point products
        //if you don't have local setup use Git hub API https://api.github.com/userss
        fetch('http://localhost:8080/products')
            .then( response => response.json())
            .then(data => {
                console.log("***** Products data received *****");
                setProducts(data); //real products data update to state
            });
    });

    return(
    <>
        <div className = "section">
            { products.map( product => (
                <div key = { product.id }>
                    <h5> {product.id} - {product.name} - { product.price}</h5>
                </div>
            ))}
        </div>
    </>
    );
}

export default Products;