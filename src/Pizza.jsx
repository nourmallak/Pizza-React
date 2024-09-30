import {useEffect ,useState } from "react";
import style from "./Pizza.module.css";
export default function Pizza()
{
    const [products, setProducts]=useState([]);
  async function getProducts() {
    const response=await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    const data = await response.json();
    setProducts(data.recipes);
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container">
      {products?.length ==0?<h2>Loading...</h2>:
        <div className="row g-3 ">
      {
        products?.map((product)=>(
          <div className="col-lg-3  ">
            <div className="product card px-3">
              <h2 className={`${style.h2}`}>{product.title}</h2>
              <img src={`${product.image_url}`} className={`${style.img} img-fluid`}/>
            </div>
          </div>
        )
        )
      }
        </div>
      }
      
      
    </div>
  )
}