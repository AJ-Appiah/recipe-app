import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Recipes from "./assets/pages/Recipes"
import Welcome from "./assets/pages/Welcome"
import Categories from "./assets/pages/Categories";
import "./App.css"

const router = createBrowserRouter([
  {path: '/', element: <Welcome/>},
  {path: '/recipes', element: <Recipes/>},
  {path: '/categories', element: <Categories/>}
]);

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  
  )
}

export default App
