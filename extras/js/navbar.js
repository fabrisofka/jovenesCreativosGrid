// Use fetch to include the navbar
fetch('/extras/compartido/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });