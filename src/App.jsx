import GlassFilterDefs from './components/GlassFilterDefs';
import Hero from './sections/Hero';
import About from './sections/About';

function App() {
  return (
    <div className="app-shell">
      <GlassFilterDefs />
      <Hero />
      <main className="content-shell">
        <About />
      </main>
    </div>
  );
}

export default App;
