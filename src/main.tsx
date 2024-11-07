import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { ContactPage } from './routes/ContactPage'
import { HomePage } from './routes/HomePage'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter basename='/task-react'>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/home' element={<HomePage />} />
				<Route path='/contact' element={<ContactPage />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
