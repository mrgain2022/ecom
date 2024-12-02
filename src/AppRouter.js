import React from "react";
import {Route, Routes} from 'react-router-dom';
import HomePage from "./Pages/HomePage/HomePage";
import Header from "./Components/Common/Header/Header";
import Footer from "./Components/Common/Footer/Footer";
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import AddCart from "./Pages/AddCart/AddCart";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blogs from "./Pages/Blogs/Blogs";
import ContactUs from "./Pages/ContactUs/ContactUs";

const PrivateRoute = ({ element: Element, ...rest }) => {
    return(
        <React.Fragment>
            <Header/>
                <Element {...rest}/>
            <Footer/>
        </React.Fragment>
    )
}

const AppRouter = () =>{
    return(
        <Routes>
            <Route path={'/'} element={<PrivateRoute element={HomePage}/>}/>
            <Route path={'/ProductList'} element={<PrivateRoute element={ProductList}/>}/>
            <Route path={'/ProductDetails'} element={<PrivateRoute element={ProductDetails}/>}/>
            <Route path={'/AddCart'} element={<PrivateRoute element={AddCart}/>}/>
            <Route path={'/AboutUs'} element={<PrivateRoute element={AboutUs}/>}/>
            <Route path={'/Blogs'} element={<PrivateRoute element={Blogs}/>}/>
            <Route path={'/ContactUs'} element={<PrivateRoute element={ContactUs}/>}/>
        </Routes>
    );
};

export default AppRouter;