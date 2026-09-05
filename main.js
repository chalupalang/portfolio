/* =============================================================
   MAIN.JS — vanilla JS, no build step, no frameworks.
   Split into small functions; each only runs if its markup
   exists on the current page, so this one file works across
   index.html, gallery.html, and video.html.
================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initFeaturedGrid();
  initGalleryGrid();
  initLightbox();
  initVideoGrid();
  initYear();
  initReveal();
});

/* ---------- Mobile nav toggle ---------- */
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const open = links.getAttribute("data-open") === "true";
    links.setAttribute("data-open", String(!open));
    toggle.setAttribute("aria-expanded", String(!open));
  });

  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.setAttribute("data-open", "false");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

/* ---------- Homepage featured grid ---------- */
function initFeaturedGrid() {
  const el = document.getElementById("featured-grid");
  if (!el || typeof PHOTOS === "undefined") return;

  const featured = PHOTOS.filter((p) => p.featured);
  el.innerHTML = featured.map((p, i) => photoTile(p, i)).join("");
  attachLightboxTriggers(el, featured);
}

/* ---------- Full gallery grid with category filters ---------- */
function initGalleryGrid() {
  const el = document.getElementById("gallery-grid");
  if (!el || typeof PHOTOS === "undefined") return;

  const filterBar = document.getElementById("filter-bar");
  const categories = ["All", ...(typeof CATEGORIES !== "undefined" ? CATEGORIES : [])];

  if (filterBar) {
    filterBar.innerHTML = categories
      .map(
        (c, i) =>
          `<button class="filter-btn" data-filter="${escapeHtml(c)}" aria-pressed="${i === 0}">${escapeHtml(c)}</button>`
      )
      .join("");
  }

  function render(filter) {
    const list = filter && filter !== "All" ? PHOTOS.filter((p) => p.category === filter) : PHOTOS;
    el.innerHTML = list.map((p, i) => photoTile(p, i)).join("");
    attachLightboxTriggers(el, list);
  }

  render("All");

  if (filterBar) {
    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filterBar
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      render(btn.dataset.filter);
    });
  }
}

const PHOTOGRAPHER_NAME = "Kaylah Lang";

function photoTile(photo, index) {
  const alt = `Photograph by ${PHOTOGRAPHER_NAME}`;
  return `
    <figure class="grid-item">
      <button type="button" data-index="${index}" aria-label="Open photo in full size">
        <img src="images/photos/${photo.file}" alt="${escapeHtml(alt)}" loading="lazy" />
      </button>
    </figure>
  `;
}

function escapeHtml(str = "") {
  return str.replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

/* ---------- Lightbox (shared by featured + gallery grids) ---------- */
let lightboxList = [];
let lightboxIndex = 0;

function attachLightboxTriggers(container, list) {
  container.querySelectorAll("button[data-index]").forEach((btn) => {
    btn.addEventListener("click", () => {
      lightboxList = list;
      lightboxIndex = Number(btn.dataset.index);
      openLightbox();
    });
  });
}

function initLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb) return;

  lb.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
  lb.querySelector(".lightbox-prev").addEventListener("click", () => stepLightbox(-1));
  lb.querySelector(".lightbox-next").addEventListener("click", () => stepLightbox(1));

  document.addEventListener("keydown", (e) => {
    if (lb.getAttribute("data-open") !== "true") return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });
}

function openLightbox() {
  renderLightbox();
  const lb = document.getElementById("lightbox");
  lb.setAttribute("data-open", "true");
  lb.querySelector(".lightbox-close").focus();
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  lb.setAttribute("data-open", "false");
  document.body.style.overflow = "";
}

function stepLightbox(dir) {
  lightboxIndex = (lightboxIndex + dir + lightboxList.length) % lightboxList.length;
  renderLightbox();
}

function renderLightbox() {
  const photo = lightboxList[lightboxIndex];
  if (!photo) return;
  const lb = document.getElementById("lightbox");
  lb.querySelector("img").src = `images/photos/${photo.file}`;
  lb.querySelector("img").alt = `Photograph by ${PHOTOGRAPHER_NAME}`;
  lb.querySelector(".lightbox-caption").textContent = `${lightboxIndex + 1} / ${lightboxList.length}`;
}

/* ---------- Video grid + modal ---------- */
function initVideoGrid() {
  const el = document.getElementById("video-grid");
  if (!el || typeof VIDEOS === "undefined") return;

  el.innerHTML = VIDEOS.map((v, i) => `
    <article class="video-card">
      <button type="button" data-index="${i}" aria-label="Play ${escapeHtml(v.title)}">
        <img src="images/video-posters/${v.poster}" alt="" loading="lazy" />
        <span class="video-play">
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
          </span>
        </span>
      </button>
      <div class="video-info">
        <h3>${escapeHtml(v.title)}</h3>
        <p>${escapeHtml(v.desc)}</p>
      </div>
    </article>
  `).join("");

  el.querySelectorAll("button[data-index]").forEach((btn) => {
    btn.addEventListener("click", () => openVideoModal(VIDEOS[Number(btn.dataset.index)]));
  });

  const modal = document.getElementById("video-modal");
  if (modal) {
    modal.querySelector(".video-modal-close").addEventListener("click", closeVideoModal);
    modal.addEventListener("click", (e) => { if (e.target === modal) closeVideoModal(); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.getAttribute("data-open") === "true") closeVideoModal();
    });
  }
}

function openVideoModal(video) {
  const modal = document.getElementById("video-modal");
  if (!modal || !video) return;
  const frame = modal.querySelector(".ratio");
  const watchLink = modal.querySelector(".video-modal-watch");
  const frameWrap = modal.querySelector(".video-modal-frame");

  // Match the player's shape to the video's real orientation, so a
  // vertical/phone-shot video doesn't get letterboxed with black
  // bars inside a widescreen box.
  frameWrap.classList.toggle("is-portrait", video.orientation === "portrait");

  if (video.type === "youtube") {
    const id = getYouTubeId(video.source);
    frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="${escapeHtml(video.title)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
    if (watchLink) {
      watchLink.href = `https://www.youtube.com/watch?v=${id}`;
      watchLink.hidden = false;
    }
  } else if (video.type === "vimeo") {
    frame.innerHTML = `<iframe src="https://player.vimeo.com/video/${video.source}?autoplay=1" title="${escapeHtml(video.title)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    if (watchLink) {
      watchLink.href = `https://vimeo.com/${video.source}`;
      watchLink.hidden = false;
    }
  } else {
    frame.innerHTML = `<video src="${video.source}" controls autoplay></video>`;
    if (watchLink) watchLink.hidden = true;
  }

  modal.setAttribute("data-open", "true");
  modal.querySelector(".video-modal-close").focus();
  document.body.style.overflow = "hidden";
}

// Accepts a bare YouTube ID or a full/short YouTube URL and
// returns just the ID — so it still works even if you paste the
// whole link into js/data.js instead of only the ID.
function getYouTubeId(input) {
  if (!input) return "";
  const trimmed = input.trim();
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed; // already a bare ID
  try {
    const url = new URL(trimmed);
    if (url.hostname.includes("youtu.be")) return url.pathname.slice(1);
    if (url.pathname.startsWith("/shorts/")) return url.pathname.split("/shorts/")[1];
    if (url.searchParams.get("v")) return url.searchParams.get("v");
    if (url.pathname.startsWith("/embed/")) return url.pathname.split("/embed/")[1];
  } catch (e) {
    /* not a full URL — fall through */
  }
  return trimmed;
}

function closeVideoModal() {
  const modal = document.getElementById("video-modal");
  if (!modal) return;
  modal.setAttribute("data-open", "false");
  modal.querySelector(".ratio").innerHTML = ""; // stops playback
  document.body.style.overflow = "";
}

/* ---------- Footer year ---------- */
function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ---------- Scroll reveal ----------
   Applies a quiet fade-up to section headers, grid photos, video
   cards, and the About/Contact blocks as they enter the viewport.
   Runs after the grids above so it can see the rendered tiles. */
function initReveal() {
  const els = document.querySelectorAll(
    ".section-head, .about-portrait, .about-copy, .contact-grid > *, .grid-item, .video-card"
  );
  if (!els.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  els.forEach((el) => el.classList.add("reveal"));

  if (reduceMotion) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
  );

  els.forEach((el) => observer.observe(el));
}
