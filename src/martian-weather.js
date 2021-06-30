export default class AsteroidData {
  static getAsteroidData(startDate, endDate) {
    return fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.API_KEY}`)
      .then(function (response) {
        
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
