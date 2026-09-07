import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { ProjectDetail } from './pages/ProjectDetail';
import { About } from './pages/About';
import { Expertise } from './pages/Expertise';
import { Approach } from './pages/Approach';
import { StillBuilding } from './pages/StillBuilding';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:projectId" element={<ProjectDetail />} />
          <Route path="about" element={<About />} />
          <Route path="expertise" element={<Expertise />} />
          <Route path="approach" element={<Approach />} />
          <Route path="still-building" element={<StillBuilding />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
