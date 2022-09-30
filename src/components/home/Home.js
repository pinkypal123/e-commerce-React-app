
import {  useContext, useEffect, useState } from "react"
// import Cart from "../cart/Cart";
import { dataContext } from "../context/Context";
import Navbar from "../navbar/Navbar";
import './Home.css'
// export const homeContext=createContext()
export default function Home(){
    const homeContext=useContext(dataContext)
   const[post,setPost]=useState([])
    const [raw, setRaw] = useState([]);
   const[cartItem,setCartItem]=useState([])
    useEffect(() => {
        fetch(" https://dummyjson.com/products?limit=100")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data.products);
                setRaw(data.products);
                setPost(data.products);
            });
    }, []);
    function titleSearch(e) {
        let filterTitle = raw.filter((el) =>
            el.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setPost(filterTitle);
    }
    function priceSearch(e) {
        console.log(typeof +e.target.value);
        let filterPrice = raw.filter((el) => el.price === +e.target.value);
       console.log(filterPrice)
        
        setPost(filterPrice);
    }
    function ratingSearch(e) {
        let filterRating = raw.filter((el) => el.rating === +e.target.value);
        setPost(filterRating);
    }
    function discountSearch(e) {
        let filterDiscount = raw.filter(
            (el) => el.discountPercentage === +e.target.value
        );
        setPost(filterDiscount);
    }
   const addToCart=(el)=>{
    setCartItem([...cartItem,el])
    homeContext.setCarttValue(cartItem)
    
   }
   
    return(
        <>
        <Navbar/>
        <header>
        <div className="headerContainer">
            <div className="input">
                <input type="text" onChange={(e) => titleSearch(e)}></input><button className="btn">Product</button>
            </div>
            <div className="input">
                <input type="text" onChange={(e) => discountSearch(e)}></input><button className="btn">Discount</button>
            </div>
            <div className="input">
                <input type="text" onChange={(e) => priceSearch(e)}></input><button className="btn">Price</button>
            </div>
            <div className="input">
                <input type="number" onChange={(e) => ratingSearch(e)}></input><button className="btn">Rating</button>
            </div>
        </div>
    </header>
    <div className="container">
        {post.map((el) => {
            return <div className="listItem" key={el.id}>
                <div className="listImages"><img src={el.images[0]} alt=""/></div>
                <div className="cartBtn" id={el.id} onClick={() => addToCart(el)}>cart</div>
                <div className="productItem">
                    <div className="title">{el.title}</div>
                    <div className=" costPrice">
                        <span className="price">Rs: ${el.price}</span>
                        <span className="rating">{el.rating}|<span className="discount">{el.discountPercentage}</span></span>
                    </div>
                </div>

            </div>
        })}
    </div>


</>
    )
}