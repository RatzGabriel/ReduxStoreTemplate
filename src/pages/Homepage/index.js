import React from 'react';
import Directory from '../../components/Directory';
import './styles.scss';

const Homepage = (props) => {
  return (
    <section className="homepage">
      <h1>
        <Directory />
      </h1>
    </section>
  );
};

export default Homepage;
