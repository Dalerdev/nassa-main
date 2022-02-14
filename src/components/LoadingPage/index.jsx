import React from 'react';

export default function LoadingPage({children}) {
  return <div>
      
      <div className="prelaoder">
        <div class="preloader_content">
          <div class="preloader_planet">
            <div class="preloader_ring"></div>
            <div class="preloader_cover-ring"></div>
            <div class="preloader_spots">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <p>loading</p>
        </div>
        <br />
        <br />
        <br />
        <h1>{children}</h1>
      </div>
  </div>;
}
