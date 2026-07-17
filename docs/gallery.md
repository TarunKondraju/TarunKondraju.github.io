# Gallery

<div class="gallery-controls">
  <div class="filter-group">
    <label for="date-filter">Date:</label>
    <select id="date-filter" class="gallery-select">
      <option value="all">All Dates</option>
    </select>
  </div>
  <div class="filter-group">
    <label for="event-filter">Event:</label>
    <select id="event-filter" class="gallery-select">
      <option value="all">All Events</option>
    </select>
  </div>
  <div class="filter-group">
    <label for="name-filter">Name:</label>
    <select id="name-filter" class="gallery-select">
      <option value="all">All Names</option>
    </select>
  </div>
</div>

<div id="gallery-grid" class="gallery-grid">
  <!-- Photos will be injected here via JavaScript -->
</div>

<!-- Lightbox Modal -->
<div id="lightbox" class="lightbox">
  <span class="lightbox-close">&times;</span>
  <img class="lightbox-content" id="lightbox-img">
  <div id="lightbox-caption" class="lightbox-caption"></div>
</div>
