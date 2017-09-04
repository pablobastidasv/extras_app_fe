export const getSearch = (data) => {
return fetch('http://localhost:4567/search', {  
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    ...data
  })
})
}
