import { getSearch } from './searches'

export const getUserById = (id) => {
 return fetch('/posibleEndpoint', {id})
   .then((response) => response.json())
   .catch((error) => {
     console.error(error);
   });
}



export const getSearchResults = (data) => {
	return Promise.resolve(getSearch())

}