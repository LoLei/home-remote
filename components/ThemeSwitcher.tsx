// 4. Use `next-themes` to change the theme
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';

const ThemeSwitcher = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div>
      The current theme is: {type}
      <Switch checked={isDark} onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} />
    </div>
  );
};

export default ThemeSwitcher;
