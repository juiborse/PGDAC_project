import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import './dashboard.css'; // Use your existing CSS file

const Header = () => (
    <header>
        <div className="logo"></div>
        <nav>
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Fund Performance</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Stock Screener</a></li>
                <li><a href="#">Manage Portfolio</a></li>
                <li><a href="#">Profile</a></li>
            </ul>
        </nav>
        <div className="user-profile">
            <div className="user-icon">U</div>
        </div>
    </header>
);

const WelcomeSection = () => (
    <section className="welcome-section">
        <h2>Name</h2>
        <p>Here is your command center</p>
    </section>
);

const Recommendations = () => (
    <section className="recommendations">
        <div className="card">
            <h3>Today's Recommendation</h3>
            <button className="subscribe-button">Subscribe to Unlock</button>
        </div>
        <div className="card">
            <h3>This Week's Recommendation</h3>
            <button className="subscribe-button">Subscribe to Unlock</button>
        </div>
    </section>
);

const StocksMarket = () => (
    <section className="stocks-market">
        
           
            <div className="stock-card">
                
            
        </div>
        
    </section>
);





        

       

        

    
    





const PastPerformance = () => (
    <section className="past-performance">
        <h3>Past Performance</h3>
        <div className="performance-metrics">
            {/* Performance metrics go here */}
        </div>
        <div className="view-all">
            <a href="#">View All</a>
        </div>
    </section>
);

const Dashboard = () => (
    <div>
        <Header />
        <WelcomeSection />
        <Recommendations />
        <StocksMarket />
        
        
        
        <PastPerformance />
    </div>
);

export default Dashboard;
