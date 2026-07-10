import { useEffect, useState } from 'react';
import './Loader.css';

const MIN_DISPLAY_MS = 900;

function Loader({ onFinish }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const start = Date.now();

    const finish = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(MIN_DISPLAY_MS - elapsed, 0);
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(onFinish, 500);
      }, remaining);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish);
      return () => window.removeEventListener('load', finish);
    }
  }, [onFinish]);

  return (
    <div className={`loader${isExiting ? ' loader-exit' : ''}`} role="status" aria-live="polite">
      <span className="sr-only">Loading</span>
      <div className="loader-rings" aria-hidden="true">
        <span className="loader-ring loader-ring-outer" />
        <span className="loader-ring loader-ring-mid" />
        <span className="loader-ring loader-ring-inner" />
      </div>
    </div>
  );
}

export default Loader;
