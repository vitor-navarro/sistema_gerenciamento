import '@/styles/globals.scss'
import { AuthProvider } from '../../contexts/AuthContext'
import type { AppProps } from 'next/app'
import { LateralMenu } from '@/components/LateralMenu';

export default function App({ Component, pageProps, router }: AppProps) {
  const excludeRoutes = ['/','/registerUser', '/login'];
  
  const shouldExcludeRoute = excludeRoutes.includes(router.pathname);

  const renderLateralMenu = !shouldExcludeRoute;

  return (
    <AuthProvider>
      {renderLateralMenu && <LateralMenu />}

      <Component {...pageProps} />
    </AuthProvider>
  )
}
