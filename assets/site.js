/* Shared helpers for every page. Data files live at the site root; paths inside them are relative to the root. */
(function(){
  const script = document.currentScript;
  const root = new URL('..', script.src).href;            // site root, e.g. https://gidant12-svg.github.io/
  const url = p => p ? (/^(https?:|mailto:)/.test(p) ? p : root + p.replace(/^\//,'')) : '';
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const num = s => parseFloat(String(s).replace(/[^0-9.\-]/g,''));
  const get = f => fetch(root + f, {cache:'no-store'}).then(r => r.ok ? r.json() : null).catch(() => null);
  const badgeClass = r => { r = String(r).toUpperCase();
    if (/SELL|UNDERPERFORM/.test(r) && !/HOLD/.test(r)) return 'b-sell';
    if (/BUY|OUTPERFORM/.test(r)) return 'b-buy';
    return 'b-hold'; };
  const byDate = (a,b) => String(b.date||'').localeCompare(String(a.date||''));
  const CHEV = '<svg class="chev" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 8l5 5 5-5"/></svg>';

  function rangeBar(r){
    const s = r.scenarios; if(!s) return '';
    const pts = {bear:num(s.bear), base:num(s.base), bull:num(s.bull)}, px = num(r.price);
    const lo = Math.min(pts.bear, px), hi = Math.max(pts.bull, px), pad = (hi-lo)*0.06;
    const pos = v => ((v-(lo-pad))/((hi+pad)-(lo-pad))*100).toFixed(2)+'%';
    return `<div class="range"><div class="range-label">Scenario values vs. price at valuation date</div>
      <div class="track">
        <div class="pt" style="left:${pos(pts.bear)}"></div>
        <div class="pt base" style="left:${pos(pts.base)}"></div>
        <div class="pt" style="left:${pos(pts.bull)}"></div>
        <div class="pt px" style="left:${pos(px)}"></div>
        <div class="lbl below" style="left:${pos(pts.bear)}"><small>Bear</small>${esc(s.bear)}</div>
        <div class="lbl below" style="left:${pos(pts.base)}"><small>Base</small>${esc(s.base)}</div>
        <div class="lbl below" style="left:${pos(pts.bull)}"><small>Bull</small>${esc(s.bull)}</div>
        <div class="lbl above" style="left:${pos(px)}">Price ${esc(r.price)}</div>
      </div><div class="range-space"></div></div>`;
  }
  function fileButtons(r){
    return `<a class="btn" href="${esc(url(r.file))}" target="_blank" rel="noopener">Read report (PDF)</a>` +
      (r.deckPpt ? ` <a class="btn" href="${esc(url(r.deckPpt))}" download title="Best formatting">Download deck (PowerPoint)</a>` : '') +
      (r.deck ? ` <a class="btn${r.deckPpt?' alt':''}" href="${esc(url(r.deck))}" target="_blank" rel="noopener">View deck (PDF)</a>` : '');
  }
  function reportItem(r, open){
    const up = num(r.upside);
    return `<details class="item"${open?' open':''}>
      <summary>
        <div class="when">${esc(r.written)}</div>
        <div class="mid"><div class="t"><span class="serif">${esc(r.company)} (${esc(r.ticker)})</span></div>
          <div class="s">${esc(r.format)} · ${esc(r.sector)} · ${esc(r.exchange)}</div></div>
        <div class="right"><span class="mini">Target <b>${esc(r.target)}</b> · <b class="${up<0?'neg':'pos'}">${esc(r.upside)}</b></span><span class="badge ${badgeClass(r.rating)}">${esc(r.rating)}</span></div>
        ${CHEV}
      </summary>
      <div class="detail">
        <p>${esc(r.thesis)}</p>
        <div class="figs">
          <div class="fig"><span>12-mo target</span><b>${esc(r.target)}</b></div>
          <div class="fig"><span>Price</span><b>${esc(r.price)}</b></div>
          <div class="fig"><span>Upside</span><b class="${up<0?'neg':'pos'}">${esc(r.upside)}</b></div>
        </div>
        ${rangeBar(r)}
        ${r.context?`<p class="context"><b>Context.</b> ${esc(r.context)}</p>`:''}
        <div class="foot">
          <div class="tags">${(r.methods||[]).map(m=>`<span class="tag">${esc(m)}</span>`).join('')}</div>
          <span style="display:flex;gap:8px;flex-wrap:wrap">${fileButtons(r)}</span>
        </div>
      </div>
    </details>`;
  }
  function milestoneItem(t){
    return `<details class="item ${t.current?'current':''}">
      <summary>
        <div class="when">${esc(t.when)}</div>
        <div class="mid"><div class="t"><span class="${t.current?'serif':''}">${esc(t.title)}</span><span class="kind ${t.current?'now':''}">${esc(t.tag)}</span></div>
          ${t.subtitle?`<div class="s">${esc(t.subtitle)}</div>`:''}</div>
        <div class="right"></div>
        ${CHEV}
      </summary>
      <div class="detail"><p class="muted">${esc(t.body)}</p></div>
    </details>`;
  }
  // Contact links appear only once they are filled in site.json.
  function contactLinks(site, withGithub){
    if(!site) return '';
    const l = [];
    if(site.linkedin) l.push(`<a href="${esc(site.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`);
    if(site.email) l.push(`<a href="mailto:${esc(site.email)}">${esc(site.email)}</a>`);
    if(withGithub && site.github) l.push(`<a href="${esc(site.github)}" target="_blank" rel="noopener">GitHub</a>`);
    return l.join('');
  }
  function footer(site){
    const el = document.getElementById('footLinks'); if(!el) return;
    el.innerHTML = contactLinks(site, true);
  }

  document.querySelectorAll('[data-year]').forEach(e => e.textContent = new Date().getFullYear());
  window.Site = {root, url, esc, num, get, badgeClass, byDate, reportItem, milestoneItem, contactLinks, footer, fileButtons};
})();
