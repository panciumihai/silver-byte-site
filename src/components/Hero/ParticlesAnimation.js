import Particles from 'react-tsparticles';

const ParticlesAnimation = () => {
  return (
    <Particles
      id='particles-animation'
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
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 45,
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
  );
};

export default ParticlesAnimation;
