import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { CheckIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignatureCanvas from 'react-signature-canvas';
import Card from '../../components/Card.js';
import { kycContext } from './context.js';

export default function Terms(props: { nextUri: string }) {
  const updateKyc = useContext(kycContext);
  const navigate = useNavigate();
  const ref = useRef();
  const [show, setShow] = useState(false);
  console.log({ ref });
  return (
    <div className="grid gap-8">
      <h3 className="text-3xl">Terms and Conditions</h3>
      <Card>
        <a
          href="https://www.netbank.ph/terms-and-conditions-ii"
          target="_blank"
          className="flex justify-between"
        >
          Term and Conditions
          <ChevronRightIcon className="inline h-6" />
        </a>
      </Card>
      <Card>
        <a
          href="https://www.netbank.ph/privacy-policy-ii"
          target="_blank"
          className="flex justify-between"
        >
          Privacy Policy
          <ChevronRightIcon className="inline h-6" />
        </a>
      </Card>
      <Card>
        <a
          href="https://docs.google.com/document/d/1K_Tn2mZM36NhUrfVGqoem0kHlkHMAe-F/edit?usp=share_link&ouid=103936378497683470189&rtpof=true&sd=true"
          target="_blank"
          className="flex justify-between"
        >
          Waiver of Confidentiality to Bank Secrecy
          <ChevronRightIcon className="inline h-6" />
        </a>
      </Card>
      <Card>
        <a
          href="https://docs.google.com/document/d/1fwIwgMlMTTAbnxUkxfHk8D27UNiFb7EO/edit?usp=share_link&ouid=103936378497683470189&rtpof=true&sd=true"
          target="_blank"
          className="flex justify-between"
        >
          Product Disclosure Statement
          <ChevronRightIcon className="inline h-6" />
        </a>
      </Card>
    </div>
  );
}
