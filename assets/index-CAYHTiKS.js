(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/cabina-biblioteca/assets/m_logo-0-Gumeyx.png`,t=`/cabina-biblioteca/assets/cultura_logo-Dtdijg-U.png`,n=`/cabina-biblioteca/assets/logo_propuesta-DvEBNnV2.png`,r=`/cabina-biblioteca/assets/book1-BtgLBJiz.png`,i=`/cabina-biblioteca/assets/book2-qsAmh8s4.png`,a=`/cabina-biblioteca/assets/book3-muGTD0Xe.png`,o=`/cabina-biblioteca/assets/book4-Ck7tEvfn.png`,s=document.querySelector(`#app`),c=[{id:1,title:`Don Quijote de la Mancha`,author:`Miguel de Cervantes`,image:r,category:`Clásicos`,available:!0},{id:2,title:`Pedro Páramo`,author:`Juan Rulfo`,image:i,category:`Realismo Mágico`,available:!0},{id:3,title:`Rayuela`,author:`Julio Cortázar`,image:a,category:`Ficción`,available:!0},{id:4,title:`Cien años de soledad`,author:`Gabriel García Márquez`,image:o,category:`Realismo Mágico`,available:!0},{id:5,title:`Aura`,author:`Carlos Fuentes`,category:`Ficción`,available:!0},{id:6,title:`La tregua`,author:`Mario Benedetti`,category:`Novela`,available:!0},{id:7,title:`El llano en llamas`,author:`Juan Rulfo`,category:`Cuentos`,available:!0}],l=`home`,u=``,d=(r=!0)=>`
  <header class="container" style="padding-top: 40px; padding-bottom: 20px;">
    <div style="display: flex; justify-content: space-between; align-items: center; gap: 20px; margin-bottom: 32px;">
      <img src="${t}" alt="Cultura" style="height: 35px; width: auto; object-fit: contain;">
      <img src="${e}" alt="Morelia" style="height: 35px; width: auto; object-fit: contain;">
    </div>
    ${r?`
    <div style="text-align: center; border-top: 1px solid #e2e8f0; padding-top: 24px;">
      <img src="${n}" alt="Logo Proyecto" style="height: 140px; width: auto; object-fit: contain; margin: 0 auto;">
    </div>
    `:``}
  </header>
`,f=()=>`
  <nav class="nav-bottom">
    <a href="#" class="nav-item ${l===`home`?`active`:``}" data-view="home">
      <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      <span>Inicio</span>
    </a>
    <a href="#" class="nav-item ${l===`search`?`active`:``}" data-view="search">
      <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <span>Buscar</span>
    </a>
    <a href="#" class="nav-item ${l===`mybooks`?`active`:``}" data-view="mybooks">
      <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
      <span>Mis Libros</span>
    </a>
    <a href="#" class="nav-item ${l===`register`?`active`:``}" data-view="register">
      <svg xmlns="http://www.w3.org/2000/svg" class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      <span>Perfil</span>
    </a>
  </nav>
`,p=e=>`
  <div class="glass-card book-card" style="padding: 12px; cursor: pointer; display: flex; flex-direction: column; height: 100%;" data-id="${e.id}">
    ${e.image?`
      <img src="${e.image}" alt="${e.title}" style="width: 100%; height: 180px; object-fit: cover; border-radius: var(--radius-sm); margin-bottom: 12px; box-shadow: var(--shadow-sm);">
    `:`
      <div style="width: 100%; height: 180px; background: linear-gradient(135deg, var(--primary-light), var(--m-purple-light)); border-radius: var(--radius-sm); margin-bottom: 12px; display: flex; align-items: center; justify-content: center; text-align: center; padding: 10px; color: var(--primary);">
        <span style="font-weight: 700; font-size: 0.8rem; line-height: 1.2;">${e.title}</span>
      </div>
    `}
    <div style="flex: 1;">
      <h3 style="font-size: 0.95rem; margin-bottom: 4px; color: var(--primary); font-weight: 700;">${e.title}</h3>
      <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 8px;">${e.author}</p>
    </div>
    <div style="margin-top: auto; display: flex; align-items: center; gap: 4px;">
      <span class="badge" style="background: ${e.available?`#dcfce7`:`#fee2e2`}; color: ${e.available?`#166534`:`#991b1b`}; font-size: 0.65rem; padding: 2px 8px; border-radius: 10px;">
        ${e.available?`Disponible`:`Prestado`}
      </span>
    </div>
  </div>
`,m={home:()=>`
    ${d()}
    <main class="container animate-in" style="padding-bottom: 100px;">
      <section>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <h2 style="font-size: 1.3rem; color: var(--primary);">Recomendados</h2>
          <a href="#" class="text-link" id="view-all">Explorar todo</a>
        </div>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
          ${c.slice(0,8).map(e=>p(e)).join(``)}
        </div>

      </section>
    </main>
    ${f()}
  `,search:()=>`
    <header class="container" style="padding-top: 40px; padding-bottom: 20px;">
      <div style="position: relative; margin-bottom: 20px;">
        <input type="text" id="search-input" placeholder="Buscar por título o autor..." value="${u}" style="width: 100%; padding: 16px 16px 16px 48px; border-radius: var(--radius-md); border: 1px solid #e2e8f0; background: white; font-size: 1rem; box-shadow: var(--shadow-sm);">
        <svg xmlns="http://www.w3.org/2000/svg" style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #94a3b8;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      </div>
    </header>
    <main class="container animate-in" style="padding-bottom: 100px;">
      <div id="results-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
        ${h()}
      </div>
    </main>
    ${f()}
  `,mybooks:()=>`
    ${d(!1)}
    <main class="container animate-in" style="padding-bottom: 100px;">
      <h2 style="margin-bottom: 24px;">Mis Préstamos</h2>
      <div class="glass-card" style="padding: 40px; text-align: center; color: var(--text-muted);">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 16px; opacity: 0.5;"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        <p>Aún no tienes libros en préstamo.</p>
        <button class="btn btn-primary" style="margin-top: 20px;" id="go-home">Explorar Catálogo</button>
      </div>
    </main>
    ${f()}
  `,register:()=>`
    ${d(!1)}
    <div class="container" style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px;">
      <h1 style="font-size: 1.5rem; margin: 0; color: var(--primary);">Mi Perfil</h1>
    </div>
    <main class="container animate-in" style="padding-bottom: 100px;">
      <div class="glass-card" style="display: flex; flex-direction: column; gap: 24px; border: none; box-shadow: var(--shadow-lg);">
        <div style="text-align: center;">
          <div style="width: 80px; height: 80px; background: var(--primary-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--primary);"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
          <h2 style="font-size: 1.25rem;">Completa tu Registro</h2>
          <p style="font-size: 0.85rem; color: var(--text-muted);">Para poder solicitar libros</p>
        </div>

        <form id="register-form" style="display: flex; flex-direction: column; gap: 20px;">
          <div>
            <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 8px;">Nombre Completo</label>
            <input type="text" placeholder="Como aparece en tu INE" style="width: 100%; padding: 14px; border-radius: var(--radius-sm); border: 1px solid #e2e8f0;">
          </div>
          <div>
            <label style="display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 8px;">Foto de INE (Frente)</label>
            <div class="upload-zone" style="width: 100%; height: 120px; border: 2px dashed #cbd5e1; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; background: #f8fafc; cursor: pointer;">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--primary);"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            </div>
          </div>
          <button type="button" class="btn btn-primary" id="btn-register">Registrarme</button>
        </form>
      </div>
    </main>
    ${f()}
  `};function h(){let e=c.filter(e=>e.title.toLowerCase().includes(u.toLowerCase())||e.author.toLowerCase().includes(u.toLowerCase()));return e.length===0?`<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">No se encontraron libros para "${u}"</div>`:e.map(e=>p(e)).join(``)}function g(){let e=m[l];s.innerHTML=typeof e==`function`?e():`View not found`,document.querySelectorAll(`.nav-item`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),l=e.dataset.view,g()})});let t=document.querySelector(`#search-input`);t&&(t.focus(),t.setSelectionRange(u.length,u.length),t.addEventListener(`input`,e=>{u=e.target.value;let t=document.querySelector(`#results-grid`);t&&(t.innerHTML=h())}));let n=document.querySelector(`#go-home`);n&&n.addEventListener(`click`,()=>{l=`home`,g()})}g();