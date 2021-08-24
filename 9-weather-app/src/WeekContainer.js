import React from 'react';
import Card from './Card';
import DegreeToggle from './DegreeToggle';

class WeekContainer extends React.Component {
  state = {
    days: [],
    location: 'zip=10302',
    country: 'us',
    degreeType: 'imperial',
  };

  componentDidMount = () => {
    const weatherURL =
      'http://api.openweathermap.org/data/2.5/forecast?${this.state.location},${this.state.country}&units=${this.state.degreeType}&APPID=$81eaae9c9ea6f28f239fe73eebafd259';
    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        console.log('Data List Loaded', data.list);
        // this is filtering nothing, so it's throwing an error
        const dailyData = data.list.filter((reading) =>
          reading.dt_txt.includes('18:00:00')
        );
        this.setState({ days: dailyData });
      });
  };

  formatCards = () => {
    return this.state.days.map((day, index) => <Card day={day} key={index} />);
  };

  // update degree type - get rid of *******************************************************
  updateForecastDegree = (newDegreeType) => {
    this.setState(
      {
        degreeType: newDegreeType,
      },
      this.sendNewFetch
    );
  };

  sendNewFetch = () => {
    const weatherURL =
      'http://api.openweathermap.org/data/2.5/forecast?${this.state.location},${this.state.country}&units=${this.state.degreeType}&APPID=$81eaae9c9ea6f28f239fe73eebafd259';
    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        console.log('Data List Loaded', data.list);
        const dailyData = data.list.filter((reading) =>
          reading.dt_txt.includes('18:00:00')
        );
        this.setState({ days: dailyData });
      });
  };
  /* Get rid of this section ****************************************************************/

  render() {
    return (
      <div className='container'>
        <h1 className='display-1 jumbotron'>5-Day Forecast.</h1>
        <DegreeToggle
          degreeType={this.state.degreeType}
          updateForecastDegree={this.updateForecastDegree}
        />
        <h5 className='display-5 text-muted'>New York, US</h5>
        <div className='row justify-content-center'>{this.formatCards()}</div>
      </div>
    );
  }
}

export default WeekContainer;
