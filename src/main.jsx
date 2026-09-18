import { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, Camera, ChevronLeft, ChevronRight, Clock3, MapPin, Menu as MenuIcon, Phone, Sparkles, X } from 'lucide-react'
import './styles.css'

const images = {
  hero: 'https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/1-2bb92ec.png/:/rs=w:1400,h:900,cg:true,m',
  story: 'https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/IMG_2834.jpeg/:/rs=w:900,h:700,cg:true,m',
  food: 'https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/0720-76.jpg/:/rs=w:1000,h:700,cg:true,m',
  room: 'https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/260426-5.jpg/:/rs=w:900,h:700,cg:true,m',
  catering: 'https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/IMG_4086.jpeg/:/rs=w:900,h:700,cg:true,m',
  foodTray: 'https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/0720-56.jpg/:/rs=w:700,h:900,cg:true,m',
  library: 'https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/260426-8.jpg/:/rs=w:700,h:500,cg:true,m',
  ballroom: 'https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/ballroom%20(2).png/:/rs=w:900,h:700,cg:true,m',
}

const heroSlides = [
  { src: images.hero, alt: 'Spacious Maria Kucina Familia ballroom with warm wood and chandeliers' },
  { src: images.story, alt: 'A welcoming dining scene at Maria Kucina Familia' },
  { src: images.catering, alt: 'Maria Kucina Familia catering prepared for a gathering' },
  { src: images.room, alt: 'A private dining room at Maria Kucina Familia' },
]

const gallery = [
  { src: images.food, alt: 'Food tray prepared at Maria Kucina Familia', tall: true },
  { src: images.room, alt: 'The Music Room at Maria Kucina Familia' },
  { src: images.catering, alt: 'Catering service at Maria Kucina Familia', tall: true },
  { src: images.library, alt: 'The Library private room' },
  { src: images.ballroom, alt: 'The Maria Kucina Familia ballroom', tall: true },
  { src: images.foodTray, alt: 'A prepared food tray for take out' },
]

const guestNotes = [
  { quote: 'A table where everyone is welcome.', image: images.story, alt: 'Guests sharing a meal at Maria Kucina Familia', label: 'Family table' },
  { quote: 'Good food, warm halls, and a place to come home to.', image: images.food, alt: 'Food tray prepared at Maria Kucina Familia', label: 'The Maria table' },
  { quote: 'Hospitality that feels like home.', image: images.room, alt: 'A private dining room at Maria Kucina Familia', label: 'Negrense welcome' },
]

const mapEmbed = 'https://www.google.com/maps?q=10.682099,122.96564&z=14&output=embed'

const navLinks = [
  ['Our Story', 'story'], ['Menu', 'menu'], ['Gallery', 'gallery'], ['Events', 'events'], ['Contact', 'contact']
]

const menuSections = [
  {
    title: 'Ala Carte Menu',
    note: 'Available from 10 AM to 2 PM and 5 PM to 9 PM',
    images: [
      ['https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/6-0946922.jpg/:/rs=w:1023,h:1447', 'Ala carte menu page one'],
      ['https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/7-93b8f1d.jpg/:/rs=w:1023,h:1447', 'Ala carte menu page two'],
      ['https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/8-e3c9307.jpg/:/rs=w:1023,h:1447', 'Ala carte menu page three'],
      ['https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/9-90a745c.jpg/:/rs=w:1023,h:1447', 'Ala carte menu page four'],
      ['https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/10-8405789.jpg/:/rs=w:1023,h:1447', 'Ala carte menu page five'],
      ['https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/13-3df3919.jpg/:/rs=w:1023,h:1447', 'Ala carte menu page six'],
    ],
  },
  {
    title: 'Breakfast Menu',
    note: 'Special Breakfast menu available from 6 AM to 10 AM. All Day Breakfast Menu is available anytime within our regular store hours.',
    images: [['https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/Menu.jpg/:/rs=w:1023,h:1447', 'Breakfast menu']],
  },
  {
    title: 'Cocktails, Wines, Liquor',
    note: 'For the evening table.',
    images: [
      ['https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/14-7bf5ffd.jpg/:/rs=w:1023,h:1447', 'Cocktails and wines menu page one'],
      ['https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/15-0e31039.jpg/:/rs=w:1023,h:1447', 'Cocktails and wines menu page two'],
      ['https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/16.jpg/:/rs=w:1023,h:1447', 'Liquor menu page one'],
      ['https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/17.jpg/:/rs=w:1023,h:1447', 'Liquor menu page two'],
      ['https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/18.jpg/:/rs=w:1023,h:1447', 'Liquor menu page three'],
      ['https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/19.jpg/:/rs=w:1023,h:1447', 'Liquor menu page four'],
    ],
  },
  {
    title: 'Pasalubong, Cakes, Pastries',
    note: 'Something to bring home.',
    images: [
      ['https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/21.png/:/rs=w:1023,h:1447', 'Pasalubong, cakes and pastries page one'],
      ['https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/20.png/:/rs=w:1023,h:1447', 'Pasalubong, cakes and pastries page two'],
    ],
  },
]

const menuGallery = [
  ['Untitled design (3).png', 'Menu gallery image'], ['Untitled design (4).png', 'Menu gallery image'], ['4-0003.png', 'Menu gallery image'], ['5-0002.png', 'Menu gallery image'], ['10.png', 'Menu gallery image'], ['1.png', 'Menu gallery image'], ['2-0003.png', 'Menu gallery image'], ['Untitled design.png', 'Menu gallery image'], ['9.png', 'Menu gallery image'], ['6-0003.png', 'Menu gallery image'],
].map(([name, alt]) => [`https://img1.wsimg.com/isteam/ip/c89b158a-ab4d-42fa-86ff-75a8683d3ad2/${encodeURIComponent(name).replace(/%20/g, '%20')}/:/rs=w:1023,h:1535`, alt])

const spellWord = (word, className = '') => <span className={`spell-word ${className}`} aria-hidden="true">{[...word].map((letter, index) => <span className="spell-letter" style={{ '--letter-index': index }} key={`${letter}-${index}`}>{letter}</span>)}</span>

function MenuPage() {
  const [lightbox, setLightbox] = useState(null)
  const [zoom, setZoom] = useState(1)
  const touchStart = useRef(null)
  const menuImages = menuSections.flatMap((section) => section.images)
  const allMenuImages = [...menuImages, ...menuGallery]
  const activeImage = lightbox === null ? null : allMenuImages[lightbox]

  const moveToMenuImage = (direction) => {
    setLightbox((currentImage) => currentImage === null ? null : (currentImage + direction + allMenuImages.length) % allMenuImages.length)
  }

  const handleMenuTouchStart = (event) => {
    const touch = event.changedTouches[0]
    touchStart.current = { x: touch.clientX, y: touch.clientY }
  }

  const handleMenuTouchEnd = (event) => {
    if (!touchStart.current) return
    const touch = event.changedTouches[0]
    const horizontalDistance = touch.clientX - touchStart.current.x
    const verticalDistance = touch.clientY - touchStart.current.y
    touchStart.current = null

    if (Math.abs(horizontalDistance) < 50 || Math.abs(horizontalDistance) < Math.abs(verticalDistance)) return
    event.stopPropagation()
    moveToMenuImage(horizontalDistance < 0 ? 1 : -1)
  }

  useEffect(() => {
    document.title = 'Menu | Maria Kucina Familia | Bacolod City'
    const description = 'Explore the verified menu categories at Maria Kucina Familia in Bacolod City, including breakfast, ala carte dishes, drinks, cakes, and pastries.'
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://mariakucinafamilia.com/menu')
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', 'https://mariakucinafamilia.com/menu')
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Menu | Maria Kucina Familia')
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', 'Menu | Maria Kucina Familia')
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description)
    return () => { document.title = 'Maria Kucina Familia | Bacolod City' }
  }, [])

  useEffect(() => {
    document.body.style.overflow = lightbox === null ? '' : 'hidden'
    setZoom(1)
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <>
      <header className="site-header menu-header">
        <a className="wordmark" href="/" aria-label="Maria Kucina Familia home"><span>Maria Kucina</span><strong>Familia</strong></a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="/">Home</a><a className="active" href="/menu">Menu</a><a href="/#story">Our Story</a><a href="/#gallery">Gallery</a><a href="/#events">Events</a><a href="/#contact">Contact</a>
          <a className="nav-cta" href="tel:+639369445416"><Phone size={15} /> Call us</a>
        </nav>
        <a className="menu-back" href="/" aria-label="Back to home"><X size={19} /></a>
      </header>
      <main className="menu-page">
        <section className="menu-hero"><div className="menu-hero-copy"><p className="eyebrow"><span /> From our table</p><h1>Our <em>menu.</em></h1><p>We’re open daily for breakfast beginning at 6 AM, with our à la carte menu available for lunch and dinner.</p><div className="menu-hours"><span>Breakfast</span><strong>6 AM - 10 AM</strong><span>Lunch & dinner</span><strong>10 AM - 2 PM & 5 PM - 9 PM</strong></div></div><img src={images.food} alt="Food prepared at Maria Kucina Familia" /></section>
        <section className="menu-intro"><p className="eyebrow"><span /> Take your time</p><h2>Good food,<br /><em>well shared.</em></h2><p>Browse the menus below and find something for the table, the morning, the evening, or the journey home.</p><nav className="menu-jump" aria-label="Menu categories">{menuSections.map((section, index) => <a href={`#menu-${index}`} key={section.title}>{String(index + 1).padStart(2, '0')} <span>{section.title}</span></a>)}</nav></section>
        {menuSections.map((section, sectionIndex) => <section className="menu-category" id={`menu-${sectionIndex}`} key={section.title}><div className="menu-category-heading"><span className="category-number">{String(sectionIndex + 1).padStart(2, '0')}</span><div><h2>{section.title}</h2><p>{section.note}</p></div></div><div className="menu-pages">{section.images.map((image, imageIndex) => { const imageIndexInMenu = menuImages.indexOf(image); return <button className="menu-page-image" key={image[0]} onClick={() => setLightbox(imageIndexInMenu)}><img src={image[0]} alt={image[1]} loading="lazy" /><span>View page {imageIndex + 1} <ArrowUpRight size={15} /></span></button> })}</div></section>)}
        <section className="menu-guidance"><div><p className="eyebrow light"><span /> A note for your visit</p><h2>Come comfortable.<br /><em>Stay awhile.</em></h2></div><div><h3>Smart casual dress code</h3><p>For all guests: no flip-flops, slippers, or rubber slides.</p><p>For men: no sleeveless clothing, jersey/basketball shorts, and open-toed shoes.</p></div></section>
        <section className="menu-category menu-gallery-category"><div className="menu-category-heading"><span className="category-number">05</span><div><h2>Menu Gallery</h2><p>A closer look at the table.</p></div></div><div className="menu-gallery-grid">{menuGallery.map((image, index) => <button className="menu-gallery-image" key={image[0]} onClick={() => setLightbox(menuImages.length + index)}><img src={image[0]} alt={image[1]} loading="lazy" /></button>)}</div></section>
      </main>
      <footer className="footer menu-footer"><div className="footer-brand"><a className="wordmark light-wordmark" href="/"><span>Maria Kucina</span><strong>Familia</strong></a><p>Good food, warm halls,<br />and a place to come home to.</p></div><div className="footer-nav"><span>Explore</span><a href="/">Home</a><a href="/menu">Menu</a><a href="/#contact">Contact</a></div><div className="footer-nav"><span>Connect</span><a href="tel:+639369445416">+63 936 944 5416</a><a href="https://www.instagram.com/mariakucinafamilia" target="_blank" rel="noreferrer">Instagram</a></div></footer>
      {activeImage && <div className="lightbox menu-lightbox" role="dialog" aria-modal="true" aria-label="Menu image viewer" onClick={() => setLightbox(null)} onTouchStart={handleMenuTouchStart} onTouchEnd={handleMenuTouchEnd}><button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close menu image"><X /></button><div className="zoom-controls" onClick={(event) => event.stopPropagation()}><button onClick={() => setZoom((currentZoom) => Math.max(.75, currentZoom - .25))} aria-label="Zoom out">-</button><span>{Math.round(zoom * 100)}%</span><button onClick={() => setZoom((currentZoom) => Math.min(2.5, currentZoom + .25))} aria-label="Zoom in">+</button></div><button className="menu-lightbox-nav menu-lightbox-prev" onClick={(event) => { event.stopPropagation(); moveToMenuImage(-1) }} aria-label="Previous menu image"><ChevronLeft /></button><img className="zoomable-menu-image" style={{ transform: `scale(${zoom})` }} src={activeImage[0]} alt={activeImage[1]} onClick={(event) => event.stopPropagation()} /><button className="menu-lightbox-nav menu-lightbox-next" onClick={(event) => { event.stopPropagation(); moveToMenuImage(1) }} aria-label="Next menu image"><ChevronRight /></button></div>}
    </>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lightbox, setLightbox] = useState(null)
  const [activeHeroSlide, setActiveHeroSlide] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const slideshow = window.setInterval(() => {
      setActiveHeroSlide((currentSlide) => (currentSlide + 1) % heroSlides.length)
    }, 3000)
    return () => window.clearInterval(slideshow)
  }, [])

  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' })
    document.querySelectorAll('.reveal').forEach((element) => reveal.observe(element))
    return () => reveal.disconnect()
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isSmallScreen = window.matchMedia('(max-width: 767px)').matches
    const heroImage = document.querySelector('.hero-image')
    const storyImage = document.querySelector('.story-image img')
    const header = document.querySelector('.site-header')
    const progress = document.querySelector('.scroll-progress')
    let animationFrame = 0

    const updateParallax = () => {
      animationFrame = 0
      const scrollPosition = window.scrollY
      const scrollRange = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = scrollRange > 0 ? Math.min(scrollPosition / scrollRange, 1) : 0
      const storyBounds = storyImage?.getBoundingClientRect()
      const storyProgress = storyBounds
        ? (window.innerHeight - storyBounds.top) / (window.innerHeight + storyBounds.height)
        : 0
      const storyShift = isSmallScreen ? 0 : Math.max(-18, Math.min(18, (0.5 - storyProgress) * 36))

      header?.classList.toggle('is-scrolling', scrollPosition > 16)
      progress?.style.setProperty('--scroll-progress', `${scrollPercent * 100}%`)
      if (!prefersReducedMotion) {
        heroImage?.style.setProperty('--parallax-y', `${Math.min(scrollPosition * (isSmallScreen ? 0.12 : 0.5), isSmallScreen ? 24 : 150)}px`)
        storyImage?.style.setProperty('--story-shift', `${storyShift}px`)
      }
    }

    const handleScroll = () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
      animationFrame = window.requestAnimationFrame(updateParallax)
    }

    updateParallax()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={() => scrollTo('top')} aria-label="Maria Kucina Familia home">
          <span>Maria Kucina</span><strong>Familia</strong>
        </a>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Primary navigation">
          <button onClick={() => scrollTo('top')}>Home</button>
          {navLinks.map(([label, id]) => label === 'Menu' ? <a key={id} href="/menu">{label}</a> : <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}
          <a className="nav-cta" href="tel:+639369445416"><Phone size={15} /> Call us</a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <MenuIcon />}
        </button>
      </header>
      <div className="scroll-progress" aria-hidden="true" />

      <main id="top">
        <section className="hero">
          <div className="hero-slideshow" aria-label="Maria Kucina Familia atmosphere slideshow">
            {heroSlides.map((slide, index) => <img className={index === activeHeroSlide ? 'hero-image is-active' : 'hero-image'} src={slide.src} alt={slide.alt} key={slide.src} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'low'} decoding="async" />)}
          </div>
          <div className="hero-shade" />
          <div className="hero-content reveal">
            <p className="eyebrow light"><span /> A table for every story</p>
            <h1 aria-label="Come home to Maria.">{spellWord('Come')} {spellWord('home')}<br />{spellWord('to', 'accent')} {spellWord('Maria.', 'accent')}</h1>
            <p className="hero-copy">A beloved gathering place in Bacolod, where good food, Negrense hospitality, and the joy of being together share the same table.</p>
            <div className="hero-actions">
              <button className="button button-light" onClick={() => scrollTo('menu')}>Explore the menu <ArrowUpRight size={17} /></button>
              <button className="text-link light-link" onClick={() => scrollTo('contact')}>Plan your visit <ArrowUpRight size={17} /></button>
            </div>
          </div>
          <div className="hero-note"><span>Est. in Bacolod</span><span className="line" /><span>Open daily</span></div>
          <div className="hero-progress" aria-label="Choose hero image">
            {heroSlides.map((slide, index) => <button className={index === activeHeroSlide ? 'is-active' : ''} key={slide.src} onClick={() => setActiveHeroSlide(index)} aria-label={`Show slide ${index + 1}`} aria-pressed={index === activeHeroSlide} />)}
          </div>
        </section>

        <section className="story section" id="story">
          <div className="story-image reveal"><img src={images.story} alt="Guests sharing a meal at Maria Kucina Familia" loading="lazy" /><span className="image-stamp"><span>A place</span><i>to belong</i></span></div>
          <div className="story-copy reveal">
            <p className="eyebrow"><span /> Our story</p>
            <h2>More than a restaurant.<br /><em>A family gathering.</em></h2>
            <p>In the bustling heart of Bacolod City, Maria Kucina Familia is more than just a restaurant. It is a beloved gathering place where stories are shared and memories are made, accompanied by the Negrense tradition of heartfelt hospitality.</p>
            <p>After over nine years of welcoming guests, Maria begins a new chapter in a brand new location. The setting may be new, but the essence remains: a warm, welcoming, soulful neighbor that cherishes everyone.</p>
            <button className="text-link dark-link" onClick={() => scrollTo('contact')}>Find your way to us <ArrowUpRight size={17} /></button>
          </div>
        </section>

        <section className="menu-section section" id="menu">
          <div className="section-heading reveal"><div><p className="eyebrow"><span /> From our table</p><h2>Food made for <em>sharing.</em></h2></div><a className="text-link dark-link" href="/menu">View full menu <ArrowUpRight size={17} /></a></div>
          <div className="menu-grid reveal">
            <a className="menu-feature" href="/menu"><img src={images.food} alt="Maria Kucina Familia food tray" loading="lazy" /><span className="menu-label">Ala carte<br /><b>10 AM - 2 PM & 5 PM - 9 PM</b></span></a>
            <div className="menu-list">
              <a href="/menu#menu-1"><span>01</span><strong>Breakfast</strong><small>Special & all-day</small><ArrowUpRight size={17} /></a>
              <a href="/menu#menu-2"><span>02</span><strong>Cocktails, wine & liquor</strong><small>For the evening table</small><ArrowUpRight size={17} /></a>
              <a href="/menu#menu-3"><span>03</span><strong>Pasalubong, cakes & pastries</strong><small>Something to bring home</small><ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="experience section" id="events">
          <div className="experience-intro reveal"><p className="eyebrow light"><span /> The Maria experience</p><h2>Bring your people.<br /><em>We'll make room.</em></h2><p>From an easy family meal to a milestone worth gathering for, Maria is designed around the comfort of coming together.</p></div>
          <div className="experience-cards">
            <article className="experience-card reveal"><div className="card-number">01</div><h3>Dine in</h3><p>Take your time at our new home in La Salle Avenue, Bacolod. We are open daily for breakfast, lunch, and dinner.</p><button className="circle-arrow" onClick={() => scrollTo('contact')} aria-label="See opening hours"><ArrowUpRight size={18} /></button></article>
            <article className="experience-card reveal"><div className="card-number">02</div><h3>Take out</h3><p>Food trays bring the quality of restaurant meals to your table. Available for groups of 4-6 or 8-10 with at least two days' pre-order.</p><a className="circle-arrow" href="https://mariakucinafamilia.com/food-trays" target="_blank" rel="noreferrer" aria-label="See food trays"><ArrowUpRight size={18} /></a></article>
            <article className="experience-card reveal"><div className="card-number">03</div><h3>Celebrate</h3><p>Private rooms, a ballroom for 200+ guests, and outside catering help turn meaningful occasions into memories.</p><button className="circle-arrow" onClick={() => scrollTo('contact')} aria-label="Inquire about events"><ArrowUpRight size={18} /></button></article>
          </div>
        </section>

        <section className="gallery section" id="gallery">
          <div className="section-heading reveal"><div><p className="eyebrow"><span /> Around Maria</p><h2>A room full of <em>stories.</em></h2></div><a className="social-link" href="https://www.instagram.com/mariakucinafamilia" target="_blank" rel="noreferrer"><Camera size={17} /> @mariakucinafamilia</a></div>
          <div className="gallery-grid reveal">{gallery.map((item, index) => <button className={item.tall ? 'gallery-item tall' : 'gallery-item'} key={item.src} onClick={() => setLightbox(index)}><img src={item.src} alt={item.alt} loading="lazy" /><span className="gallery-plus">+</span></button>)}</div>
        </section>

        <section className="philosophy">
          <div className="philosophy-inner reveal"><p className="eyebrow light"><span /> What guides us</p><h2>Good food is only<br /><em>the beginning.</em></h2><div className="principles"><div><Sparkles size={19} /><strong>Family</strong><span>A table where everyone is welcome.</span></div><div><MapPin size={19} /><strong>Local</strong><span>Fresh ingredients, best in season.</span></div><div><Clock3 size={19} /><strong>Care</strong><span>Hospitality that feels like home.</span></div></div></div>
        </section>

        <section className="guest-notes section" id="guest-notes">
          <div className="section-heading reveal"><div><p className="eyebrow"><span /> From the table</p><h2>Made for <em>coming back.</em></h2></div><p className="section-aside">The feeling we hope stays with you long after the last plate is cleared.</p></div>
          <div className="guest-notes-grid">{guestNotes.map((note, index) => <article className="guest-note reveal" key={note.label}><div className="guest-note-image"><img src={note.image} alt={note.alt} loading="lazy" /><span>0{index + 1}</span></div><p className="guest-note-quote">“{note.quote}”</p><span className="guest-note-label">{note.label}</span></article>)}</div>
        </section>

        <section className="visit section" id="contact">
          <div className="visit-copy reveal"><p className="eyebrow"><span /> Guest information</p><h2>Come as you are.<br /><em>Stay awhile.</em></h2><div className="visit-detail"><h3>Smart casual, always comfortable</h3><p>No flip-flops, slippers, or rubber slides. For men, no sleeveless clothing, jersey/basketball shorts, or open-toed shoes.</p></div><div className="visit-detail"><h3>We're open daily</h3><p>6 AM - 2 PM<br />5 PM - 9 PM</p></div></div>
          <div className="contact-panel reveal"><div className="contact-top"><p className="eyebrow light"><span /> Find us</p><h2>See you at<br /><em>Maria.</em></h2></div><div className="map-preview"><iframe src={mapEmbed} title="Maria Kucina Familia location map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><div className="contact-lines"><a href="https://maps.google.com/maps?ll=10.682099,122.96564&z=14" target="_blank" rel="noreferrer"><MapPin size={18} /><span>La Salle Avenue<br />Bacolod, Negros Occidental<br />Philippines</span><ArrowUpRight size={16} /></a><a href="tel:+639369445416"><Phone size={18} /><span>+63 936 944 5416</span><ArrowUpRight size={16} /></a><a href="https://www.instagram.com/mariakucinafamilia" target="_blank" rel="noreferrer"><Camera size={18} /><span>Follow us on Instagram</span><ArrowUpRight size={16} /></a></div><a className="map-button" href="https://maps.google.com/maps?ll=10.682099,122.96564&z=14" target="_blank" rel="noreferrer">Open in Google Maps <ArrowUpRight size={17} /></a></div>
        </section>
      </main>

      <footer className="footer"><div className="footer-brand"><a className="wordmark light-wordmark" href="#top"><span>Maria Kucina</span><strong>Familia</strong></a><p>Good food, warm halls,<br />and a place to come home to.</p></div><div className="footer-nav"><span>Explore</span><button onClick={() => scrollTo('story')}>Our story</button><button onClick={() => scrollTo('menu')}>Menu</button><button onClick={() => scrollTo('gallery')}>Gallery</button></div><div className="footer-nav"><span>Connect</span><a href="https://www.facebook.com/467841160256037" target="_blank" rel="noreferrer">Facebook</a><a href="https://www.instagram.com/mariakucinafamilia" target="_blank" rel="noreferrer">Instagram</a><a href="tel:+639369445416">+63 936 944 5416</a></div><div className="footer-end"><span>© 2026 Maria Kucina Familia</span><span>Bacolod City, Philippines</span></div></footer>

      {lightbox !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer" onClick={() => setLightbox(null)}><button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close image viewer"><X /></button><button className="lightbox-nav prev" onClick={(event) => { event.stopPropagation(); setLightbox((lightbox - 1 + gallery.length) % gallery.length) }} aria-label="Previous image"><ChevronLeft /></button><img src={gallery[lightbox].src} alt={gallery[lightbox].alt} onClick={(event) => event.stopPropagation()} /><button className="lightbox-nav next" onClick={(event) => { event.stopPropagation(); setLightbox((lightbox + 1) % gallery.length) }} aria-label="Next image"><ChevronRight /></button></div>}
    </>
  )
}

export default App

function Site() {
  return window.location.pathname === '/menu' ? <MenuPage /> : <App />
}

createRoot(document.getElementById('root')).render(<Site />)
