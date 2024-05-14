const API_URL = 'https://66437a136c6a656587073db5.mockapi.io/api/v1/Animal';

document.addEventListener('DOMContentLoaded', () => {
    fetchAnimals();

    document.getElementById('add-animal').addEventListener('click', () => {
        addAnimal();
    });
});

function fetchAnimals() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const animalList = document.getElementById('animal-list');
            animalList.innerHTML = '';
            data.forEach(animal => {
                const listItem = document.createElement('li');
                listItem.textContent = `${animal.id} - ${animal.Nome} (${animal.Idade} anos) – ${animal.Raca}`;
                animalList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erro ao buscar animais:', error));
}

function addAnimal() {
    const newAnimal = {
        Nome: 'Totó',
        Idade: 12,
        Raca: 'Cachorro'
    };

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAnimal)
    })
    .then(response => response.json())
    .then(() => {
        fetchAnimals();
    })
    .catch(error => console.error('Erro ao adicionar animal:', error));
}