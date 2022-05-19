import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBIcon } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Index = () => {
	const [pets, setPets] = useState([]);
	const [loading, setLoading] = useState(true);

	// Use navigate to navigate to the new page
	const navigate = useNavigate();

	// Get all pets from the database
	useEffect(() => {
		axios
			.get('http://localhost:8000/api/pets')
			.then((response) => {
				setPets(response.data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<React.Fragment>
			<h2 className='mb-3'>These pets are looking for a good home</h2>
			<hr />
			{loading ? (
				<div className='text-center'>
					<div className='spinner-border text-primary' role='status'>
						<span className='sr-only'>Loading...</span>
					</div>
				</div>
			) : (
				<MDBTable small>
					<MDBTableHead dark>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>Name</th>
							<th scope='col'>Type</th>
							<th scope='col'>Actions</th>
						</tr>
					</MDBTableHead>
					<MDBTableBody>
						{
							// Show the pets list order by type
							pets
								.sort((a, b) => a.type.localeCompare(b.type))
								.map((pet, index) => (
									<tr key={index}>
										<th scope='row'>{index + 1}</th>
										<td>{pet.name}</td>
										<td>{pet.type}</td>
										<td>
											<button
												className='btn btn-primary shadow-1 me-2'
												onClick={() => navigate(`/pet/${pet._id}/view`)}>
												<MDBIcon fas icon="eye" size='lg' />
											</button>
											<button
												className='btn btn-secondary shadow-1'
												onClick={() => navigate(`/pet/${pet._id}/edit`)}>
												<MDBIcon far icon="edit" size='lg' />
											</button>
										</td>
									</tr>
								))
						}
					</MDBTableBody>
				</MDBTable>
			)}
		</React.Fragment>
	);
};

export default Index;
