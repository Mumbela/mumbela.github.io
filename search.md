---
layout: default
title: Search
permalink: /search/
---

<div class="search-container">
  <input 
    type="text" 
    id="search-input" 
    placeholder="Search posts by title, content, tags, categories..." 
    class="search-box"
  />
  <button id="clear-search" class="search-clear" style="display:none;">Clear</button>
</div>

<div id="search-results" class="search-results">
  <p id="search-prompt">Enter a search term to find posts.</p>
</div>

<script>
  let postsData = [];

  // Fetch and parse the search index
  fetch('{{ "/assets/search.json" | relative_url }}')
    .then(response => response.json())
    .then(data => {
      postsData = data;
    })
    .catch(error => console.error('Error loading search index:', error));

  const searchInput = document.getElementById('search-input');
  const clearButton = document.getElementById('clear-search');
  const resultsDiv = document.getElementById('search-results');
  const promptDiv = document.getElementById('search-prompt');

  // Perform search on input
  searchInput.addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();
    clearButton.style.display = query ? 'inline-block' : 'none';

    if (query.length === 0) {
      resultsDiv.innerHTML = '<p id="search-prompt">Enter a search term to find posts.</p>';
      return;
    }

    if (query.length < 2) {
      resultsDiv.innerHTML = '<p>Type at least 2 characters to search.</p>';
      return;
    }

    const results = postsData.filter(post => {
      const title = (post.title || '').toLowerCase();
      const content = (post.content || '').toLowerCase();
      const excerpt = (post.excerpt || '').toLowerCase();
      const tags = (post.tags || []).join(' ').toLowerCase();
      const categories = (post.categories || []).join(' ').toLowerCase();

      return (
        title.includes(query) ||
        content.includes(query) ||
        excerpt.includes(query) ||
        tags.includes(query) ||
        categories.includes(query)
      );
    });

    if (results.length === 0) {
      resultsDiv.innerHTML = '<p>No posts found. Try a different search term.</p>';
      return;
    }

    const html = results
      .map(post => `
        <div class="search-result">
          <h3><a href="{{ site.baseurl }}${post.url}">${escapeHtml(post.title)}</a></h3>
          <p class="result-meta">${post.date}</p>
          <p class="result-excerpt">${escapeHtml(post.excerpt.substring(0, 150))}...</p>
          <div class="result-tags">
            ${post.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
          </div>
        </div>
      `)
      .join('');

    resultsDiv.innerHTML = `<p>${results.length} result${results.length !== 1 ? 's' : ''} found</p>${html}`;
  });

  // Clear search
  clearButton.addEventListener('click', function() {
    searchInput.value = '';
    clearButton.style.display = 'none';
    resultsDiv.innerHTML = '<p id="search-prompt">Enter a search term to find posts.</p>';
    searchInput.focus();
  });

  // Helper function to escape HTML
  function escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }
</script>

<style>
  .search-container {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  .search-box {
    flex: 1;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .search-box:focus {
    outline: none;
    border-color: #333;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  }

  .search-clear {
    padding: 0.5rem 1rem;
    background: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }

  .search-clear:hover {
    background: #e0e0e0;
  }

  .search-results {
    margin-top: 1rem;
  }

  .search-result {
    border: 1px solid #eee;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 4px;
  }

  .search-result h3 {
    margin: 0 0 0.5rem 0;
  }

  .search-result h3 a {
    text-decoration: none;
    color: #0066cc;
  }

  .search-result h3 a:hover {
    text-decoration: underline;
  }

  .result-meta {
    margin: 0 0 0.5rem 0;
    color: #666;
    font-size: 0.9rem;
  }

  .result-excerpt {
    margin: 0 0 0.5rem 0;
    line-height: 1.5;
  }

  .result-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .tag {
    display: inline-block;
    background: #f0f0f0;
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
    font-size: 0.85rem;
    color: #666;
  }
</style>
