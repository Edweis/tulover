import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useReducer, Reducer } from 'react';
import IdType from './IdType.js';
import Form from './Form.js';
import IdPhoto from './IdPhoto.js';
import Address from './Address.js';
import Signature from './Signature.js';
import Success from './Success.js';
import Layout from './Layout.js';
import { kycContext, KycData } from './context.js';
import FaceScan from './FaceScan.js';
import Terms from './Terms.js';

const steps: Array<{ path: string; data: keyof KycData }> = [
  { path: 'id-type', data: 'idType' },
  { path: 'id-photo', data: 'idPhotoUrl' },
  { path: 'face-scan', data: 'faceScanUrl' },
  { path: 'form', data: 'form' },
  { path: 'address', data: 'address' },
  { path: 'signature', data: 'signatureUrl' },
  { path: 'terms-conditions', data: 'acceptedTC' },
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
          <Route path="id-type" element={<IdType nextUri="../id-photo" />} />
          <Route path="id-photo" element={<IdPhoto nextUri="../face-scan" />} />
          <Route path="face-scan" element={<FaceScan nextUri="../form" />} />
          <Route path="form" element={<Form nextUri="../address" />} />
          <Route path="address" element={<Address nextUri="../signature" />} />
          <Route
            path="signature"
            element={<Signature nextUri="../terms-conditions" />}
          />
          <Route path="terms-conditions" element={<Terms nextUri="xxx" />} />
          <Route index path="*" element={<Navigate to="id-type" />} />
        </Route>
      </Routes>
    </kycContext.Provider>
  );
}
