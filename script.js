document.getElementById('cardForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const message = document.getElementById('message').value;
    const fontSize = document.getElementById('fontSize').value + 'px';
    const textColor = document.getElementById('textColor').value;
    const bgColor = document.getElementById('bgColor').value;
    const imageUrl = document.getElementById('imageUrl').value;
  
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = `
      <div class="card" style="background-color: ${bgColor};">
        <img src="${imageUrl}" alt="Carte de Vœux">
        <p style="font-size: ${fontSize}; color: ${textColor};">${message}</p>
      </div>
    `;
  });