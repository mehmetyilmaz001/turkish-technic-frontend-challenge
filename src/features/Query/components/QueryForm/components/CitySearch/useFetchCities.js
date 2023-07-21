const cityList = [
    {
        value: 'AYT',
        label: 'Antalya'
    },
    {
        value: 'IST',
        label: 'Istanbul'
    }
];

const useFetchCities = () => {
    async function fetchCityList(city) {
        if (city.length <= 1) return [];

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
            }, 1000);
          });
    }

    return fetchCityList;
}

export default useFetchCities;