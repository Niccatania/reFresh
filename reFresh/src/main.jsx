import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import PostList from './routes/postList.jsx'
import Create from './routes/create.jsx'
import {ChakraProvider} from '@chakra-ui/react'
import Navbar from './components/nav.jsx'


const router = createBrowserRouter([
{path: "/",
element: <App/>,
},
{
  path: "/postList",
  element: <PostList />
},
{
  path: "/create",
  element: <Create />
}    
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Navbar />
    <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
