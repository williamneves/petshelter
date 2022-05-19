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

export default function ({ title }) {
	const [showNavColor, setShowNavColor] = useState(false);
	// import context
	const { setThemeColor, setBgcolor, themeColor, bgcolor } = useContext(MyContext);

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
					<MDBNavbarBrand href='#'>{title}</MDBNavbarBrand>
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
								<MDBNavbarLink aria-current='page' href='#'>
									Home
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href='#'>Features</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href='#'>About</MDBNavbarLink>
							</MDBNavbarItem>
						</MDBNavbarNav>
						<SwitchTheme themeColor={themeColor} handleChangeThemeColor={handleChangeThemeColor} />
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		</React.Fragment>
	);
}
