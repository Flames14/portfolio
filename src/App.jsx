import React, { useEffect, useState, useRef } from 'react';
import { Terminal, Monitor, Database, Tv, Volume2, VolumeX } from 'lucide-react';
import './index.css';

/**
 * Cinematic Portfolio Website
 * Main App Component designed in a premium editorial format.
 * Customized for Sharvin.
 * Includes smart video playback (plays at head, freezes on scroll).
 */
const App = () => {
  const videoRef = useRef(null);
  const [videoMuted, setVideoMuted] = useState(true);

  // Setup Intersection Observer to animate elements smoothly as they scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    document.querySelectorAll('.reveal-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Monitor scroll position: play video at the head, pause it when scrolling down
  useEffect(() => {
    const handleScrollVideo = () => {
      if (!videoRef.current) return;
      const scrollY = window.scrollY;

      // Play video if near the top (within 80px), otherwise freeze/pause it
      if (scrollY < 80) {
        videoRef.current.play().catch((err) => {
          // Catch and handle browser autoplay policy blocks gracefully
          console.log("Autoplay play call handled: ", err);
        });
      } else {
        videoRef.current.pause();
      }
    };

    window.addEventListener('scroll', handleScrollVideo, { passive: true });
    // Trigger check immediately on mount
    handleScrollVideo();

    return () => window.removeEventListener('scroll', handleScrollVideo);
  }, []);

  // Scroll to targeted section on nav link click
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Toggle video audio track state
  const toggleAudioMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setVideoMuted(nextMuted);
    }
  };

  return (
    <>
      {/* Persistent Background Video (Plays at the top, pauses on scroll) */}
      <div className="bg-video-wrapper">
        <video 
          ref={videoRef}
          className="bg-video" 
          preload="auto"
          autoPlay
          loop 
          muted={videoMuted} 
          playsInline
        >
          <source src="./mp_.mp4" type="video/mp4" />
        </video>
        <div className="bg-video-overlay"></div>
      </div>

      {/* Cinematic Scanlines Layer */}
      <div className="scanlines"></div>

      {/* Premium Minimalist Header & Navigation */}
      <header className="nav-container">
        <a 
          href="/" 
          className="nav-logo" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          PORTFOLIO
        </a>
        <div className="nav-right">
          <nav className="nav-links">
            <a href="#projects" className="nav-link" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
            <a href="#systems" className="nav-link" onClick={(e) => scrollToSection(e, 'systems')}>Systems</a>
          </nav>
          
          {/* Background video audio toggle button */}
          <button 
            className="audio-toggle-btn" 
            onClick={toggleAudioMute} 
            title={videoMuted ? "Unmute Background Video" : "Mute Background Video"}
          >
            {videoMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>
      </header>

      {/* --- HERO INTRO --- */}
      <section className="hero-sec">
        <div className="hero-box">
          <div className="hero-tag">ENGINEER | REVERSE ARCHITECT</div>
          <h1 className="hero-headline">
            <span>Built with</span>
            <span className="italic-font">Heart & Code</span>
          </h1>
          <p className="hero-description">
            I build open source tools for Android, Web, and backend. Performance first, always.
          </p>
        </div>
      </section>

      {/* --- FEATURED WORK SHOWCASE --- */}
      <main id="projects" className="editorial-sec">
        <div className="sec-header reveal-up">
          <span className="sec-label">THINGS I'VE BUILT</span>
          <h2 className="sec-title">Featured Work</h2>
        </div>

        <div className="showcase-grid">
          {/* Card 1: Vyllo */}
          <section className="editorial-card reveal-up">
            <div className="card-visual">
              <img src="./vyllo.png" alt="Vyllo Showcase" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop'; }} />
            </div>
            <div className="card-info">
              <div className="cinema-metadata-bar">
                <span className="cinema-meta-tag">ROLL A 01</span>
                <span>LENS: 50MM</span>
                <span>ISO: 100</span>
              </div>
              <h3 className="card-title">Vyllo Music Player</h3>
              <p className="card-desc">
                An Android music player that streams from YouTube Music in the background. No ads, no interruptions. Built with Kotlin and Jetpack Compose.
              </p>
              <div className="card-specs-row">
                <div className="spec-column">
                  <span className="spec-lbl">Environment</span>
                  <span className="spec-val">Android | Kotlin</span>
                </div>
                <div className="spec-column">
                  <span className="spec-lbl">Architecture</span>
                  <span className="spec-val">Jetpack Compose</span>
                </div>
              </div>
            </div>
          </section>

          {/* Card 2: Otters */}
          <section className="editorial-card reveal-up">
            <div className="card-visual">
              <img src="./otters.png" alt="Otters Showcase" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop'; }} />
            </div>
            <div className="card-info">
              <div className="cinema-metadata-bar">
                <span className="cinema-meta-tag">ROLL A 02</span>
                <span>LENS: 35MM</span>
                <span>ISO: 400</span>
              </div>
              <h3 className="card-title">Otters Media Downloader</h3>
              <p className="card-desc">
                A no-nonsense tool that grabs 4K videos and audio from the web. Powered by yt-dlp and FFmpeg 6.0.
              </p>
              <div className="card-specs-row">
                <div className="spec-column">
                  <span className="spec-lbl">Core Engine</span>
                  <span className="spec-val">yt-dlp | FFmpeg 6.0</span>
                </div>
                <div className="spec-column">
                  <span className="spec-lbl">Performance</span>
                  <span className="spec-val">Asynchronous Downloads</span>
                </div>
              </div>
            </div>
          </section>

          {/* Card 3: Invoice Pro */}
          <section className="editorial-card reveal-up">
            <div className="card-visual">
              <img src="./invoice.png" alt="Invoice Pro Showcase" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop'; }} />
            </div>
            <div className="card-info">
              <div className="cinema-metadata-bar">
                <span className="cinema-meta-tag">ROLL A 03</span>
                <span>LENS: 85MM</span>
                <span>ISO: 200</span>
              </div>
              <h3 className="card-title">Invoice Pro Creator</h3>
              <p className="card-desc">
                A simple tool that makes PDF invoices right in your browser. Everything stays on your machine — nothing leaves.
              </p>
              <div className="card-specs-row">
                <div className="spec-column">
                  <span className="spec-lbl">Core Stack</span>
                  <span className="spec-val">Vanilla JS | PDF.js</span>
                </div>
                <div className="spec-column">
                  <span className="spec-lbl">Rasterization</span>
                  <span className="spec-val">Browser Generation</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* --- EDITORIAL INTERSTITIAL --- */}
      <section className="statement-sec reveal-up">
        <div className="statement-box">
          <p className="statement-text">
            "Good code works. Great code feels right."
          </p>
        </div>
      </section>

      {/* --- SYSTEMS SECTIONS --- */}
      <section id="systems" className="editorial-sec">
        <div className="sec-header reveal-up">
          <span className="sec-label">BACKEND & SYSTEMS</span>
          <h2 className="sec-title">Logic Architecture</h2>
        </div>

        <div className="systems-grid">
          <div className="system-card reveal-up">
            <Monitor className="system-icon" size={26} />
            <h3 className="system-title">WorkForce HRMS</h3>
            <p className="system-desc">An enterprise dashboard built with FastAPI and React. Handles payroll, auth, and HR data in one place.</p>
          </div>

          <div className="system-card reveal-up">
            <Terminal className="system-icon" size={26} />
            <h3 className="system-title">Quickdesk Workspace</h3>
            <p className="system-desc">An Electron desktop app for dev ops and API log coordination. Keeps your team in sync.</p>
          </div>

          <div className="system-card reveal-up">
            <Database className="system-icon" size={26} />
            <h3 className="system-title">Data Intel</h3>
            <p className="system-desc">A Dockerized PostgreSQL server that parses telemetry data and feeds analytics using Python.</p>
          </div>

          <div className="system-card reveal-up">
            <Tv className="system-icon" size={26} />
            <h3 className="system-title">NexusTV App</h3>
            <p className="system-desc">A cross-platform IPTV app built with Flutter. Works on mobile and desktop.</p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="footer-sec">
        <div>&copy; {new Date().getFullYear()} Sharvin. All rights reserved.</div>
        <div>DESIGNED BY SHARVIN</div>
      </footer>
    </>
  );
};

export default App;
