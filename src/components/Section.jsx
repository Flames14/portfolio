import React from 'react';

const Section = ({ title, children, delay }) => {
  return (
    <section className={`section-container animate-fade-in-up ${delay}`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
