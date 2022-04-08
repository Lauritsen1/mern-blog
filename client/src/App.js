import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import SinglePost from './pages/SinglePost';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import Dashboard from './pages/Dashboard';

import Header from './components/Header';

function App() {
	return (
		<>
			<Router>
				<div className='grid grid-rows-[max-content,1fr] h-screen'>
					< Header />
					<div>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/login' element={<Login />} />
							<Route path='/register' element={<Register />} />
							<Route path='/dashboard' element={<Dashboard />} />
							<Route path='/post/:id' element={<SinglePost />} />
							<Route path='/post/create' element={<CreatePost />} />
							<Route path='/post/update/:id' element={<UpdatePost />} />
						</Routes>
					</div>
				</div>
			</Router>
			<ToastContainer />
		</>
	);
}

export default App;
