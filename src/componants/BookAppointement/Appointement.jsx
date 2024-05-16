import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Appointment = () => {
  const { id } = useParams();
  const [personDetails, setPersonDetails] = useState(null);

  useEffect(() => {
    const fetchPersonDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/appointement_data/${id}`); // Assuming you have an API endpoint to fetch person details by ID
        const result = await response.json();
        setPersonDetails(result);
      } catch (error) {
        console.error('Error fetching person details:', error);
      }
    };

    fetchPersonDetails();
  }, [id]);

  if (!personDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{personDetails.name}</h1>
      <p>{personDetails.short_description}</p>
      <p>{personDetails.speciality}</p>
      <p>{personDetails.experience}</p>
      <p>{personDetails.fees}</p>
      <p>{personDetails.full_description}</p>
      <p>{personDetails.education}</p>
      
    </div>
  );
};

export default Appointment;
