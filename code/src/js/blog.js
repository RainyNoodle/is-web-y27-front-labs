const API_BASE = "https://ceramic-api.onrender.com";

function blogToHTML(p) {
    return `
    <article class="blog__item">
        <div class="blog__info">
            <img class="blog__info__img" src="${new URL(p.image, API_BASE)}" alt="${p.title}" loading="lazy">
            <div class="blog__info__content">
                <h3 class="blog__info__title">${p.title}</h3>
                <button class="btn-default blog__info__btn">read</button>
            </div>
        </div>
        <p class="blog__text">${p.excerpt}</p>
    </article>`;
}

async function fetchBlog() {
    const res = await fetch(`${API_BASE}/api/posts`);
    if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
    }
    return res.json();
}

async function renderBlog() {
    const grid = document.querySelector(".blog__grid");
    if (!grid) {
        return console.warn("No .blog__grid found");
    }

    grid.innerHTML = `<div class="loading">Loading…</div>`;

    try {
        const data = await fetchBlog();
        grid.innerHTML = data.map(blogToHTML).join("");
    } catch (err) {
        console.error(err);
        grid.innerHTML = `<div class="error">Failed to load</div>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderBlog();
});
