import './App.css';
import data from "./components/back/Data";
import Header from "./components/front/Header/Header";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Product from "./components/front/Product/Product";
import SignUp from "./components/front/SignUp/SignUp";
import {useState} from "react";
import Cart from "./components/front/Cart/Cart";

function App() {
    const {productItems} = data;
    const [cart, setCart] = useState([]);
    const handelAddProduct = (product)=>{
        const productExist = cart.find((item)=>item.id===product.id);
        if(productExist){
            setCart(cart.map((item) => item.id===product.id ?
                {...productExist,quantity:productExist.quantity+1}:item)
            );
        }
        else{
            setCart([...cart, {...product, quantity:1}])
        }
    }
    const handelRemoveProduct = (product)=>{
        const productExist = cart.find((item)=>item.id===product.id);
        if(productExist.quantity===0){
            setCart(cart.filter((item)=>item.id!=product.id));
        }
        else {
            setCart(cart.map((item) => item.id===product.id ?
                {...productExist,quantity:productExist.quantity-1}:item)
            );
        }
    }
    return (
        <div>
            <BrowserRouter>
                <Header cart={cart}/>
                <Routes>
                    <Route path="/" element={<Product productItems={productItems}
                                                      handelAddProduct={handelAddProduct}/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/cart" element={<Cart cart={cart} handelAddProduct={handelAddProduct} handelRemoveProduct={handelRemoveProduct}/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
