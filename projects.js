const projects = [
    {
      title: "CUTE (Comprehensive Unified Trading Engine)",
      description: "A modular algorithmic trading platform supporting backtesting and live execution.",
    },
    {
      title: "Bitcoin Arbitrage Bot",
      description: "Automated cross-exchange trading system utilizing price discrepancies.",
    },
  ];
  
  const projectsSection = document.getElementById('projects-list');
  projects.forEach(p => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p>`;
    projectsSection.appendChild(div);
  });
  
  /* File: papers.js */
  const papers = [
    {
      title: "Modeling Market Microstructure for Price Impact Analysis",
      description: "A paper on statistical models predicting short-term asset price movements.",
    },
    {
      title: "Risk-Adjusted Return Optimization using Monte Carlo Simulation",
      description: "Explores efficient frontier estimation with heavy-tailed distributions.",
    },
  ];
  
  const papersSection = document.getElementById('papers-list');
  papers.forEach(p => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p>`;
    papersSection.appendChild(div);
  });
  