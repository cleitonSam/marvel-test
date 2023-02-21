const PATH = 'http://gateway.marvel.com/v1/public/characters';
const PATH_CHARACTERS = `${PATH}?limit=50&offset=0&ts=1000&apikey=4991f6b67c071092dbe67b36faae5681&hash=f0de242ee98d75c3990f9ec4147faf73`;

const GM_KEY = '?ts=1000&apikey=4991f6b67c071092dbe67b36faae5681&hash=f0de242ee98d75c3990f9ec4147faf73';

export const environment = {
  production: true,
  PATH,
  PATH_CHARACTERS,
  GM_KEY,
};
