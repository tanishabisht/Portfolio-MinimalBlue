import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components'
import { MainPage, ProjectsPage, WorksPage, ErrorPage, PhotographyPage } from './pages'
import { ThemeProvider } from './utilities'
import './styles/index.scss'

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/all-projects" element={<ProjectsPage />} />
            <Route path="/projects" element={<WorksPage />} />
            <Route path="/photography" element={<PhotographyPage />} />
            <Route path="/404" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
