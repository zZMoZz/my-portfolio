import './GalaxyBackground.css';

const SPARKLES = [
  { top: '8%', left: '18%', size: 3, delay: '0s' },
  { top: '15%', left: '78%', size: 2, delay: '1.4s' },
  { top: '32%', left: '48%', size: 2.5, delay: '2.6s' },
  { top: '46%', left: '9%', size: 2, delay: '0.8s' },
  { top: '58%', left: '88%', size: 3, delay: '3.4s' },
  { top: '72%', left: '30%', size: 2, delay: '1.9s' },
  { top: '84%', left: '65%', size: 2.5, delay: '4.2s' },
  { top: '93%', left: '15%', size: 2, delay: '2.2s' },
  { top: '4%', left: '52%', size: 2.5, delay: '3.1s' },
  { top: '22%', left: '5%', size: 3.5, delay: '0.4s' },
  { top: '27%', left: '92%', size: 2, delay: '2.9s' },
  { top: '40%', left: '70%', size: 3, delay: '1.1s' },
  { top: '52%', left: '38%', size: 2, delay: '4.6s' },
  { top: '65%', left: '58%', size: 3.5, delay: '0.2s' },
  { top: '78%', left: '95%', size: 2.5, delay: '3.7s' },
  { top: '88%', left: '42%', size: 3, delay: '1.6s' },
];

function GalaxyBackground() {
  return (
    <div className="galaxy" aria-hidden="true">
      <div className="galaxy__nebula galaxy__nebula--1" />
      <div className="galaxy__nebula galaxy__nebula--2" />
      <div className="galaxy__nebula galaxy__nebula--3" />
      <div className="galaxy__stars galaxy__stars--far" />
      <div className="galaxy__stars galaxy__stars--mid" />
      <div className="galaxy__stars galaxy__stars--near" />
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          className="galaxy__sparkle"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: s.delay,
          }}
        />
      ))}
    </div>
  );
}

export default GalaxyBackground;
