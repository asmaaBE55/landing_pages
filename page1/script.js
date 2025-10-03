const portfolio = document.getElementById('portfolio');

// Funzione per creare una nuova card con immagine
function creaCard(imgSrc) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <button class="delete-btn">&times;</button>
        <img src="${imgSrc}" alt="Nuovo Progetto">
        <div class="card-content">
            <h3 contenteditable="true">Titolo Progetto</h3>
            <p contenteditable="true">Descrizione breve. Puoi modificare questo testo.</p>
        </div>
    `;

    // Evento per eliminare la card
    const deleteBtn = card.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        card.remove();
    });

    portfolio.appendChild(card);
}

// Drag & Drop
portfolio.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
});

portfolio.addEventListener('drop', (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;

    for (let file of files) {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (event) => {
                creaCard(event.target.result);
            };
            reader.readAsDataURL(file);
        }
    }
});