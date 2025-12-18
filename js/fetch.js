fetch('../../data/info.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').textContent = data.earlyaccess;
        })
        .catch(err => {
            console.error(err);
        });