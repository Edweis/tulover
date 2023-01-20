import { useState } from 'react';
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useOutletContext,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './App/MainLayout.js';
import PinPassword from './Auth/PinPassword.js';
import PersonalLayout from './App/Personal/Layout.js';
import Accounts from './App/Personal/Accounts/index.js';
import Cards from './App/Personal/Cards.js';
import Transfer from './App/Transfer/index.js';
import Transaction from './App/Personal/Accounts/Transaction/index.js';
import AccountDetails from './App/Personal/Accounts/Transaction/AccountDetails.js';
import FloatingMenu from './App/FloatingMenu.js';
import Stocks from './App/Personal/Stocks.js';
import { wrapTranslateX } from './components/transition/TranslateX.js';

const MOCK_USER = {
  id: 123212,
};

export default function App() {
  // const [auth, setAuth] = useState<typeof MOCK_USER | null>(null);
  const outlet = useOutletContext();
  console.log({ outlet });
  const [auth, setAuth] = useState<typeof MOCK_USER | null>(MOCK_USER);
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
                element={wrapTranslateX(<PersonalLayout />)}
              ></Route>
              <Route
                path="transfer"
                element={wrapTranslateX(<Transfer />)}
              ></Route>
              <Route
                path="hub"
                element={wrapTranslateX(<div>Hub</div>)}
              ></Route>
              <Route path="*" element={<Navigate to="personal/accounts" />} />
            </Route>
          )}
        </Routes>
      </AnimatePresence>
      <FloatingMenu />
    </>
  );
}
