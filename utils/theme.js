const getCurrentTheme = () => {
  return (p) => (p.activeTheme === 'dark' ? 'dark' : 'light');
};

export default { getCurrentTheme };
