import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState('light');
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);

  return (
    <Button
      onClick={() => setActiveTheme(inactiveTheme)}
      variant={`outline-${activeTheme === 'dark' ? 'dark' : 'light'}`}
    >
      {activeTheme === 'dark' ? '☀️' : '🌙'}
    </Button>
  );
};

export default ThemeToggle;
