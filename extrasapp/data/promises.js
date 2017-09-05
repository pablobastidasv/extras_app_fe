export const getSearch = (data) => {
return fetch('http://130.211.174.2/search', {  
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
