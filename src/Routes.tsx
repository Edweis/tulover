import { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './App/MainLayout.js';
import PinPassword from './Auth/PinPassword.js';
import Personal from './App/Personal/index.js';
import Transfer from './App/Transfer/index.js';
import FloatingMenu from './App/FloatingMenu.js';
import { wrapTranslateX } from './components/transition/TranslateX.js';
import KycRoutes from './App/KYC/index.js';
import IdType from './App/KYC/IdType.js';

const MOCK_USER = { id: 123212 };
const DEFAULT_USER = import.meta.env.DEV ? MOCK_USER : null;

export default function App() {
  const [auth, setAuth] = useState<typeof MOCK_USER | null>(DEFAULT_USER);
  const location = useLocation();
  const transitionKey = location.pathname.split('/')[1]; // we only want to transition when the first item of the path changes so we can do nested transition in nested components
  return (
    <>
      <AnimatePresence initial={false}>
        <Routes location={location} key={transitionKey}>
          <Route
            path="/login/*"
            element={
              auth ? (
                <Navigate to="/personal" />
              ) : (
                <PinPassword onSuccess={() => setAuth(MOCK_USER)} />
              )
            }
          />
          {auth == null && (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
          {auth != null && (
            <Route element={<MainLayout />}>
              <Route
                path="personal/*"
                element={wrapTranslateX(<Personal />, 'personal')}
              />
              <Route
                path="transfer/*"
                element={wrapTranslateX(<Transfer />, 'transfer')}
              />
              <Route
                path="hub/*"
                element={wrapTranslateX(<div>Hub</div>, 'hub')}
              />
              <Route path="kyc/*" element={<KycRoutes />} key={'asdf'} />
              <Route path="*" element={<Navigate to="personal/accounts" />} />
            </Route>
          )}
        </Routes>
      </AnimatePresence>

      {/* {auth && <FloatingMenu />} */}
    </>
  );
}
