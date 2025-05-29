const buttons = document.querySelectorAll('.slider-button');
const dropdown = document.getElementById('difficultyDropdown');
const selected = dropdown.querySelector('.select-selected');
const items = dropdown.querySelector('.select-items');
const hiddenInput = document.getElementById('difficultyInput');

// Toggle dropdown open/close
selected.addEventListener('click', () => {
  items.classList.toggle('select-hide');
});

// Select option and update hidden input + displayed text
items.querySelectorAll('div').forEach(option => {
option.addEventListener('click', (e) => {
  e.stopPropagation();  // Prevent bubbling that might reopen dropdown
  selected.textContent = option.textContent;
  selected.dataset.value = option.dataset.value;
  hiddenInput.value = option.dataset.value;
  items.classList.add('select-hide');
});
});

// Close dropdown if clicking outside
document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    items.classList.add('select-hide');
  }
});

// Optional: close dropdown with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    items.classList.add('select-hide');
  }
});

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

function goToPage(pageNumber) {
      const slider = document.getElementById('slider');
      slider.style.transform = `translateX(-${pageNumber * 100}vw)`;
    }