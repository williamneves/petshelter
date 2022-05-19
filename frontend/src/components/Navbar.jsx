import React, { useState, useContext, useEffect } from 'react';
import {
	MDBNavbar,
	MDBContainer,
	MDBIcon,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBNavbarToggler,
	MDBNavbarBrand,
	MDBCollapse,
	MDBSwitch,
} from 'mdb-react-ui-kit';
import MyContext from '../context/MyContext';
import SwitchTheme from './common/SwitchTheme';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ({ title }) {
	const [showNavColor, setShowNavColor] = useState(false);
	// import context
	const { setThemeColor, setBgcolor, themeColor, bgcolor } = useContext( MyContext );
	const navigate = useNavigate();

	// set session with themeColor and bgcolor first time
	useEffect(() => {
		// console.log(sessionStorage.getItem('themeColor') === null);
		if (sessionStorage.getItem('themeColor') === null) {
			sessionStorage.setItem('themeColor', 'light-skin');
			sessionStorage.setItem('bgcolor', '#ffffff');
		} else {
			setThemeColor(sessionStorage.getItem('themeColor'));
			setBgcolor(sessionStorage.getItem('bgcolor'));
		}
	}, []);
	useEffect(() => {
		sessionStorage.setItem('themeColor', themeColor);
		sessionStorage.setItem('bgcolor', bgcolor);
	}, [themeColor, bgcolor]);

	// useEffect(() => {
	// 	if (todos.length > 0) sessionStorage.setItem('TODOLIST', JSON.stringify(todos));
	// }, [todos]);

	useEffect(() => {
		const body = document.querySelector('body');
		body.style.backgroundColor = bgcolor;
	}, [bgcolor]);

	const handleChangeThemeColor = () => {
		if (themeColor === 'light-skin') {
			setThemeColor('dark-skin');
			setBgcolor('#303030');
		} else {
			setThemeColor('light-skin');
			setBgcolor('#ffffff');
		}
	};

	return (
		<React.Fragment>
			<MDBNavbar expand='lg' light className='border-bottom border-2 shadow-1 mb-3'>
				<MDBContainer breakpoint='md'>
					<Link to="/">
						<MDBNavbarBrand tag='span'>{title}</MDBNavbarBrand>
					</Link>
					<MDBNavbarToggler
						type='button'
						data-target='#navbarApp'
						aria-controls='navbarApp'
						aria-expanded='false'
						aria-label='Toggle navigation'
						onClick={() => setShowNavColor(!showNavColor)}>
						<MDBIcon icon='bars' fas />
					</MDBNavbarToggler>
					<MDBCollapse show={showNavColor} navbar>
						<MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
							<MDBNavbarItem className='active'>
								<Link to="/">
									<MDBNavbarLink aria-current='page' tag='span'>
										Home
									</MDBNavbarLink>
								</Link>
							</MDBNavbarItem>
							<MDBNavbarItem className='active'>
								<Link to="/pet/new">
									<MDBNavbarLink aria-current='page' tag='span'>
										Add Pet
									</MDBNavbarLink>
								</Link>
							</MDBNavbarItem>
						</MDBNavbarNav>
						<SwitchTheme themeColor={themeColor} handleChangeThemeColor={handleChangeThemeColor} />
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		</React.Fragment>
	);
}
