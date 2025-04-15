document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.sidebar nav a');
  const contentContainer = document.querySelector('.content');

  // Function to load content based on the selected link
  function loadContent(contentId) {
    switch (contentId) {
      case 'home':
        contentContainer.innerHTML = '<h2>Home</h2><p>Welcome to your home section!</p>';
        break;
      case 'personal-info':
        contentContainer.innerHTML = '<h2>Personal Info</h2><p>This is your personal information section.</p><br><p>nom et prénom:mohamed khelifi Email:mohamed@ismai_u.kairouan.tn <br> Phone +216-21212121<br> Address: 123 Rue de kairouan 7500 droite, tunis</p>';
        break;
      case 'data':
        contentContainer.innerHTML = '<h2>Data</h2><p>This is your data section.</p>';
        break;
      case 'history':
        contentContainer.innerHTML = '<h2>History</h2><p>This is your history section.</p>';
        break;
      case 'share':
        contentContainer.innerHTML = '<h2>Share</h2><p>This is your share section.</p>';
        break;
      case 'global-info':
        contentContainer.innerHTML = '<h2>Global Info</h2><p>This is your global information section.</p>';
        break;
      default:
        contentContainer.innerHTML = '';
    }
  }

  // Add click event listeners to each link
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const contentId = link.getAttribute('data-content');
      loadContent(contentId);
    });
  });

  // Load default content when the page loads
  loadContent('home');
});
