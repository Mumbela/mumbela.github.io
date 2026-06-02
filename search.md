---
layout: default
title: Search
permalink: /search/
---

<section class="py-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="card shadow-sm border-0 mb-4">
          <div class="card-body p-4">
            <h1 class="card-title">Search the site</h1>
            <p class="card-text text-muted">Search posts by title, content, tags, categories, and authors.</p>
            <form id="search-form" class="row g-2 align-items-center mt-3">
              <div class="col-md-9">
                <input
                  type="text"
                  id="search-input"
                  placeholder="Type a keyword…"
                  class="form-control form-control-lg"
                  autocomplete="off"
                />
              </div>
              <div class="col-md-3 d-grid">
                <button type="button" id="clear-search" class="btn btn-outline-secondary btn-lg" style="display:none;">Clear</button>
              </div>
            </form>
          </div>
        </div>

        <div id="search-results" class="search-results"></div>
      </div>
    </div>
  </div>
</section>

<script>
  let postsData = [];

  fetch('{{ "/assets/search.json" | relative_url }}')
    .then(response => response.json())
    .then(data => {
      postsData = data;
    })
    .catch(error => console.error('Error loading search index:', error));

  const searchInput = document.getElementById('search-input');
  const clearButton = document.getElementById('clear-search');
  const resultsDiv = document.getElementById('search-results');

  function renderMessage(message, type = 'muted') {
    resultsDiv.innerHTML = `<div class="alert alert-${type}">${escapeHtml(message)}</div>`;
  }

  function renderResults(results) {
    if (!results || results.length === 0) {
      renderMessage('No posts found. Try a different search term.', 'warning');
      return;
    }

    const html = results.map(post => {
      const tags = (post.tags || []).map(tag => `<span class="badge bg-secondary me-1 mb-1">${escapeHtml(tag)}</span>`).join('');
      return `
        <div class="col-12">
          <div class="card shadow-sm border-0 mb-3">
            <div class="card-body">
              <h3 class="h5 card-title mb-2"><a href="${post.url}" class="text-decoration-none text-dark">${escapeHtml(post.title)}</a></h3>
              <p class="text-muted mb-2">${escapeHtml(post.date)}</p>
              <p class="card-text text-muted mb-3">${escapeHtml((post.excerpt || '').substring(0, 140))}...</p>
              <div>${tags}</div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    resultsDiv.innerHTML = `
      <div class="mb-4">
        <p class="mb-0"><strong>${results.length}</strong> result${results.length !== 1 ? 's' : ''} found</p>
      </div>
      <div class="row g-3">${html}</div>
    `;
  }

  function searchPosts(query) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      renderMessage('Enter a search term to find posts.');
      return;
    }

    if (normalized.length < 2) {
      renderMessage('Type at least 2 characters to search.', 'info');
      return;
    }

    const results = postsData.filter(post => {
      const title = (post.title || '').toLowerCase();
      const content = (post.content || '').toLowerCase();
      const excerpt = (post.excerpt || '').toLowerCase();
      const tags = (post.tags || []).join(' ').toLowerCase();
      const categories = (post.categories || []).join(' ').toLowerCase();
      const author = (post.author || '').toLowerCase();

      return [title, content, excerpt, tags, categories, author].some(field => field.includes(normalized));
    });

    renderResults(results);
  }

  searchInput.addEventListener('input', function() {
    const query = this.value;
    clearButton.style.display = query ? 'block' : 'none';
    searchPosts(query);
  });

  clearButton.addEventListener('click', function() {
    searchInput.value = '';
    clearButton.style.display = 'none';
    renderMessage('Enter a search term to find posts.');
    searchInput.focus();
  });

  renderMessage('Enter a search term to find posts.');

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
</script>
