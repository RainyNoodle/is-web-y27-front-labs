import"./script-CgqfA9cQ.js";const n="https://ceramic-api.onrender.com";function e(o){return`
    <article class="blog__item">
        <div class="blog__info">
            <img class="blog__info__img" src="${new URL(o.image,n)}" alt="${o.title}" loading="lazy">
            <div class="blog__info__content">
                <h3 class="blog__info__title">${o.title}</h3>
                <button class="btn-default blog__info__btn">read</button>
            </div>
        </div>
        <p class="blog__text">${o.excerpt}</p>
    </article>`}async function i(){const o=await fetch(`${n}/api/posts`);if(!o.ok)throw new Error(`Failed to fetch: ${o.status}`);return o.json()}async function r(){const o=document.querySelector(".blog__grid");if(!o)return console.warn("No .blog__grid found");o.innerHTML='<div class="loading">Loading…</div>';try{const t=await i();o.innerHTML=t.map(e).join("")}catch(t){console.error(t),o.innerHTML='<div class="error">Failed to load</div>'}}document.addEventListener("DOMContentLoaded",()=>{r()});
