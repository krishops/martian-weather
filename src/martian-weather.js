export default class AsteroidData {
  static getAsteroidData(startDate, endDate) {
    return fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.API_KEY}`)
      .then(function (response) {
        console.log(response);
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
        
      });
      
  }
}


//   static getAPOD() {
//     return new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       const url = `http://cab.inta-csic.es/rems/wp-content/plugins/marsweather-widget/api.php`;
//       request.onload =function() {
//         if (this.status === 200) {
//           resolve(request.response);          
//         } else {
//           reject(request.response);
//         }
//       };
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
// }
