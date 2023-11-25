import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import Profile from './pages/Profile';
import Catalog from "./pages/Catalog";
import Layout from './components/Layout';


function App() {

  const router = createBrowserRouter([
  {
    path: "/",
      element: <Layout />,    
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          path: "/catalog",
          element: <Catalog />,          
        },
        {
          path: "/profile",
          element: <Profile />,        
        },
    ],
  },
  ]);
  
  return (
   <RouterProvider router={router} />
  );
}

export default App;







