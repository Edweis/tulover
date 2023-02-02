import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { useContext } from 'react';
import { kycContext, KycData } from './context.js';

const idTypes: Array<{ value: KycData['idType']; label: string }> = [
  { label: 'Passport', value: 'Passport' },
  { label: "Driver's licence", value: "Driver's licence" },
  { label: 'UMID ID', value: 'UMID ID' },
  { label: 'Postal Id', value: 'Postal Id' },
  { label: 'PRC ID', value: 'PRC ID' },
  { label: 'SSS ID', value: 'SSS ID' },
  { label: 'TIN ID', value: 'TIN ID' },
  { label: 'PhilHealth ID', value: 'PhilHealth ID' },
];
export default function IdType(props: { nextUri: string }) {
  const updateKyc = useContext(kycContext);
  return (
    <div className="grid gap-8">
      <h3 className="text-2xl">Choose identification card</h3>
      <fieldset className="divide-gray-muted  flex flex-col divide-y">
        {idTypes.map((t) => (
          <button
            key={t.value}
            onClick={() => {
              updateKyc({ idType: t.value });
            }}
            className="border-gray-muted flex items-center justify-between gap-4 py-4 first:border-t last:!border-b"
          >
            {t.label}
            <ChevronRightIcon className="h-6" />
          </button>
        ))}
      </fieldset>
    </div>
  );
}
