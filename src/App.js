import Getir from 'pages/Getir';
import Home from 'pages/Home';
import ReactDOM from 'react-dom';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
  } from "react-router-dom";
  

export default function App() {
	const router = createBrowserRouter([
		{
		  path: "/",
		  element:<Home/>,
		},
		{
			path: "/getir",
			element:<Getir/>,
		  },
	  
	
	
	  ]);
	  
	  
	  ReactDOM.render(
	   
	  
			<RouterProvider router={router} />,
		 
	  
		document.getElementById('root')
	  );
}