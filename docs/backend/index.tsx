import React from 'react';
import Layout from '@theme/Layout';

const HomePage = () => {
  return (
    <Layout
      title="Welcome to Lawgorithm"
      description="Explore insights and updates from our team">
      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>Welcome to Lawgorithm</h1>
        <p>We specialize in combining law and technology to create efficient solutions for complex legal challenges.</p>
        <section style={{ marginTop: '2rem' }}>
          <h2>About Us</h2>
          <p>Our team is dedicated to leveraging algorithms and innovative tools to revolutionize the legal industry.</p>
        </section>
        <section style={{ marginTop: '2rem' }}>
          <h2>Recent Projects</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>- Legal Document Analyzer</li>
            <li>- Smart Contract Validator</li>
            <li>- AI-Powered Legal Research Tool</li>
          </ul>
        </section>
        <section style={{ marginTop: '2rem' }}>
          <h2>Get Involved</h2>
          <p>Interested in collaborating with us? <a href="/contact">Contact us</a> to learn more!</p>
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
