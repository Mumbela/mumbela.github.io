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
  let searchData = [];

  fetch('{{ "/assets/search.json" | relative_url }}')
    .then(response => response.json())
    .then(data => {
      searchData = data;
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
      renderMessage('No results found. Try a different search term.', 'warning');
      return;
    }

    const html = results.map(item => {
      const tags = (item.tags || []).map(tag => `<span class="badge bg-secondary me-1 mb-1">${escapeHtml(tag)}</span>`).join('');
      const categories = (item.categories || []).map(category => `<span class="badge bg-light text-dark border me-1 mb-1">${escapeHtml(category)}</span>`).join('');
      const meta = [item.date, item.author_name, item.author_position].filter(Boolean).map(escapeHtml).join(' &bull; ');
      const label = escapeHtml(item.type || 'result');
      const excerpt = escapeHtml((item.excerpt || item.content || '').substring(0, 160));
      return `
        <div class="col-12">
          <div class="card shadow-sm border-0 mb-3">
            <div class="card-body">
              <span class="badge bg-primary-subtle text-primary-emphasis text-capitalize mb-2">${label}</span>
              <h3 class="h5 card-title mb-2"><a href="${item.url}" class="text-decoration-none text-dark">${escapeHtml(item.title)}</a></h3>
              ${meta ? `<p class="text-muted mb-2">${meta}</p>` : ''}
              <p class="card-text text-muted mb-3">${excerpt}${excerpt.length >= 160 ? '...' : ''}</p>
              <div>${tags}${categories}</div>
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

  function searchSite(query) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      renderMessage('Enter a search term to find site content.');
      return;
    }

    if (normalized.length < 2) {
      renderMessage('Type at least 2 characters to search.', 'info');
      return;
    }

    const results = searchData.filter(item => {
      const title = (item.title || '').toLowerCase();
      const content = (item.content || '').toLowerCase();
      const excerpt = (item.excerpt || '').toLowerCase();
      const tags = (item.tags || []).join(' ').toLowerCase();
      const categories = (item.categories || []).join(' ').toLowerCase();
      const author = (item.author || '').toLowerCase();
      const authorName = (item.author_name || '').toLowerCase();
      const authorPosition = (item.author_position || '').toLowerCase();
      const relatedPosts = (item.related_posts || []).join(' ').toLowerCase();
      const type = (item.type || '').toLowerCase();

      return [title, content, excerpt, tags, categories, author, authorName, authorPosition, relatedPosts, type].some(field => field.includes(normalized));
    });

    renderResults(results);
  }

  searchInput.addEventListener('input', function() {
    const query = this.value;
    clearButton.style.display = query ? 'block' : 'none';
    searchSite(query);
  });

  clearButton.addEventListener('click', function() {
    searchInput.value = '';
    clearButton.style.display = 'none';
    renderMessage('Enter a search term to find site content.');
    searchInput.focus();
  });

  renderMessage('Enter a search term to find site content.');

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
</script>
