function fetchPosts() {
    const input = document.getElementById('postIdInput');
    const postsContainer = document.getElementById('postsContainer');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const maxId = parseInt(input.value);
  
    if (isNaN(maxId) || maxId < 1) {
      alert("Please enter a valid ID number (1 or more).");
      return;
    }
  
    loadingIndicator.style.display = "block";
    postsContainer.innerHTML = "";
  
    const query = Array.from({ length: maxId }, (_, i) => `id=${i + 1}`).join('&'); 
    const url = `https://jsonplaceholder.typicode.com/posts?${query}`;
  
    fetch(url)
      .then(response => response.json())
      .then(posts => {
        loadingIndicator.style.display = "none";
  
        if (posts.length === 0) {
          postsContainer.innerHTML = "<p>No posts found.</p>";
          return;
        }
  
        postsContainer.innerHTML = "";
        posts.forEach(post => {
          postsContainer.innerHTML += `
            <div class="post">
              <h2>Title: ${post.title}</h2>
              <p><strong>ID:</strong> ${post.id}</p>
              <p><strong>User ID:</strong> ${post.userId}</p>
              <p><strong>Body:</strong> ${post.body}</p>
            </div>
          `;
        });
      })
      .catch(error => {
        loadingIndicator.style.display = "none"; 
        postsContainer.innerHTML = "<p>Error loading data.</p>";
        console.error(error);
      });
  }
  