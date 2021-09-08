import React, { useState } from 'react';

function Events() {
  // sample events
  const event1 = {
    id: 1,
    name: 'Birthday',
    date: '2021-09-01',
    description: 'A birthday party for my best friend',
    category: 'Celebration',
  };

  const event2 = {
    id: 2,
    name: 'Graduation',
    date: '2021-08-01',
    description: 'The class of 2021 graduates from East High',
    category: 'Education',
  };

  const event3 = {
    id: 3,
    name: 'JS Study Session',
    date: '2021-10-01',
    description: 'A chance to practice Javascript interview questions',
    category: 'Education',
  };

  // State - I don't understand Reducer, so I'm using state :/
  const [events, setEvents] = useState([event1, event2, event3]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  // onClick method to setEvents
  const onSubmit = (e) => {
    e.preventDefault();
    const newEvent = { id, name, date, description, category };
    setEvents([...events, newEvent]);
  };

  return (
    <div>
      <section className='event-management'>
        <h2>Event Management</h2>
        <div>
          <h3>All Events</h3>
          <ul id='events-list'>
            {/* Display all Events here */}
            {/* How to map & print events */}
            {events.map((item, index) => {
              // can only be one item, remember to add key={index}
              return (
                <li key={index}>
                  {item.name}, {item.description}
                </li>
              );
            })}
            <li>...</li>
          </ul>

          <h3>Add Event</h3>
          <form id='add-event' action='#'>
            <fieldset>
              <label>Name</label>
              <input
                type='text'
                id='add-event-name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Virtual corgi meetup'
              />
              <label>Date</label>
              <input
                type='date'
                id='add-event-date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder='01/01/2022'
              />
              <label>Description</label>
              <input
                type='text'
                id='add-event-description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Event Description'
              />
              <label>Category</label>
              <input
                type='text'
                id='add-event-category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder='Event Category'
              />
            </fieldset>
            {/* Add more form fields here */}
            <input type='submit' value='Add' onClick={onSubmit} />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Events;
