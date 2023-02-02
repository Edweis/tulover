import cn from 'classnames';
import { BellIcon, ChartBarIcon, StarIcon } from '@heroicons/react/24/solid';
import {
  Link,
  useLocation,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useReducer, Reducer, FC, useEffect } from 'react';
import SearchInput from '../../components/SearchInput.js';
import {
  TRANSITION_DIR,
  wrapTranslateX,
} from '../../components/transition/TranslateX.js';
import IdType from './IdType.js';
import Form from './Form.js';
import FaceScanUrl from './FaceScan.js';
import IdPhoto from './IdPhoto.js';
import Address from './Address.js';
import Signature from './Signature.js';
import Success from './Success.js';
import Layout from './Layout.js';
import { kycContext, KycData } from './context.js';
import FaceScan from './FaceScan.js';

const steps: Array<{ path: string; data: keyof KycData }> = [
  { path: 'id-type', data: 'idType' },
  { path: 'id-photo', data: 'idPhotoUrl' },
  { path: 'face-scan', data: 'faceScanUrl' },
  { path: 'form', data: 'form' },
  { path: 'address', data: 'address' },
  { path: 'signature', data: 'signatureUrl' },
];

export default function KycRoutes() {
  const location = useLocation();
  const [kyc, updateKyc] = useReducer<
    Reducer<Partial<KycData>, Partial<KycData>>
  >((prevKyc, update) => ({ ...prevKyc, ...update }), {});
  return (
    <kycContext.Provider value={updateKyc}>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Navigate to="steps" />} />
        <Route path="steps" element={<Layout kyc={kyc} steps={steps.length} />}>
          <Route path="id-type" element={<IdType nextUri="id-photo" />} />
          <Route path="id-photo" element={<IdPhoto nextUri="xxx" />} />
          <Route path="face-scan" element={<FaceScan nextUri="xxx" />} />
          <Route path="form" element={<Form nextUri="xxx" />} />
          <Route path="address" element={<Address nextUri="xxx" />} />
          <Route path="signature" element={<Signature nextUri="xxx" />} />
        </Route>
      </Routes>
    </kycContext.Provider>
  );
}
