import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './components/Hero/Hero.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router'
import About from './components/About/About.jsx'
import OurServices from './components/OurServices/OurServices.jsx'
import Contact from './components/Contact/Contact.jsx'
import Toplist from './components/Toplist/Toplist.jsx'
import Cart from './components/Cart/Cart.jsx'
import { CartProvider } from './CardContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
  element: <App/>,
  children: [
    {
      path: '',
      element: <Hero/>
    },
    {
      path: 'about',
      element: <About/>
    },
    {
      path: 'menu',
      element: <Toplist/>
    },
    {
      path: 'contact',
      element: <Contact/>
    },
    {
      path: 'ourServices',
      element: <OurServices/>
    },
    {
      path:'cart',
      element: <Cart/>
    }

  ]
}
])
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App/>}>
//      <Route path='' element={<Hero/>}/>
//      <Route path='about' element={<About/>}/>
//      <Route path='contact' element={<Contact/>}/>
//      <Route path='menu' element={<Toplist/>}/>
//      <Route path='cart' element={<Cart/>}/>
//      <Route path='ourservices' element={<OurServices/>}/>
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>  
    <RouterProvider router={router}/>
    </CartProvider>
  </StrictMode>
)


 

