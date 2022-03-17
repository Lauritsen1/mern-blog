import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import Header from './components/Header';

function App() {
	return (
		<>
			<Router>
				<div>
					< Header />
					<div className='m-6'>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/login' element={<Login />} />
							<Route path='/register' element={<Register />} />
						</Routes>
					</div>
				</div>
			</Router>
			<ToastContainer />
		</>
	);
}

export default App;
