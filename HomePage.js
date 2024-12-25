import React from 'react';
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="section">
        <img src="path-to-seeds-image.jpg" alt="Organic Seeds" className="section-image" />
        <h2>Organic Seeds for Abundant Harvests</h2>
        <p>
          Grow sustainably with non-GMO, eco-friendly seeds that are resilient
          to pests and designed for bountiful harvests and soil health.
        </p>
        <button className="order-button">Order now</button>
      </div>

      <div className="section">
        <img src="path-to-pesticides-image.jpg" alt="Eco-Friendly Pesticides" className="section-image" />
        <h2>Eco-Friendly Pesticides for Better Yields</h2>
        <p>
          Organic pesticides protect crops, boost yields, and preserve soil
          health, supporting sustainable farming and healthier ecosystems.
        </p>
        <button className="order-button">Order more</button>
      </div>

      <div className="section">
        <img src="path-to-tools-image.jpg" alt="Innovative Tools" className="section-image" />
        <h2>Innovative Tools and Products</h2>
        <p>
          Modern farming tools enhance productivity, reduce labor, and improve
          crop management. These advancements enable healthier crops and
          sustainable practices for long-term success.
        </p>
        <button className="order-button">Order now</button>
      </div>
    </div>
  );
}

export default HomePage;