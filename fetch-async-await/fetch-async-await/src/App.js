import { usestate, useEffect } from "react";
import './App.css';

function App() {
  let [products, setproducts] = usestate([]);

  useEffect(() => { "getproductsfromserver"() }
  );

  let getproductsfromserver = async () => {

    let reqOptions = {
      method: "GET"



    }


    let JSONData = await fetch("https://fakestoreapi.com/products/1", reqOptions);

    let JSOData = await JSONData.json();
    setproducts(JSOData)

    console.log(JSOData);




  };



  return (

    <div className="App">
      <button onclick={() => {
        getproductsfromserver ();
      }}
      >get products</button>
      <div className="productsContainer">
        {products.map((ele, i) => {
          return (
            <div className="productDiv">
              <h4>{ele, title}</h4>;
              <img className="productspic" title={ele, description} src={ele, Image}></img>
              <h5>₹.{ele, price}</h5>
            </div>
          )
        };
      </div>

    </div>
  )
};