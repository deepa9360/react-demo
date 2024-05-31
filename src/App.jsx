import React, { useState } from 'react'
import Birthday from './Component/FunComp/Birthday.jsx';
import ApiCallComp from './Component/FunComp/ApiCallComp.jsx';
import NavbarComp from './Component/Commen/NavbarComp.jsx';
import FormReact from './Component/FunComp/FormReact.jsx';
import Project from './Component/Project.jsx';
import Regform from './Component/Regform.jsx';
import TodoList from './Component/TodoList.jsx';
import Producte from './Component/Producte.jsx';
import HeaderComp from './Component/HeaderComp.jsx';
import CounterProvider from './Component/CounterProvider.jsx';
import UserefComp from './Component/UserefComp.jsx';
import HomeComp from './Component/HomeComp.jsx';
import ProductComp from './Component/ProductComp.jsx';
import ContactusComp from './Component/ContactusComp.jsx';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CounterRedux from './Component/CounterRedux.jsx'
import { Provider } from 'react-redux';
import { store } from './Redux/Store.jsx';
import BasicComp from './Project 1/BasicComp.jsx'
import Home from './Evanto/Home.jsx';
import Aboutme from './Evanto/Aboutme.jsx';
import Contact from './Evanto/Contact.jsx';
import Projectpage from './Evanto/Projectpage.jsx';
import Navbar from './components/Navbar.jsx';



function App() {

   return (
      <div>

       <Navbar/>
         {/* <BasicComp/> */}
         {/* <Provider store={store}>
            <CounterRedux />
         </Provider>  */}

         {/* <Home /> */}
         {/* <Aboutme /> */}
         {/* <Contact />
         <Projectpage /> */}
      

      </div>

      //  <BrowserRouter>
      //     <NavbarComp />
      //     <ProductFun/>
      //    <Birthday/>
      //    <ApiCallComp/> 
      //     <FormReact/>
      //     <Project/>
      //    <Regform />
      //    <TodoList/> 
      //      <CounterProvider>
      //      <HeaderComp />
      //      <Producte />
      //     </CounterProvider> 
      //     <UserefComp/>


      //     <nav>
      //        <ul>
      //        <li> <Link to={'/'}>Home</Link> </li>
      //          <li> <Link to={'/Product'}>Product</Link> </li>
      //           <li> <Link to={'/Contactus'}>Contact us</Link> </li>
      //        </ul>
      //     </nav>
      //     <Routes>
      //       <Route path='/' element={<HomeComp />}>
      //        <Route path='/Product' element={<ProductComp />}
      //        <Route path='/Contactus' element={<ContactusComp />} /> 

      //        <HomeComp/>
      //     <ProductComp/
      //     <ContactusComp/> 

      //     </Routes>
      //  </BrowserRouter>  



   )
}

export default App;


