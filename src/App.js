import './App.css';
import Home from './Pages/Home/Home';
import Salaries from './Pages/Salaries/Salaries';
import Team from './Pages/TeamMembers/Team';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/team",
    element: <Team/>
  },
  {
    path: "/salary",
    element: <Salaries/>,
  },
  
]);

function App() {
  
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
