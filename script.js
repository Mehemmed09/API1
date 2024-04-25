 async function fetchCardData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            let area = document.getElementById('card-area');
            let card = document.createElement('div');
            card.classList.add('card');
            
            let title = document.createElement('h2');
            title.textContent = data.title; 
            let body = document.createElement('p');
            body.textContent = data.body; 

            card.appendChild(title);
            card.appendChild(body);
            area.appendChild(card);
        })
      
}


document.addEventListener('DOMContentLoaded', fetchCardData);
