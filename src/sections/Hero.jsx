import DarkVeil from '../components/DarkVeil';
import LiquidGlassButton from '../components/LiquidGlassButton';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-veil" aria-hidden="true">
        <DarkVeil
          speed={0.4}
          noiseIntensity={0.02}
          scanlineIntensity={0.015}
          scanlineFrequency={1.2}
          warpAmount={0.03}
          resolutionScale={0.9}
        />
      </div>

      <div className="hero-content">
        <p className="hero-kicker">Software Engineer & CS Student</p>
        <h1>Marwan builds sharp digital experiences with a calm visual edge.</h1>

        <div className="hero-actions">
          <LiquidGlassButton href="#about" variant="violet">
            View My Work
          </LiquidGlassButton>
          <LiquidGlassButton
            href="/Marwan%20Wael%20CV.pdf"
            download="Marwan Wael CV.pdf"
          >
            Download Resume
          </LiquidGlassButton>
        </div>
      </div>
    </section>
  );
}

export default Hero;
