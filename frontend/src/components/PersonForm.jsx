import React, { useState } from 'react';
import axios from 'axios';
import { MDBInput, MDBBtn, MDBCol } from 'mdb-react-ui-kit';
export default () => {
	//keep track of what is being typed via useState hook
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	//handler when the form is submitted
	const onSubmitHandler = (e) => {
		//prevent default behavior of the submit
		e.preventDefault();
		//make a post request to create a new person
		axios
			.post('http://localhost:8000/api/people', {
				firstName,
				lastName,
			})
			.then((res) => console.log(res))
			.catch((err) => {
				setLoading(false);
				const errorResponse = err.response.data.errors; // Get the errors from err.response.data
				setValErrors(errorResponse);
			});
	};
	//onChange to update firstName and lastName
	return (
		<MDBCol size='6' sm='3' className='col-example mx-auto'>
			<form onSubmit={onSubmitHandler}>
				<h3 className='text-start'>Add a new person</h3>
				<hr />
				<MDBInput
					label='First Name'
					id='firstName'
					type='text'
					name='firstName'
					onChange={(e) => setFirstName(e.target.value)}
					value={firstName}
					className='mb-4'
				/>
				<MDBInput
					label='Last Name'
					id='lastName'
					type='text'
					name='lastName'
					onChange={(e) => setLastName(e.target.value)}
					value={lastName}
					className='mb-4'
				/>
				<MDBBtn type='submit' className='shadow-1 float-end'>
					Submit
				</MDBBtn>
			</form>
		</MDBCol>
	);
};
