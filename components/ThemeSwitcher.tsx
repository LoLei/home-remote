// 4. Use `next-themes` to change the theme
import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';
import { BiSun, BiMoon } from 'react-icons/bi';

const ThemeSwitcher = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <div>
      <Switch
        checked={isDark}
        iconOn={<BiMoon />}
        iconOff={<BiSun />}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
    </div>
  );
};

export default ThemeSwitcher;
