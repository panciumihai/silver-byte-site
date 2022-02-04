import Particles from 'react-tsparticles';
import './Slider.scss';

const Slider = () => {
  return (
    <div className='particles-slider'>
      <Particles
        id='tsparticles'
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: false,
                mode: 'repulse',
              },
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              repulse: {
                distance: 100,
                duration: 2,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.4,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: 4,
            },
          },
          detectRetina: true,
        }}
      />
      <div className='slider'>
        <h1 className='slider-title'>SILVER BYTE WEB DEV</h1>
      </div>
    </div>
  );
};

export default Slider;
