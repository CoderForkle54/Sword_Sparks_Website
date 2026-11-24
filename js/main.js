   // Sets the date and year text content dynamically
      document.getElementById("year").textContent = new Date().getFullYear();
      const now = new Date();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const year = now.getFullYear();
      document.getElementById("Date").textContent = `${month}/${day}/${year}`;
      // Toggles the display of extra content and updates the link text accordingly
      document.getElementById("toggle-link").addEventListener("click", function(e) {
      e.preventDefault();
      const extra = document.getElementById("extra-content");
      const link = document.getElementById("toggle-link");
      if (extra.style.display === "block") {
        extra.style.display = "none";
        link.textContent = "Click More";
      } else {
        extra.style.display = "block";
        link.textContent = "Click Less";
        }
      });    
      // Adds click event listeners to documentation cards to toggle their expanded state
      document.querySelectorAll('.doc-card').forEach(card => {
        card.addEventListener('click', () => {
          const body = card.querySelector('.doc-card-body');
          const isExpanded = body.getAttribute('aria-expanded') === 'true';
          body.setAttribute('aria-expanded', !isExpanded);
        });
      });    