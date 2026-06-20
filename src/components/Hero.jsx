import React from 'react';

const Hero = () => {
  return (
    <section className="hero-container">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        {/* We use absolute path from public directory or a relative import. 
            Since the video is in the project root (c:\Users\user\Desktop\business portolio\portfolio\mp_.mp4)
            We should serve it from the public folder or import it.
            Wait, I should copy the mp_.mp4 into public/ or just reference it.
            Actually Vite allows referencing from public. Let's assume we copy it to public/mp_.mp4. */}
        <source src="/mp_.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      
      <div className="hero-content animate-fade-in-up">
        <h1 className="hero-title">Welcome to my Portfolio</h1>
        <p className="hero-subtitle">Business Class Open Source & Reverse Engineering Projects</p>
      </div>
    </section>
  );
};

export default Hero;
