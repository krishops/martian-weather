import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AsteroidData from './martian-weather.js';

$(document).ready(function () {
  $('form#asteroidData').submit(function () {
    event.preventDefault();
    let startDate = $('#startDate').val();
    let endDate = $('#endDate').val();

    AsteroidData.getAsteroidData(startDate, endDate)
      .then(function (response) {
        getElements(response);
      });
  });
});

function getElements(response) {
  
  if (response.near_earth_objects) {
    let endDate = $('#endDate').val();
    $('.distK').text(`The distance is ${response.near_earth_objects[endDate][0].close_approach_data[0].miss_distance.kilometers} kilometers away`);
  } else {
    $('.showError').text(`This is an error: ${response.message}`);
  }
}

// $(document).ready(function()  {
//   $('form#asteroidData').submit(function()  {
//     event.preventDefault();
//     let startDate = $('#startDate').val();
//     let endDate = $('#endDate').val();

//     let request = new XMLHttpRequest();
//     const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.API_KEY}`;
//     console.log(url)

//     request.onreadystatechange = function() {
//       if (this.readyState === 4 && this.status === 200) {
//         const response = JSON.parse(this.responseText);
//         getElements(response)
//       }
//     };
//     request.open("GET", url, true);
//     request.send();

//     function getElements(response)  {
//       // const newReponse = response.near_earth_objects + ${endDate}
//       $('.distK').text("The distance is " + response.near_earth_objects[endDate][0].close_approach_data[0].miss_distance.kilometers + " kilometers away");
//       console.log(response)
//     }
//   });
// });


// ////////////////////////



// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
// import MarsWeather from './martian-weather.js';


// // function getElements(response)  {
// //   if (response.soles) {
// //     $('.sol').text(`<p>${response.soles}</p>`);
// //   } else {
// //     $('.showErrors').text(`Error: ${response.message}`); 
// //   }
// //   console.log("This is an error" + response.message);
// // }


// $(document).ready(function() {
//   $('form#marsData').submit(function(event) {
//     event.preventDefault()
//   let promise1 = MarsWeather.getAPOD();
//   promise1.then(function(response) {
//     const body = JSON.parse(response);
//     $('.mars1').text(`Here is your bla bla bla ${body.soles["0"].min_temp}`);
//   }
//   , function(error) {
//     $('.showErrors').text('KRISTEN DONE FUCKED UP');
//     console.log(error);
//   });
// });
// })








//   $('form#marsData').submit(function(event) {
//     event.preventDefault()
//     MarsWeather.getMarsWeather()
//       .then(function(response)  {
//         getElements(response);

//       });

//   });
// });