import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { ContactPage } from './routes/ContactPage'
import { HomePage } from './routes/HomePage'

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <HomePage />,
// 	},
// 	{
// 		path: '/home',
// 		element: <HomePage />,
// 	},
// 	{
// 		path: '/contact',
// 		element: <ContactPage />,
// 	},
// ])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter basename='/task-react'>
			{/* <RouterProvider router={router} /> */}
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/home' element={<HomePage />} />
				<Route path='/contact' element={<ContactPage />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
