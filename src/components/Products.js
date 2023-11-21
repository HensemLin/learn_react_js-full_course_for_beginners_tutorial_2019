const Products = (props) => {
    console.log(props)
    return (  
        <div>
            <h2>Name:{props.product.name}</h2>
            <p>Price:{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD"})}
            - {props.product.description}</p>
        </div>
    );
}
 
export default Products;