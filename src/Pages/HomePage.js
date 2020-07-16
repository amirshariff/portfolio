import React from 'react';
import Hero from '../Component/Hero'
import Carousel from '../Component/Carousel'

const HomePage = (props) => {
    return (
        <div>
            <Hero hero={props} />
            <Carousel />
      </div>
    );
}

export default HomePage;
