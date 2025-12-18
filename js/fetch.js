fetch('../data/info.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').textContent = document.getElementById('output').textContent.replace("Loading...", data.earlyaccess);
    })
    .catch(error => {
        console.error('Error fetching the JSON data:', error);
    });