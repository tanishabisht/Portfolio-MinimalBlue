import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components'
import { MainPage, ProjectsPage, WorksPage, ErrorPage } from './pages'
import { ThemeProvider } from './utilities'
import './styles/index.scss'

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/404" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
