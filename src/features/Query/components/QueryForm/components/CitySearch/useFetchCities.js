import flightsData from '../../../../../../flights.json';

/**
 * createAirportList - Creates uniq list by airport code
 * returns - {array} - airport list
 */
const createAirportList = () => {
  const seen = {};
  const list = [];

  for(const item of flightsData.flights){
    const airportInOrigin = item.originAirport;
    const airportInDestination = item.destinationAirport;
    
    if(airportInOrigin.code in seen){
      continue;
    }else{
      list.push(airportInOrigin);
    }

    if(airportInDestination.code in seen){
      continue;
    }else{
      list.push(airportInDestination)
    }

    seen[airportInOrigin.code] = airportInOrigin;
    seen[airportInDestination.code] = airportInOrigin;
  }

  return list;
}

const useFetchCities = () => {
    async function fetchCityList(city) {
        if (city.length <= 1) return [];
        const cityList = createAirportList().map(i => ({label: i.name, value: i.code}));

        return new Promise((resolve, reject) => {
            setTimeout(() => {
              const filtredList = cityList.filter(c => 
                c.value.toLocaleLowerCase().includes(city.toLocaleLowerCase())
                || c.label.toLocaleLowerCase().includes(city.toLocaleLowerCase()));
              if (filtredList.length > 0) {
                resolve(filtredList);
              } else {
                reject('City not found!');
              }
            }, 200);
          });
    }

    return fetchCityList;
}

export default useFetchCities;