import React from 'react';
import { useContext, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PersonForm from './components/PersonForm';
import MyContext from './context/MyContext';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MDBContainer } from 'mdb-react-ui-kit';
import Index from './components/Index';
import CreatePet from './components/CreatePet';
import EditPet from './components/EditPet';
import ViewPet from './components/ViewPet';

function App() {
	const [themeColor, setThemeColor] = useState(sessionStorage.getItem('themeColor') ? sessionStorage.getItem('themeColor') : 'light-skin');
	const [bgcolor, setBgcolor] = useState(sessionStorage.getItem('bgcolor') ? sessionStorage.getItem('bgcolor') : '#ffffff');

	return (
		<MyContext.Provider value={{ setThemeColor, setBgcolor, themeColor, bgcolor }}>
			<MDBContainer fluid className={`${themeColor} p-0`}>
				{/* Website */}
				<Navbar title={'Pet Shelter'} />
				<MDBContainer breakpoint='md'>
					<Routes>
						<Route path='/' element={<Index />} />
						<Route path='/pet/new' element={<CreatePet />} />
						<Route path='/pet/:id/edit' element={<EditPet />} />
						<Route path='/pet/:id/view' element={<ViewPet />} />
					</Routes>
				</MDBContainer>
				{/* Endwebsite */}
			</MDBContainer>
		</MyContext.Provider>
	);
}

export default App;
