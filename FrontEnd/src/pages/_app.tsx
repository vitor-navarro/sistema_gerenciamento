import { AuthProvider } from '../../contexts/AuthContext'
import { LateralMenu } from '@/components/LateralMenu';

import type { AppProps } from 'next/app'
import { useState } from 'react';

import '@/styles/globals.scss'
import styles from '../styles/styles.module.scss';

export default function App({ Component, pageProps, router }: AppProps) {

  const excludeRoutes = ['/','/registerUser', '/login'];
  const shouldExcludeRoute = excludeRoutes.includes(router.pathname);
  const renderLateralMenu = !shouldExcludeRoute;

  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  return (
    <AuthProvider>
      {renderLateralMenu && (
        <LateralMenu
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      )}

      <div className={isMouseOver ? styles.componentWrapperMouseOver : styles.componentWrapper}>
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  )
}
