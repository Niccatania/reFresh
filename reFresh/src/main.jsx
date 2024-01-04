import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import PostList from './routes/postList.jsx'
import Create from './routes/create.jsx'

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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
