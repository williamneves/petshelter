import React from 'react';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {
	MDBCard,
	MDBCardBody,
	MDBCardHeader,
	MDBInput,
	MDBTextArea,
	MDBBtn,
	MDBIcon,
} from 'mdb-react-ui-kit';

const EditPet = () => {
	const [pet, setPet] = useState('');
	const [valErrors, setValErrors] = useState(false);
	const [ loading, setLoading ] = useState( false );

	// use navigate to redirect to index page
	const navigate = useNavigate();
	
	// Get the pet id from the url
	const { id } = useParams();
	
	useEffect(() => {
		// get the pet from the database
		axios
		.get(`http://localhost:8000/api/pet/${id}`)
		.then((response) => {
			setPet(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	// Handle the update event
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		// post the pet to the database
		
		// check if name is empty
		// if ( pet.name === '' ) {
		// 	setValErrors( { name: 'Name is required' } );
		// 	setLoading( false );
		// 	return;
		// }

		axios
			.put(`http://localhost:8000/api/pet/${id}`, pet)
			.then((response) => {
				navigate('/');
			})
			.catch((err) => {
				setLoading(false);
				const errorResponse = err.response.data.errors; // Get the errors from err.response.data
				setValErrors(errorResponse);
			});
	};

	return (
		<React.Fragment>
			<h2>Update the {pet.name}</h2>
			<hr />
			<MDBCard className='col-8 mx-auto mt-3 shadow-3'>
				<MDBCardHeader>
					Edit the <b>pet</b> informations bellow:
				</MDBCardHeader>
				<MDBCardBody>
					<form onSubmit={handleSubmit}>
						<div className='row col-12 justify-content-between mx-auto'>
							<div className='col-6'>
								{/* Pet Name */}
								<MDBInput
									name='name'
									// required
									label='Name'
									id='name'
									type='text'
									value={pet && pet.name}
									onChange={(e) => setPet({ ...pet, name: e.target.value })}
								/>
								<div className='mb-2' style={{ minHeight: '22px' }}>
									{valErrors && valErrors.name && (
										<small className='text-danger text-end d-block me-1 fst-italic'>
											{valErrors.name.message}*
										</small>
									)}
								</div>
								{/* Pet Type */}
								<MDBInput
									name='type'
									label='Type'
									id='type'
									type='text'
									value={pet && pet.type}
									onChange={(e) => setPet({ ...pet, type: e.target.value })}
								/>
								<div className='mb-2' style={{ minHeight: '22px' }}>
									{valErrors && valErrors.type && (
										<small className='text-danger text-end d-block me-1 fst-italic'>
											{valErrors.type.message}*
										</small>
									)}
								</div>
								{/* Pet Description */}
								<MDBTextArea
									rows={3}
									name='description'
									label='Description'
									id='description'
									type='text'
									value={pet && pet.description}
									onChange={(e) => setPet({ ...pet, description: e.target.value })}
								/>
								<div className='mb-2' style={{ minHeight: '22px' }}>
									{valErrors && valErrors.description && (
										<small className='text-danger text-end d-block me-1 fst-italic'>
											{valErrors.description.message}*
										</small>
									)}
								</div>
							</div>
							<div className='col-6'>
								<h6>Skills (Optional)</h6>
								<hr />
								{/* Pet Skill 1 */}
								<MDBInput
									name='skill1'
									label='Skill 1'
									id='skill1'
									type='text'
									value={pet && pet.skill1}
									onChange={(e) => setPet({ ...pet, skill1: e.target.value })}
								/>
								<div className='mb-2' style={{ minHeight: '22px' }}>
									{valErrors && valErrors.skill1 && (
										<small className='text-danger text-end d-block me-1 fst-italic'>
											{valErrors.skill1.message}*
										</small>
									)}
								</div>
								{/* Pet Skill 2 */}
								<MDBInput
									name='skill2'
									label='Skill 2'
									id='skill2'
									type='text'
									value={pet && pet.skill2}
									onChange={(e) => setPet({ ...pet, skill2: e.target.value })}
								/>
								<div className='mb-2' style={{ minHeight: '22px' }}>
									{valErrors && valErrors.skill2 && (
										<small className='text-danger text-end d-block me-1 fst-italic'>
											{valErrors.skill2.message}*
										</small>
									)}
								</div>
								{/* Pet Skill 3 */}
								<MDBInput
									name='skill3'
									label='Skill 3'
									id='skill3'
									type='text'
									value={pet && pet.skill3}
									onChange={(e) => setPet({ ...pet, skill3: e.target.value })}
								/>
								<div className='mb-2' style={{ minHeight: '22px' }}>
									{valErrors && valErrors.skill3 && (
										<small className='text-danger text-end d-block me-1 fst-italic'>
											{valErrors.skill3.message}*
										</small>
									)}
								</div>
							</div>
							<div className='col-12 my-0'>
								<hr className='mt-1 mb-3' />
								<MDBBtn color='primary' type='submit' className='float-end px-5' disabled={loading}>
									<MDBIcon far icon='save' size='lg' className='me-3' /> Save
								</MDBBtn>
							</div>
						</div>
					</form>
				</MDBCardBody>
			</MDBCard>
		</React.Fragment>
	);
};

export default EditPet;
