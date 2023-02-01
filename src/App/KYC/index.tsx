import cn from 'classnames';
import { BellIcon, ChartBarIcon, StarIcon } from '@heroicons/react/24/solid';
import { Link, useLocation, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useReducer, Reducer, FC } from 'react';
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

type IdT = 'Passport' | "Driver's licence" | 'UMID ID';
type Country = 'SG' | 'PH' | 'FR';
export type KycData = {
  idType: IdT;
  idPhotoUrl: string;
  faceScanUrl: string;
  form: {
    idNumber: string;
    expiryDate: string;
    title: 'Mr' | 'Mme' | 'Dr';
    firstName: string;
    middleName: string | null;
    lastName: string;
    countryOfBirth: Country;
    birthPlace: string;
    gender: 'M' | 'F';
    civilStatus: 'Single' | 'Married' | 'Separated';
    email: string;
  };
  address: {
    country: Country;
    province: string;
    city: string;
    street: string;
    zip: string;
  };
  signatureUrl: string;
};
type Steps = {
  [P in keyof KycData]: FC<{ onSubmit: (onSubmit: KycData[P]) => void }>;
};
const CompSteps: Steps = {
  idType: IdType,
  idPhotoUrl: IdPhoto,
  faceScanUrl: FaceScanUrl,
  form: Form,
  address: Address,
  signatureUrl: Signature,
};
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
  console.log({ kyc });
  return (
    <>
      <div className="mb-4 flex flex-col gap-4">Steps 1/10</div>
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          {steps
            .filter((s) => kyc[s.data] == null)
            .map((s) => (
              <Route
                key={s.path}
                path={s.path}
                element={wrapTranslateX(
                  CompSteps[s.data]({
                    onSubmit: (data) => updateKyc({ [s.data]: data }),
                  }),
                  s.path,
                )}
              />
            ))}
        </Routes>
      </AnimatePresence>
    </>
  );
}
