import { createContext, Dispatch } from 'react';

type IdT =
  | 'Passport'
  | "Driver's licence"
  | 'UMID ID'
  | 'Postal Id'
  | 'PRC ID'
  | 'SSS ID'
  | 'PhilHealth ID'
  | 'TIN ID';
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
  acceptedTC: boolean;
};

export const kycContext = createContext<(kyc: Partial<KycData>) => void>(() => {
  // void
});
