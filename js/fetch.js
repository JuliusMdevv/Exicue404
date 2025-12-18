fetch('../data/info.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').textContent = data.earlyaccess;
    })
    .catch(error => {
        console.error('Error fetching the JSON data:', error);
    });