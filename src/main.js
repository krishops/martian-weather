import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AsteroidData from './martian-weather.js';


function getElements(response)  {
  if (response.name) {
    $('.distK').text(`<p>The distance of ${response.name} is ${response.name.miss_distance.kilometers} Kilometers from Earth</p>`);
  } else {
    $('.showErrors').text(`Error: ${response.message}`); 
  }
  console.log("This is an error" + response.message);
}


$(document).ready(function() {
  $('form#asteroidData').submit(function(event) {
    event.preventDefault()
    let startDate = $('#startDate').val("");
    let endDate = $('#endDate').val("");
    AsteroidData.getAsteroidData(startDate, endDate)
      .then(function(response)  {
        getElements(response);
        
      });
      
  });
});