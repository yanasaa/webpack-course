import {createRoot} from 'react-dom/client'
import App from './components/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About } from '@/pages/about'
import { LazyShop } from '@/pages/shop'
import { Suspense } from 'react'

const root = document.getElementById('root')

if(!root) {
    throw new Error('root not found')
}

const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense><About /></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense><LazyShop /></Suspense>
            }
        ]
    }
])

container.render(
    <RouterProvider router={router} />
)