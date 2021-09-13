import './App.css';
// components
import Users from './components/Users';
import Footer from './components/Footer';
import Events from './components/Events';

// you can't import calendar image like they say in tutorial
import calendarImg from './calendar.png';

function App() {
  return (
    <div className='App'>
      <header>
        <img src={calendarImg} alt='Calendar Star Logo' />
        <h1>Eventonica</h1>
      </header>

      <Users />

      <main>
        <div className='user-and-events'></div>
        <Events />
        <div>
          <h3>Delete Event</h3>
          <form id='delete-event' action='#'>
            <fieldset>
              <label>Event ID</label>
              <input type='number' min='1' id='delete-event-id' />
            </fieldset>
            <input type='submit' />
          </form>
        </div>

        <aside className='search-toolbar'>
          <div>
            <h3>Find Events</h3>
            <form id='search' action='#'>
              <fieldset>
                <label htmlFor='date-search'>Date</label>
                <input type='text' id='date-search' placeholder='YYYY-MM-DD' />
              </fieldset>
              <fieldset>
                <label htmlFor='category-search'>Category</label>
                <input type='text' id='category-search' />
              </fieldset>

              <input type='submit' value='Search' />
            </form>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
}

export default App;
