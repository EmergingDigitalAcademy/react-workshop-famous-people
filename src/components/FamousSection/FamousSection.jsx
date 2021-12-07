import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FamousSection.css';

function FamousSection() {
  // TODO: Create two pieces of state to track the controlled form elements
  // First: personName (getter) and setPersonName (setter)
  // Second: personRole (getter) and setPersonRole (setter)

  // TODO: Create one pice of state to track the array of famous people
  // famousPeople and setFamousPeople

  // After mount, grab the list of people from the backend
  useEffect(() => {
    console.log('in useEffect')
    fetchPeople();
  }, []);

  // GET request
  const fetchPeople = async () => {
    const people = (await axios.get('/people')).data;
    console.log('this is the response from fetchPeople', people);

    // TODO: take the data from the response and assign it to the local state made earlier

  }

  const addPerson = async (evt) => {
    evt.preventDefault();
    console.log(`The person is ${personName} and they're famous for ${personRole}`);

    // TODO: create POST request to add this new person to the database
    // HINT: you will have to create a new object containing the famousPersonName 
    // and famousPersonRole values the keys should be 'name' and 'role'
    
  }

  return (
    <section className="new-person-section">
      <form onSubmit={addPerson}>
        <label htmlFor="name-input">Name:</label>
        <input id="name-input" onChange={e => setPersonName(e.target.value)} />
        <label htmlFor="role-input">Famous for:</label>
        <input id="role-input" onChange={e => setPersonRole(e.target.value)} />
        <button type="submit">Done</button>
      </form>
      <p>
        {personName} is famous for "{personRole}".
      </p>
      <ul>
        {famousPeople.map(p => <li>{p.name} is famous for {p.role}</li>)}
      </ul>
    </section>
  );
}

export default FamousSection;
