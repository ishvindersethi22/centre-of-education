import './App.css'

function App() {
  return (
    <div className="landing-container">
      {/* Animated gradient discs */}
      <div className="gradient-bg">
        <div className="gradient-disc disc-1"></div>
        <div className="gradient-disc disc-2"></div>
        <div className="gradient-disc disc-3"></div>
        <div className="gradient-disc disc-4"></div>
      </div>

      {/* Main content */}
      <main className="content">
        <h1 className="brand">
          <span className="brand-text">bodhan</span>
          <span className="brand-dot">.</span>
          <span className="brand-ai">ai</span>
        </h1>
        <h2 className="title">Centre of Excellence in AI for Education</h2>
        <p className="tagline">Building India's Future, One Learner at a Time.</p>
        <span className="coming-soon">Coming Soon</span>
      </main>

      {/* Subtle footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} bodhan.ai</p>
      </footer>
    </div>
  )
}

export default App
