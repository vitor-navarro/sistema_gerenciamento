import { AuthProvider } from '../../contexts/AuthContext'
import { LateralMenu } from '@/components/LateralMenu';

import type { AppProps } from 'next/app'
import { useState } from 'react';

import '@/styles/globals.scss'
import styles from '../styles/styles.module.scss';
import { setWhiteTheme, setDarkTheme, setCustomTheme } from '../styles/themes';

export type Theme = "WHITE" | "DARK" | "CUSTOM";

export default function App({ Component, pageProps, router }: AppProps) {

  const excludeRoutes = ['/', '/registerUser', '/login'];
  const shouldExcludeRoute = excludeRoutes.includes(router.pathname);
  const renderLateralMenu = !shouldExcludeRoute;

  const [isMouseOver, setIsMouseOver] = useState(false);

  const [theme, setTheme] = useState<Theme>("WHITE");

  const setThemeColors = (theme: Theme) => {
    const rootElement = document.documentElement;
    setTheme(theme)
    
    if (theme === "WHITE") {
      setWhiteTheme(rootElement);
    } else if (theme === "DARK") {
      setDarkTheme(rootElement);
    } else if (theme === "CUSTOM") {
      setCustomTheme(rootElement);
    }
  }

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };


  const handleThemeChange = () => {
    setThemeColors(theme === "WHITE" ? "DARK" : theme === "DARK" ? "CUSTOM" : "WHITE");
  };

  return (
    <AuthProvider>
      {renderLateralMenu && (
        <LateralMenu
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          currentTheme={theme}
          onThemeChange={handleThemeChange}
        />
      )}

      <div className={isMouseOver ? styles.componentWrapperMouseOver : styles.componentWrapper}>
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  )
}
