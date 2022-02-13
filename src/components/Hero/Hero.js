import ParticlesAnimation from './ParticlesAnimation';
import CubeIcon from '../../assets/img/icons/icon-02.png';

import './Hero.scss';

const MOCK_SERVICES = [
  {
    icon: CubeIcon,
    title: 'Business strategy',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
  },
  {
    icon: CubeIcon,
    title: 'Business strategy',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
  },
  {
    icon: CubeIcon,
    title: 'Business strategy',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
  },
];

const Hero = () => {
  return (
    <div className='hero-container'>
      <ParticlesAnimation />
      <div className='hero'>
        <h1 className='title'>
          Web <br /> development
        </h1>
        <div className='services'>
          {MOCK_SERVICES.map((s, index) => (
            <div key={index} className='service-container'>
              <div className='image-container'>
                <img src={s.icon} alt={s.title} />
              </div>
              <h2>{s.title}</h2>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
