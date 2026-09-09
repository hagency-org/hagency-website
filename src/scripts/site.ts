const themeButton = document.querySelector<HTMLButtonElement>('.theme-toggle');
themeButton?.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('hagency-theme', theme); } catch { /* Theme still works for this page. */ }
});
const toggle = document.querySelector<HTMLButtonElement>('.mobile-toggle');
const mobile = document.querySelector<HTMLElement>('#mobile-nav');
toggle?.addEventListener('click', () => {
  if (!mobile) return;
  mobile.hidden = !mobile.hidden;
  toggle.setAttribute('aria-expanded', String(!mobile.hidden));
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobile && !mobile.hidden) { mobile.hidden = true; toggle?.setAttribute('aria-expanded', 'false'); toggle?.focus(); }
});
document.addEventListener('click', event => {
  document.querySelectorAll<HTMLDetailsElement>('.project-menu[open]').forEach(menu => { if (event.target instanceof Node && !menu.contains(event.target)) menu.open = false; });
});

const dialog = document.querySelector<HTMLDialogElement>('.search-dialog');
const input = dialog?.querySelector<HTMLInputElement>('input');
const results = dialog?.querySelector<HTMLElement>('.search-results');
type SearchItem = { title: string; description: string; href: string; type: string; keywords?: string };
const items: SearchItem[] = JSON.parse(dialog?.dataset.searchIndex ?? '[]');
function renderSearch() {
  if (!results || !input) return;
  const query = input.value.trim().toLocaleLowerCase();
  const terms = query.split(/\s+/).filter(Boolean);
  const score = (item: SearchItem) => terms.reduce((sum, term) => sum + (item.title.toLocaleLowerCase().includes(term) ? 3 : item.description.toLocaleLowerCase().includes(term) ? 2 : 1), 0);
  const matches = items.filter(item => terms.every(term => `${item.title} ${item.description} ${item.type} ${item.keywords ?? ''}`.toLocaleLowerCase().includes(term))).sort((a,b)=>score(b)-score(a)).slice(0, 9);
  results.replaceChildren();
  for (const item of matches) {
    const a = document.createElement('a'); a.href = item.href;
    const type = document.createElement('span'); type.className = 'eyebrow'; type.textContent = item.type;
    const title = document.createElement('strong'); title.textContent = item.title;
    const description = document.createElement('p'); description.textContent = item.description;
    a.append(type, title, description); results.append(a);
  }
  if (!matches.length) { const p = document.createElement('p'); p.className = 'search-empty'; p.textContent = dialog?.dataset.empty ?? ''; results.append(p); }
}
const openSearch = () => { if (dialog && !dialog.open && !document.querySelector('.screenshot-dialog[open]')) { dialog.showModal(); renderSearch(); input?.focus(); } };
document.querySelectorAll('.search-open').forEach(button => button.addEventListener('click', openSearch));
document.querySelector('.search-close')?.addEventListener('click', () => dialog?.close());
dialog?.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
input?.addEventListener('input', renderSearch);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && dialog?.open) { event.preventDefault(); dialog.close(); }
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); openSearch(); }
});

document.querySelectorAll<HTMLElement>('[data-demo]').forEach(demo => {
  const buttons = [...demo.querySelectorAll<HTMLButtonElement>('[data-step]')];
  const panels = [...demo.querySelectorAll<HTMLElement>('[data-panel]')];
  const prev = demo.querySelector<HTMLButtonElement>('[data-prev]');
  const next = demo.querySelector<HTMLButtonElement>('[data-next]');
  let active = 0;
  const show = (index: number) => {
    active = Math.max(0, Math.min(index, panels.length - 1));
    panels.forEach((panel, i) => { panel.hidden = i !== active; });
    buttons.forEach((button, i) => { button.classList.toggle('active', i === active); button.setAttribute('aria-pressed', String(i === active)); });
    if (prev) prev.disabled = active === 0;
    const label = next?.querySelector('span');
    if (label && next) label.textContent = (active === panels.length - 1 ? next.dataset.replayLabel : next.dataset.nextLabel) ?? '';
    const count = demo.querySelector('[data-progress] span'); if (count) count.textContent = String(active + 1);
  };
  buttons.forEach((button, i) => button.addEventListener('click', () => show(i)));
  prev?.addEventListener('click', () => show(active - 1));
  next?.addEventListener('click', () => show(active === panels.length - 1 ? 0 : active + 1));
});

document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach(button => button.addEventListener('click', async () => {
  const block = button.closest('.code-block'); const code = block?.querySelector('code')?.textContent;
  if (!code) return;
  const label = button.querySelector('span'); const initial = label?.textContent;
  try { await navigator.clipboard.writeText(code); if (label) label.textContent = button.dataset.success ?? ''; const status = block?.querySelector('.copy-status'); if (status) status.textContent = button.dataset.success ?? ''; setTimeout(() => { if (label) label.textContent = initial ?? ''; }, 1800); }
  catch { const status = block?.querySelector('.copy-status'); if (status) { status.classList.remove('sr-only'); status.textContent = button.dataset.failure ?? ''; } }
}));

const platformSelect = document.querySelector<HTMLSelectElement>('[data-platform-select]');
platformSelect?.addEventListener('change', () => {
  const value = platformSelect.value;
  document.querySelectorAll<HTMLElement>('[data-download-row]').forEach(row => { row.hidden = value !== 'all' && !row.dataset.platform?.split(',').includes(value); });
  document.querySelectorAll<HTMLElement>('[data-release-group]').forEach(group => {
    const visible = [...group.querySelectorAll<HTMLElement>('[data-download-row]')].some(row => !row.hidden);
    const empty = group.querySelector<HTMLElement>('[data-platform-empty]'); if (empty) empty.hidden = visible;
  });
});

document.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const container = button.closest('[data-filter-group]');
  container?.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach(item => { item.setAttribute('aria-pressed', String(item === button)); });
  document.querySelectorAll<HTMLElement>('[data-filter-item]').forEach(item => { item.hidden = button.dataset.filter !== 'all' && item.dataset.filterItem !== button.dataset.filter; });
}));

document.querySelectorAll<HTMLAnchorElement>('[data-language-switch]').forEach(link => {
  if (location.hash) link.href += location.hash;
});

document.querySelectorAll<HTMLElement>('[data-network]').forEach(network => {
  const buttons = [...network.querySelectorAll<HTMLButtonElement>('[data-network-mode]')];
  const panels = [...network.querySelectorAll<HTMLElement>('[data-network-panel]')];
  buttons.forEach(button => button.addEventListener('click', () => {
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    panels.forEach(panel => { panel.hidden = panel.dataset.networkPanel !== button.dataset.networkMode; });
  }));
});

document.querySelectorAll<HTMLElement>('[data-permission-example]').forEach(example => {
  const select = example.querySelector<HTMLSelectElement>('[data-room-role]');
  select?.addEventListener('change', () => {
    const moderator = select.value === 'moderator';
    example.querySelectorAll('[data-room-role-label]').forEach(label => { label.textContent = (moderator ? example.dataset.moderator : example.dataset.member) ?? ''; });
    example.querySelectorAll<HTMLElement>('[data-capability]').forEach(row => {
      const granted = row.dataset.elevated !== 'true' || moderator;
      row.dataset.granted = String(granted);
      const check = row.querySelector<HTMLElement>('[data-permission-check]');
      const lock = row.querySelector<HTMLElement>('[data-permission-lock]');
      const label = row.querySelector('[data-permission-label]');
      if (check) check.hidden = !granted;
      if (lock) lock.hidden = granted;
      if (label) label.textContent = (granted ? example.dataset.allowed : example.dataset.restricted) ?? '';
    });
    const status = example.querySelector<HTMLElement>('[data-permission-status]');
    if (status) status.textContent = (moderator ? status.dataset.moderatorStatus : status.dataset.memberStatus) ?? '';
  });
});

const screenshotDialog = document.querySelector<HTMLDialogElement>('[data-screenshot-dialog]');
if (screenshotDialog) {
  const viewport = screenshotDialog.querySelector<HTMLElement>('[data-screenshot-image]')!;
  const status = screenshotDialog.querySelector<HTMLElement>('[data-screenshot-status]')!;
  const zoom = screenshotDialog.querySelector<HTMLButtonElement>('[data-screenshot-zoom]')!;
  const original = screenshotDialog.querySelector<HTMLAnchorElement>('[data-screenshot-original]')!;
  let opener: HTMLAnchorElement | undefined;
  const resetZoom = () => {
    screenshotDialog.classList.remove('is-zoomed');
    zoom.setAttribute('aria-pressed', 'false');
    zoom.textContent = zoom.dataset.actual ?? '';
    viewport.scrollTo(0, 0);
  };
  document.querySelectorAll<HTMLAnchorElement>('[data-screenshot]').forEach(link => link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    opener = link;
    screenshotDialog.querySelector('#screenshot-title')!.textContent = link.dataset.title ?? '';
    screenshotDialog.querySelector('#screenshot-description')!.textContent = link.dataset.description ?? '';
    screenshotDialog.querySelector('[data-screenshot-metadata]')!.textContent = link.dataset.metadata ?? '';
    original.href = link.href;
    resetZoom();
    status.textContent = screenshotDialog.dataset.loading ?? '';
    status.hidden = false;
    const image = new Image();
    image.alt = link.dataset.alt ?? '';
    image.width = Number(link.dataset.width);
    image.height = Number(link.dataset.height);
    image.addEventListener('load', () => { if (image.isConnected) status.hidden = true; });
    image.addEventListener('error', () => {
      if (!image.isConnected) return;
      image.hidden = true;
      status.textContent = screenshotDialog.dataset.error ?? '';
      status.hidden = false;
    });
    viewport.replaceChildren(image);
    image.src = link.href;
    screenshotDialog.showModal();
  }));
  zoom.addEventListener('click', () => {
    const enlarged = screenshotDialog.classList.toggle('is-zoomed');
    zoom.setAttribute('aria-pressed', String(enlarged));
    zoom.textContent = (enlarged ? zoom.dataset.fit : zoom.dataset.actual) ?? '';
    viewport.scrollTo(0, 0);
  });
  screenshotDialog.querySelector('[data-screenshot-close]')?.addEventListener('click', () => screenshotDialog.close());
  screenshotDialog.addEventListener('click', event => {
    if (event.target !== screenshotDialog) return;
    const rect = screenshotDialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) screenshotDialog.close();
  });
  screenshotDialog.addEventListener('close', () => {
    viewport.replaceChildren();
    opener?.focus({ preventScroll: true });
  });
}

const reveal = document.querySelectorAll<HTMLElement>('.reveal');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.06 });
  reveal.forEach(el => { el.classList.add('will-reveal'); observer.observe(el); });
}
