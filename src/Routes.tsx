import MainLayout from "./App/MainLayout.js";
import { useState } from "react";
import PinPassword from "./Auth/PinPassword.js";
import { Routes, Route, Navigate } from "react-router-dom";
import PersonalLayout from "./App/Personal/Layout.js";
const MOCK_USER = {
  id: 123212,
};
import { BrowserRouter } from "react-router-dom";
import Accounts from "./App/Personal/Accounts.js";
import Cards from "./App/Personal/Cards.js";

export default function App() {
  // const [auth, setAuth] = useState<typeof MOCK_USER | null>(null);
  const [auth, setAuth] = useState<typeof MOCK_USER | null>(MOCK_USER);
  return (
    <BrowserRouter>
      <Routes>
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
        {auth == null && <Route path="*" element={<Navigate to="/login" />} />}
        <Route element={<MainLayout />}>
          <Route path="personal" element={<PersonalLayout />}>
            <Route path="accounts" element={<Accounts />} />
            <Route path="cards" element={<Cards />} />
            <Route path="*" element={<Navigate to="accounts" />} />
          </Route>
          <Route path="transfer" element={<div>Transfer</div>}></Route>
          <Route path="hub" element={<div>Hub</div>}></Route>

          <Route path="*" element={<Navigate to="personal" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
