const input = document.querySelector('input');
const btn = document.querySelector('button');
const list = document.querySelector('.notes-list'); // Meesha ay note-yadu galayaan

btn.onclick = () => {
    if (input.value.trim() === "") return; // Haddii uu madan yahay waxba ha samayn

    // 1. Abuur Note-ka
    const note = document.createElement('div');
    note.className = 'note-item'; // Midabkaaga gaduudka ah halkan ayuu ka imaanayaa
    
    // 2. Qoraalka qofka (Kaliya hal mar ku dar)
    note.innerHTML = `
        <span>${input.value}</span>
        <button class="delete-btn">X</button>
    `;

    // 3. Shaqada tirtirista (Kaliya kan la riixay ayay tirtiraysaa)
    note.querySelector('.delete-btn').onclick = () => {
        note.remove();
    };

    // 4. Ku dar liiska (Keliya midka cusub ku dar, kuwa kale ha taaban)
    list.appendChild(note);

    // 5. Nadiifi sanduuqa qoraalka
    input.value = "";
};
