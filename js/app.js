const pokestopModal = () => {
  const pokestopModal = document.getElementById('pokestop');
  if (pokestopModal.style.display === 'block') {
    pokestopModal.style.display = 'none';
  } else {
    pokestopModal.style.display = 'block';
  }
};
const recipebookModal = () => {
  const recipeModal = document.getElementById('recipebook');
  if (recipeModal.style.display === 'block') {
    recipeModal.style.display = 'none';
  } else {
    recipeModal.style.display = 'block';
  }
};
const foodsoModal = () => {
  const foodsoModal = document.getElementById('foodso');
  if (foodsoModal.style.display === 'block') {
    foodsoModal.style.display = 'none';
  } else {
    foodsoModal.style.display = 'block';
  }
};
const donutdashModal = () => {
  const donutdashModal = document.getElementById('donutdash');
  if (donutdashModal.style.display === 'block') {
    donutdashModal.style.display = 'none';
  } else {
    donutdashModal.style.display = 'block';
  }
};

const closeModal = () => {
  const donutdashModal = document.getElementById('donutdash');
  const foodsoModal = document.getElementById('foodso');
  const recipeModal = document.getElementById('recipebook');
  const pokestopModal = document.getElementById('pokestop');
  if (foodsoModal.style.display === 'block') {
    foodsoModal.style.display = 'none';
  }
  if (recipeModal.style.display === 'block') {
    recipeModal.style.display = 'none';
  }
  if (pokestopModal.style.display === 'block') {
    pokestopModal.style.display = 'none';
  }
  if (donutdashModal.style.display === 'block') {
    donutdashModal.style.display = 'none';
  }
};
