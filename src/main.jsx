import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const APPS = [
  {
    id: 'opera-mini',
    name: 'Opera Mini',
    category: 'બ્રાઉઝિંગ',
    icon: 'O',
    tint: '#ff4b3a',
    minAndroid: 5,
    minRam: 1,
    size: '36 MB',
    source: 'Play Store',
    url: 'https://play.google.com/store/apps/details?id=com.opera.mini.native',
    note: 'ઓછી ડેટા અને RAMમાં વેબ બ્રાઉઝિંગ માટે હળવો વિકલ્પ.',
    tags: ['ઝડપી', 'ડેટા સેવર'],
    recommendation: 'ભલામણ',
  },
  {
    id: 'vlc',
    name: 'VLC for Android',
    category: 'મીડિયા',
    icon: '▶',
    tint: '#ff8c2a',
    minAndroid: 5,
    minRam: 1,
    size: '63 MB',
    source: 'Play Store',
    url: 'https://play.google.com/store/apps/details?id=org.videolan.vlc',
    note: 'વિડિયો અને સંગીતની સામાન્ય ફાઇલો ઑફલાઇન ચલાવવા માટે.',
    tags: ['ઓફલાઇન', 'વિડિયો'],
    recommendation: 'ભલામણ',
  },
  {
    id: 'files',
    name: 'Files by Google',
    category: 'ફાઇલો',
    icon: '⌁',
    tint: '#4285f4',
    minAndroid: 5,
    minRam: 1,
    size: '21 MB',
    source: 'Play Store',
    url: 'https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.files',
    note: 'ફાઇલો ગોઠવો, શેર કરો અને ખાલી જગ્યા શોધવામાં મદદ કરે છે.',
    tags: ['ક્લીનઅપ', 'ફાઇલ'],
    recommendation: 'ભલામણ',
  },
  {
    id: 'fdroid',
    name: 'F-Droid',
    category: 'ઉપયોગી',
    icon: 'Fd',
    tint: '#1976d2',
    minAndroid: 5,
    minRam: 1,
    size: '12 MB',
    source: 'F-Droid',
    url: 'https://f-droid.org/',
    note: 'મુક્ત અને ઓપન સોર્સ Android એપ્સ માટેનો વિશ્વસનીય કેટલોગ.',
    tags: ['ઓપન સોર્સ', 'એપ કેટલોગ'],
    recommendation: 'ભલામણ',
  },
  {
    id: 'koreader',
    name: 'KOReader',
    category: 'વાંચન',
    icon: 'K',
    tint: '#315c46',
    minAndroid: 5,
    minRam: 1,
    size: '36 MB',
    source: 'F-Droid',
    url: 'https://f-droid.org/packages/org.koreader.launcher.fdroid/',
    note: 'PDF, EPUB અને લાંબા વાંચન માટે અનુકૂળ, ઑફલાઇન રીડર.',
    tags: ['PDF', 'ઓફલાઇન'],
    recommendation: 'ભલામણ',
  },
  {
    id: 'newpipe',
    name: 'NewPipe',
    category: 'મીડિયા',
    icon: 'N',
    tint: '#ef3e40',
    minAndroid: 5,
    minRam: 1,
    size: '16 MB',
    source: 'F-Droid',
    url: 'https://f-droid.org/packages/org.schabi.newpipe/',
    note: 'હળવો વિડિયો ક્લાયન્ટ. ઇન્સ્ટોલ પહેલાં સેવા અને સ્થાનિક નિયમો ચકાસો.',
    tags: ['હળવું', 'વિડિયો'],
    recommendation: 'વૈકલ્પિક',
  },
  {
    id: 'aimp',
    name: 'AIMP',
    category: 'મીડિયા',
    icon: 'A',
    tint: '#593da3',
    minAndroid: 5,
    minRam: 1,
    size: '15 MB',
    source: 'Play Store',
    url: 'https://play.google.com/store/apps/details?id=com.aimp.player',
    note: 'ઓછી બેટરીમાં સ્થાનિક સંગીત લાઇબ્રેરી માટે એક સરળ પ્લેયર.',
    tags: ['ઓફલાઇન', 'સંગીત'],
    recommendation: 'વૈકલ્પિક',
  },
  {
    id: 'osmand',
    name: 'OsmAnd',
    category: 'મુસાફરી',
    icon: '⌖',
    tint: '#1e8d6f',
    minAndroid: 6,
    minRam: 2,
    size: '101 MB+',
    source: 'Play Store',
    url: 'https://play.google.com/store/apps/details?id=net.osmand',
    note: 'ડાઉનલોડ કરેલા નકશા સાથે ઑફલાઇન માર્ગદર્શન. વધારે સ્ટોરેજ રાખો.',
    tags: ['ઓફલાઇન', 'નકશા'],
    recommendation: '2 GB માટે',
  },
  {
    id: 'davx5',
    name: 'DAVx⁵',
    category: 'ઉપયોગી',
    icon: 'D',
    tint: '#007a78',
    minAndroid: 6,
    minRam: 1,
    size: '9 MB',
    source: 'F-Droid',
    url: 'https://f-droid.org/packages/at.bitfire.davdroid/',
    note: 'CalDAV / CardDAV કૅલેન્ડર અને સંપર્ક સિંક માટે.',
    tags: ['સિંક', 'ઓપન સોર્સ'],
    recommendation: 'Android 6',
  },
  {
    id: 'modern-suite',
    name: 'આધુનિક ઓફિસ સ્યુટ',
    category: 'કામ',
    icon: '＋',
    tint: '#657079',
    minAndroid: 8,
    minRam: 2,
    size: '150 MB+',
    source: 'વેબ તપાસો',
    url: 'https://play.google.com/store',
    note: 'ઘણી નવી ઓફિસ એપ્સ હવે Android 8+ માગે છે; વેબ અથવા જૂનું સમર્થિત વર્ઝન વિચારો.',
    tags: ['વધુ Android જોઈએ'],
    recommendation: 'મર્યાદિત',
  },
];

const CATEGORY_OPTIONS = ['બધું', 'બ્રાઉઝિંગ', 'મીડિયા', 'ફાઇલો', 'વાંચન', 'ઉપયોગી', 'મુસાફરી', 'કામ'];

function androidLabel(value) {
  return value === 5 ? 'Android 5.1' : value === 6 ? 'Android 6.0' : `Android ${value}.0`;
}

function Icon({ type, size = 20, stroke = 1.8 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  const paths = {
    search: <><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.2 4.2"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    heart: <path d="M20.8 8.6c0 5-8.8 10.2-8.8 10.2S3.2 13.6 3.2 8.6C3.2 6.1 5 4.4 7.3 4.4c1.7 0 3.3.9 4.7 2.5 1.4-1.6 3-2.5 4.7-2.5 2.3 0 4.1 1.7 4.1 4.2Z"/>,
    info: <><circle cx="12" cy="12" r="8.5"/><path d="M12 10.8v5"/><path d="M12 8h.01"/></>,
    shield: <><path d="M12 3.4 19 6v5.6c0 4.4-2.9 7.5-7 9-4.1-1.5-7-4.6-7-9V6l7-2.6Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></>,
    sliders: <><path d="M4 7h10"/><path d="M18 7h2"/><path d="M14 5v4"/><path d="M4 17h4"/><path d="M12 17h8"/><path d="M10 15v4"/></>,
    spark: <path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z"/>,
    external: <><path d="M14 4h6v6"/><path d="m20 4-9 9"/><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"/></>,
    menu: <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
    close: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
    star: <path d="m12 3.8 2.55 5.16 5.69.83-4.12 4.02.97 5.67L12 16.78l-5.09 2.68.97-5.67-4.12-4.02 5.69-.83L12 3.8Z"/>,
    database: <><ellipse cx="12" cy="5" rx="7.5" ry="2.8"/><path d="M4.5 5v7c0 1.5 3.35 2.8 7.5 2.8s7.5-1.3 7.5-2.8V5"/><path d="M4.5 12v7c0 1.5 3.35 2.8 7.5 2.8s7.5-1.3 7.5-2.8v-7"/></>,
    clock: <><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.4 2"/></>,
  };
  return <svg {...common}>{paths[type]}</svg>;
}

function App() {
  const [android, setAndroid] = useState(6);
  const [ram, setRam] = useState(2);
  const [storage, setStorage] = useState(4);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('બધું');
  const [view, setView] = useState('compatible');
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem('yt3-favorites') || '[]'); } catch { return []; }
  });
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [notice, setNotice] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('yt3-favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (!notice) return undefined;
    const timeout = window.setTimeout(() => setNotice(''), 2900);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  const scoredApps = useMemo(() => APPS.map((app) => {
    const androidOK = android >= app.minAndroid;
    const ramOK = ram >= app.minRam;
    const fullyCompatible = androidOK && ramOK;
    const closeFit = !fullyCompatible && android + 1 >= app.minAndroid && ram >= app.minRam;
    return { ...app, androidOK, ramOK, fullyCompatible, closeFit };
  }), [android, ram]);

  const compatibleCount = scoredApps.filter((app) => app.fullyCompatible).length;
  const displayApps = useMemo(() => scoredApps.filter((app) => {
    const searchMatch = `${app.name} ${app.category} ${app.note} ${app.tags.join(' ')}`.toLowerCase().includes(query.trim().toLowerCase());
    const categoryMatch = category === 'બધું' || app.category === category;
    const viewMatch = view === 'all' || (view === 'compatible' ? app.fullyCompatible : !app.fullyCompatible);
    const savedMatch = !favoritesOnly || favorites.includes(app.id);
    return searchMatch && categoryMatch && viewMatch && savedMatch;
  }), [scoredApps, query, category, view, favoritesOnly, favorites]);

  const storageOkay = storage >= 1;
  const score = Math.max(0, Math.min(100, 42 + compatibleCount * 6 + (storageOkay ? 6 : -6) + (android === 6 ? 4 : 0)));
  const scoreLabel = score >= 85 ? 'સારી સ્થિતિ' : score >= 65 ? 'તૈયાર છે' : 'થોડી તૈયારી જરૂરી';

  function toggleFavorite(id) {
    setFavorites((current) => {
      const exists = current.includes(id);
      setNotice(exists ? 'સેવ કરેલી એપમાંથી દૂર કરી.' : 'એપ સેવ કરવામાં આવી.');
      return exists ? current.filter((item) => item !== id) : [...current, id];
    });
  }

  function scrollToId(id) {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-inner">
          <button className="brand" onClick={() => scrollToId('top')} aria-label="શરૂઆત પર જાઓ">
            <span className="brand-mark"><span></span><span></span><span></span></span>
            <span>
              <b>યોગા શોધક</b>
              <small>YT3-X90F software guide</small>
            </span>
          </button>
          <nav className="desktop-nav" aria-label="મુખ્ય નેવિગેશન">
            <button onClick={() => scrollToId('finder')}>એપ્સ શોધો</button>
            <button onClick={() => scrollToId('checklist')}>તૈયારી</button>
            <button onClick={() => scrollToId('safety')}>સલામતી</button>
          </nav>
          <div className="header-actions">
            <button className={`saved-button ${favoritesOnly ? 'active' : ''}`} onClick={() => { setFavoritesOnly((current) => !current); setView('all'); scrollToId('finder'); }} aria-label="સેવ કરેલી એપ્સ">
              <Icon type="heart" size={17} /> <span>{favoritesOnly ? 'સેવ કરેલી ચાલુ' : 'સેવ કરેલી'}</span><b>{favorites.length}</b>
            </button>
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="મેનુ ખોલો">
              <Icon type={menuOpen ? 'close' : 'menu'} size={22}/>
            </button>
          </div>
        </div>
        {menuOpen && <div className="mobile-menu">
          <button onClick={() => scrollToId('finder')}>એપ્સ શોધો <Icon type="chevron" /></button>
          <button onClick={() => scrollToId('checklist')}>તૈયારી <Icon type="chevron" /></button>
          <button onClick={() => scrollToId('safety')}>સલામતી <Icon type="chevron" /></button>
        </div>}
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot"></span> Lenovo Yoga Tab 3 · Wi‑Fi</div>
            <h1>તમારા <em>YT3-X90F</em> માટે<br/>યોગ્ય સોફ્ટવેર શોધો.</h1>
            <p className="hero-description">તમારા Android અને RAM પ્રમાણે હળવી, ઉપયોગી એપ્સ ગાળો. જૂના ટેબલેટ માટે સરળ પસંદગી — કોઈ ગૂંચવણ નહીં.</p>
            <div className="hero-buttons">
              <button className="button button-primary" onClick={() => scrollToId('finder')}>મારી એપ્સ જુઓ <Icon type="arrow" size={18}/></button>
              <button className="button button-quiet" onClick={() => scrollToId('checklist')}>પહેલાં ચકાસો</button>
            </div>
            <div className="trust-row">
              <span><Icon type="shield" size={16}/> સુરક્ષિત સોર્સ પર ફોકસ</span>
              <span><Icon type="spark" size={16}/> ઓછી RAM માટે પસંદગી</span>
            </div>
          </div>
          <div className="device-stage" aria-label="Lenovo Yoga Tab 3 tablet illustration">
            <div className="sun-disc"></div>
            <div className="stage-dots dot-one"></div><div className="stage-dots dot-two"></div>
            <div className="tablet-shadow"></div>
            <div className="tablet-device">
              <div className="tablet-screen">
                <div className="screen-status"><span>9:41</span><span>⌁ ◒</span></div>
                <div className="screen-hello">નમસ્તે,</div>
                <div className="screen-title">યોગા</div>
                <div className="screen-cards">
                  <div><span className="mini-icon mini-blue">✓</span><small>તૈયાર</small></div>
                  <div><span className="mini-icon mini-rose">♡</span><small>સેવ કરો</small></div>
                </div>
                <div className="screen-line long"></div><div className="screen-line"></div>
              </div>
              <div className="tablet-bar"><span></span><i></i><i></i></div>
              <div className="tablet-kickstand"></div>
            </div>
            <div className="floating-card float-top"><span className="float-icon"><Icon type="check" size={17}/></span><div><b>{compatibleCount} એપ્સ</b><small>હાલની પ્રોફાઇલ માટે</small></div></div>
            <div className="floating-card float-bottom"><span className="float-icon gold"><Icon type="spark" size={17}/></span><div><b>હળવું રાખો</b><small>1 GB+ જગ્યા ખાલી કરો</small></div></div>
          </div>
        </section>

        <section className="device-strip">
          <div className="strip-inner">
            <div className="device-label"><span className="device-chip">તમારો મોડેલ</span><b>Lenovo YT3-X90F</b><small>Yoga Tab 3 10 · Wi‑Fi</small></div>
            <div className="spec"><span>સામાન્ય OS</span><b>Android 5.1 / 6.0</b></div>
            <div className="spec"><span>RAM વિકલ્પ</span><b>1 GB અથવા 2 GB</b></div>
            <div className="spec"><span>સારો નિયમ</span><b>1 GB જગ્યા ખાલી રાખો</b></div>
          </div>
        </section>

        <section id="finder" className="finder-section section-pad">
          <div className="section-heading">
            <div>
              <div className="eyebrow muted">તમારી ડિવાઇસ પ્રોફાઇલ</div>
              <h2>કઈ એપ્સ તમારા માટે ચાલશે?</h2>
              <p>નીચેની પસંદગી બદલો. પરિણામ તરત જ તમારા ટેબલેટને અનુરૂપ થશે.</p>
            </div>
            <div className="profile-summary"><span><span className="status-dot"></span> પ્રોફાઇલ તૈયાર</span><b>{androidLabel(android)} · {ram} GB RAM</b></div>
          </div>

          <div className="profile-panel">
            <div className="profile-controls">
              <div className="control-block">
                <label htmlFor="android-select">તમારું Android વર્ઝન</label>
                <div className="select-wrap">
                  <select id="android-select" value={android} onChange={(event) => setAndroid(Number(event.target.value))}>
                    <option value="5">Android 5.1 (Lollipop)</option>
                    <option value="6">Android 6.0 (Marshmallow)</option>
                  </select>
                  <span>⌄</span>
                </div>
              </div>
              <div className="control-block ram-control">
                <label>RAM</label>
                <div className="segmented" role="group" aria-label="RAM પસંદ કરો">
                  {[1, 2].map((value) => <button key={value} className={ram === value ? 'active' : ''} onClick={() => setRam(value)}>{value} GB</button>)}
                </div>
              </div>
              <div className="control-block storage-control">
                <label htmlFor="storage-range">ખાલી સ્ટોરેજ <b>{storage} GB</b></label>
                <input id="storage-range" type="range" min="0" max="12" value={storage} style={{ '--storage': storage }} onChange={(event) => setStorage(Number(event.target.value))}/>
                <div className="range-labels"><span>0</span><span>ભલામણ: 1 GB+</span><span>12 GB</span></div>
              </div>
            </div>
            <div className="compatibility-result">
              <div className="result-ring" style={{ '--ring-value': `${score * 3.6}deg` }}><span>{score}</span></div>
              <div><span>તમારી સોફ્ટવેર તૈયારી</span><b>{scoreLabel}</b><small>{compatibleCount} સૂચિત એપ્સ સુસંગત છે</small></div>
              <Icon type="spark" size={22}/>
            </div>
          </div>

          <div className="finder-toolbar">
            <div className="search-box"><Icon type="search" size={20}/><input aria-label="એપ્સ શોધો" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="એપ અથવા કામ શોધો…"/>{query && <button aria-label="શોધ સાફ કરો" onClick={() => setQuery('')}><Icon type="close" size={15}/></button>}</div>
            <div className="filter-tabs" aria-label="સુસંગતતા ફિલ્ટર">
              <button className={view === 'compatible' ? 'active' : ''} onClick={() => setView('compatible')}>ચાલશે <b>{compatibleCount}</b></button>
              <button className={view === 'needs' ? 'active' : ''} onClick={() => setView('needs')}>ધ્યાનમાં લો</button>
              <button className={view === 'all' ? 'active' : ''} onClick={() => setView('all')}>બધું</button>
            </div>
          </div>
          <div className="category-row" aria-label="કેટેગરી ફિલ્ટર">
            {CATEGORY_OPTIONS.map((option) => <button key={option} onClick={() => setCategory(option)} className={category === option ? 'active' : ''}>{option}</button>)}
          </div>

          <div className="results-caption"><span>{displayApps.length} પરિણામો</span><span><Icon type="info" size={15}/> ઇન્સ્ટોલ પહેલાં સોર્સનું વર્તમાન minimum Android જરૂર ચકાસો.</span></div>
          {displayApps.length ? <div className="app-grid">
            {displayApps.map((app) => <AppCard key={app.id} app={app} isFavorite={favorites.includes(app.id)} onToggleFavorite={toggleFavorite} />)}
          </div> : <div className="empty-state"><span><Icon type="search" size={28}/></span><h3>કોઈ મેળ મળ્યો નથી</h3><p>શોધ શબ્દ અથવા ફિલ્ટર બદલીને ફરી જુઓ.</p><button className="text-button" onClick={() => { setQuery(''); setCategory('બધું'); setView('all'); setFavoritesOnly(false); }}>બધા પરિણામો બતાવો <Icon type="arrow" size={16}/></button></div>}
        </section>

        <section id="checklist" className="checklist-section">
          <div className="section-pad checklist-layout">
            <div className="checklist-copy">
              <div className="eyebrow light">ઝડપી તૈયારી</div>
              <h2>ઇન્સ્ટોલ કરતાં પહેલાં<br/>ત્રણ નાની બાબતો.</h2>
              <p>જૂના Android ડિવાઇસ પર થોડો ખાલી સ્પેસ અને અપડેટેડ સિસ્ટમ હોય તો એપ્સ વધુ સરળતાથી ચાલે છે.</p>
              <button className="button button-pale" onClick={() => scrollToId('safety')}>સલામત ઇન્સ્ટોલ નિયમો <Icon type="arrow" size={18}/></button>
            </div>
            <div className="checklist-card">
              <div className="checklist-top"><span>ઇન્સ્ટોલ તૈયારી</span><b>3 માંથી {storageOkay ? '3' : '2'} પૂર્ણ</b></div>
              <ChecklistItem complete label="Wi‑Fi સાથે જોડાયેલા છો" detail="મોટી એપ્સ માટે મોબાઇલ ડેટા બચાવો." />
              <ChecklistItem complete={storageOkay} label="ઓછામાં ઓછી 1 GB જગ્યા ખાલી છે" detail={storageOkay ? `${storage} GB હાલમાં પસંદ કરેલી છે.` : 'Files એપથી જૂના ડાઉનલોડ્સ સાફ કરો.'} />
              <ChecklistItem complete={android === 6} label="Android 6.0 પર છો" detail={android === 6 ? 'વધુ એપ્સ માટે અનુકૂળ પ્રોફાઇલ.' : '5.1 માટેની એપ્સ જ ફિલ્ટરમાં બતાવવામાં આવી છે.'} />
              <div className="progress-track"><span style={{ width: `${storageOkay ? (android === 6 ? 100 : 67) : 33}%` }}></span></div>
            </div>
          </div>
        </section>

        <section id="safety" className="safety-section section-pad">
          <div className="section-heading safety-heading">
            <div><div className="eyebrow muted">સુરક્ષિત રીતે ઇન્સ્ટોલ કરો</div><h2>સોર્સ પર વિશ્વાસ રાખો,<br/>ઝડપ પર નહીં.</h2></div>
            <p>આ ગાઇડ તમને યોગ્ય દિશા બતાવે છે. દરેક એપની તાજી સિસ્ટમ જરૂરિયાત ઇન્સ્ટોલ પેજ પર તપાસવી સૌથી સારી રીત છે.</p>
          </div>
          <div className="safety-grid">
            <article><span className="safety-number">01</span><span className="safety-icon"><Icon type="shield" size={21}/></span><h3>ઓફિશિયલ સોર્સ પસંદ કરો</h3><p>Google Play અથવા એપનું અધિકૃત F-Droid / વેબ પેજ જ વાપરો. અજાણી APK સાઇટ ટાળો.</p></article>
            <article><span className="safety-number">02</span><span className="safety-icon"><Icon type="database" size={21}/></span><h3>જગ્યા અને પરમિશન જુઓ</h3><p>ઇન્સ્ટોલ પહેલાં પૂરતી ખાલી જગ્યા રાખો અને ફક્ત જરૂરી પરમિશન મંજૂર કરો.</p></article>
            <article><span className="safety-number">03</span><span className="safety-icon"><Icon type="clock" size={21}/></span><h3>જૂનું એટલે સાવધ</h3><p>કેટલીક નવી એપ્સ આ Android વર્ઝનને સમર્થન ન આપે. બેકઅપ રાખો અને વિકલ્પ પસંદ કરો.</p></article>
          </div>
          <div className="caution-banner"><Icon type="info" size={20}/><p><b>નોંધ:</b> આ પેજ ફર્મવેર ફ્લૅશ, રુટ અથવા અનધિકૃત સિસ્ટમ અપડેટની ભલામણ કરતું નથી. તે જોખમી હોઈ શકે છે.</p></div>
        </section>
      </main>

      <footer>
        <div className="footer-inner"><div className="footer-brand"><span className="brand-mark small"><span></span><span></span><span></span></span><span><b>યોગા શોધક</b><small>તમારા YT3-X90F માટે શાંત, સરળ પસંદગી.</small></span></div><p>સ્થાનિક compatibility guide · જરૂરિયાતો બદલાઈ શકે છે.</p></div>
      </footer>
      {notice && <div className="toast" role="status"><span><Icon type="check" size={16}/></span>{notice}</div>}
    </div>
  );
}

function AppCard({ app, isFavorite, onToggleFavorite }) {
  const status = app.fullyCompatible ? 'ચાલશે' : app.closeFit ? 'Android અપડેટ કરો' : app.ramOK ? 'વધુ નવી સિસ્ટમ જોઈએ' : 'વધુ RAM જોઈએ';
  const statusClass = app.fullyCompatible ? 'yes' : app.closeFit ? 'maybe' : 'no';
  return <article className={`app-card ${app.fullyCompatible ? '' : 'is-limited'}`}>
    <div className="app-card-top">
      <span className="app-icon" style={{ '--app-tint': app.tint }}>{app.icon}</span>
      <div className="app-ident"><div><h3>{app.name}</h3><span className="source-label">{app.source}</span></div><button className={`heart-button ${isFavorite ? 'is-saved' : ''}`} onClick={() => onToggleFavorite(app.id)} aria-label={isFavorite ? `${app.name} સેવમાંથી દૂર કરો` : `${app.name} સેવ કરો`}><Icon type="heart" size={19}/></button></div>
    </div>
    <p className="app-note">{app.note}</p>
    <div className="requirements"><span><b>Android</b> {app.minAndroid}.0+</span><span><b>RAM</b> {app.minRam} GB+</span><span><b>કદ</b> {app.size}</span></div>
    <div className="tag-row">{app.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    <div className="app-card-bottom"><span className={`compatibility ${statusClass}`}><i><Icon type={app.fullyCompatible ? 'check' : 'info'} size={13}/></i>{status}</span><a href={app.url} target="_blank" rel="noreferrer">જુઓ <Icon type="external" size={15}/></a></div>
  </article>;
}

function ChecklistItem({ complete, label, detail }) {
  return <div className={`check-item ${complete ? 'complete' : ''}`}><span className="check-circle">{complete ? <Icon type="check" size={15}/> : ''}</span><div><b>{label}</b><small>{detail}</small></div><span className="item-status">{complete ? 'તૈયાર' : 'બાકી'}</span></div>;
}

createRoot(document.getElementById('root')).render(<App />);
