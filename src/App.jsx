import './App.css'
import Header from './components/Header'
import PortfolioPage from './pages/Portfolio'
import JourneyPage from './pages/Journey'
import MyStorePage from './pages/MyStore'
import ResourcesPage from './pages/Resources'
import WorkPage from './pages/Work'
import BlogSection from './sections/BlogSection'
import CtaSection from './sections/CtaSection'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="page">
        <HeroSection />
        {/* <PortfolioPage /> */}
        <JourneyPage />
        {/* <MyStorePage /> */}
        <ProjectsSection />
        <WorkPage />
        <ResourcesPage />
        <BlogSection />
        <CtaSection />
      </main>
      <footer className="site-footer">
        <div>
          <p>©2025 RAGHAV</p>
          <p>Developed by Raghav Arora</p>
        </div>
        <div className="footer-links">
          <a href="#home">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
