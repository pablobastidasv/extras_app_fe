function getUserById(id) {
 return fetch('/posibleEndpoint', {id})
   .then((response) => response.json())
   .catch((error) => {
     console.error(error);
   });
}
export default getUserById