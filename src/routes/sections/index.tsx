import { lazy, Suspense } from 'react';

import { Navigate, Outlet, useRoutes } from 'react-router-dom';

import { CONFIG } from 'src/config-global';
import { SplashScreen } from 'src/components/loading-screen/splash-screen';
import { MainLayout } from 'src/layouts/main/layout';

import { authRoutes } from './auth';
import { mainRoutes } from './main';
import { dashboardRoutes } from './dashboard';

// ----------------------------------------------------------------------
/* Import Pages */
const ContactPage = lazy(() => import('src/pages/contact'));
const HomePage = lazy(() => import('src/pages/home'));
const ModulesPage = lazy(() => import('src/pages/modules'));
const PricesPage = lazy(() => import('src/pages/prices'));
const SubscriptionPage = lazy(() => import('src/pages/subscription'));

export function Router() {
  return useRoutes([
    {
      element: (
        <Suspense fallback={<SplashScreen />}>
          <MainLayout>
            <Outlet />
          </MainLayout>
        </Suspense>
      ),
      children: [
        { path: '/', element: <HomePage /> }, // Page d'Accueil
        { path: 'modules', element: <ModulesPage /> }, // Page Modules
        { path: 'prices', element: <PricesPage /> },  // Page Abonnement
        { path: 'subscription', element: <SubscriptionPage /> }, // Page Souscription
        { path: 'contact', element: <ContactPage /> } // Page Contact
      ],
    },

    // Auth
    ...authRoutes,

    // Dashboard
    ...dashboardRoutes,

    // Main
    ...mainRoutes,

    // No match
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
