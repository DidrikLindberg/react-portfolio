import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const About = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const top = sectionRef.current.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const aboutSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
  });

  return (
    <section id="about" className="about" ref={ref} ref={sectionRef}>
      <div className="avatar">
        {/* ...your avatar */}
      </div>
      <h1 className="sub-title">About Me</h1>
      <div className="row">
        <div className="col-md-6">
          <animated.div className="card" style={aboutSpring}>
            {'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl nec'}
          </animated.div>
        </div>
        <div className="col-md-6">
          <div className="card">
            {/* ...your experience card */}
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
