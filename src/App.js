import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home'
import Profile from './pages/Profile'
import Layout from './components/Layout'
import Catalog from "./pages/Catalog";

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
      element: <Layout />,    
      children: [
        {
          path: "/home",
          element: <Home />,          
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







