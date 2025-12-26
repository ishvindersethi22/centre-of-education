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
        <h1 className="title">Centre of Education</h1>
        <p className="tagline">Empowering minds, shaping futures</p>
        <span className="coming-soon">Coming Soon</span>
      </main>

      {/* Subtle footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Centre of Education</p>
      </footer>
    </div>
  )
}

export default App
