import React from 'react'
import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import {
	MDBCard,
	MDBCardBody,
	MDBCardHeader,
	MDBInput,
	MDBTextArea,
	MDBBtn,
	MDBIcon,
} from 'mdb-react-ui-kit';

const ViewPet = () => {
  const [ pet, setPet ] = useState( '' );
  const [ loading, setLoading ] = useState( false );
  
  // use navigate to redirect to index page
  const navigate = useNavigate();
  // use params to get the pet id from the url
  const { id } = useParams();

  useEffect( () => {
    // get the pet from the database
    axios
      .get( `http://localhost:8000/api/pet/${id}` )
      .then( ( response ) => {
        setPet( response.data );
      } )
      .catch( ( err ) => {
        console.log( err );
      } );
  }, [ id ] );

  // handle delete event
  const handleDelete = () => {
    setLoading( true );
    // delete the pet from the database
    axios
      .delete( `http://localhost:8000/api/pet/${id}` )
      .then( ( response ) => {
        navigate( '/' );
      } )
      .catch( ( err ) => {
        setLoading( false );
        console.log( err );
      } );
  };

  // handle like event
  const handleLike = () => {
    setLoading( true );
    // like the pet
    axios
      .put( `http://localhost:8000/api/pet/${id}/like` )
      .then( ( response ) => {
        setPet( response.data );
        setTimeout( () => {
          setLoading( false );
        }, 1000 );

      } )
      .catch( ( err ) => {
        setLoading( false );
        console.log( err );
      } );
  };


  return (
		<React.Fragment>
			<h2>Details about {pet.name}</h2>
			<hr />
			<MDBCard className='col-6 mx-auto mt-3 shadow-3'>
				<MDBCardHeader>
					<h3 className='float-start iten-align-baseline'>{pet.name}</h3>
					<MDBBtn color='danger' className='float-end shadow-2' onClick={handleDelete}>
						<MDBIcon fas icon='home' className='me-2' />
						Adopt {pet.name}
						<MDBIcon fas icon='dog' size='lg' className='ms-2' />
					</MDBBtn>
				</MDBCardHeader>
				<MDBCardBody>
					<div className='row'>
						<div className='row col-12'>
							<div className='col-3 mb-3'>
								<b>Pet type:</b>
							</div>
							<div className='col-8'>{pet.type}</div>
						</div>
						<div className='row col-12'>
							<div className='col-3 mb-3'>
								<b>Pet Description:</b>
							</div>
							<div className='col-8'>{pet.description}</div>
						</div>
						<div className='row col-12'>
							<div className='col-3 mb-3'>
								<b>Pet Skills:</b>
							</div>
							<div className='col-8'>
								{pet.skill1} <br /> {pet.skill2}
								<br /> {pet.skill3}
							</div>
						</div>
						<div className='col-12'>
							<MDBBtn
								color='success'
								className='float-end shadow-2'
								onClick={handleLike}
								disabled={loading}>
								<MDBIcon fas icon='heart' className='me-2' />
								Like {pet.name}
								<MDBIcon fas icon='dog' size='lg' className='ms-2' />
								<span className='badge badge-light ms-2'>{pet.likes}</span>
							</MDBBtn>
						</div>
					</div>
				</MDBCardBody>
			</MDBCard>
		</React.Fragment>
	);
}

export default ViewPet