const BASE_URL = 'https://newsapi.org/v2';

const getTopHeadlinesUS = () => {
  return fetch (BASE_URL + '/top-headlines?country=us&apiKey=1e6f0fc53c7a4b9f9999efabbd374789')
    .then((response) => {
      if(!response.ok) {
        if (response.status >= 400 && response.status < 500) {
          throw new Error('Bad news! We cannot find what you are looking for. Please try again later.');
        } else if (response.status >= 500) {
          throw new Error('Bad news! Our sources seem to have gone offline. Please try again later.');
        } else {
          throw new Error(`Bad news! Unexpected error. Status: ${response.status}`);
        }
      }
      return response.json();
    })
}

export default getTopHeadlinesUS;
