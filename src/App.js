import React from 'react';

import { About , Header , Footer , Skills , Testimonial , Work } from './container';

export const App = () => {
  return (
    <div className='app'>
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;