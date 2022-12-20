import ReactDOM from 'react-dom';

import './index.css';
import App from './views/homepage';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Categories from './views/categories'
import SingleProduct from './views/singleProduct'
import AddProduct from './views/addProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path:"/categories/:id",
    element:<Categories/>,
  },
  {
    path:"/products/:id",
    element:<SingleProduct/>
  }
  ,
  {
    path:"/addproduct",
    element:<AddProduct/>
  }
]);


ReactDOM.render(
 

      <RouterProvider router={router} />,
   

  document.getElementById('root')
);