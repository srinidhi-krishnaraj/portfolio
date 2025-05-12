
import React, { useEffect, useState } from 'react';
import './Hero.css';
import profilePic from '../assets/profile.jpg'; // use your actual image path

const texts = ['Web Design', 'Machine Learning', 'Frontend Development'];

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) => currentText.slice(0, prev.length + 1));
      }, 150);
    }

    if (!isDeleting && displayText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  const NUM_SYMBOLS = 40;
  const symbols = Array.from({ length: NUM_SYMBOLS }, () => ({
    left: `${Math.random() * 100}%`,
    size: `${16 + Math.random() * 20}px`,
    duration: `${8 + Math.random() * 5}s`,
    delay: `${Math.random() * 4}s`,
    char: Math.random() > 0.5 ? '♡' : '◇',
  }));
  return (
    <section className="hero">
      {/* falling elements container */}
      <div className="falling-symbols">
      {symbols.map((symbol, i) => (
        <span
          key={i}
          className="symbol"
          style={{
            left: symbol.left,
            fontSize: symbol.size,
            animationDuration: symbol.duration,
            animationDelay: symbol.delay,
          }}
        >
          {symbol.char}
        </span>
      ))}
    </div>
  
      {/* profile and text content */}
      <img src={profilePic} alt="Srinidhi" className="profile-pic" />
      <div className="hero-text">
        <h2>Hi There,</h2>
        <h1>I'm Srinidhi</h1>
        <h3>
          I am into <span className="typing">{displayText}</span>
          <span className="cursor">|</span>
        </h3>
      </div>
    </section>
  );
  
};

export default Hero;

