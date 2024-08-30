
function repeatText(text, repetitions) {
  const paragraphs = document.querySelectorAll('p');

  for (let i = 0; i < repetitions; i++) {
    paragraphs.forEach(paragraph => {
      paragraph.textContent += text;
    });
  }
}

function createLinksToTheTop() {
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const link = document.createElement('a');
    link.classList.add('backToTop', 'pull-right');
    link.textContent = 'Back to top';
    link.href = '#h1';
    section.appendChild(link);
  });
}

  repeatText('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
      5);
  createLinksToTheTop();