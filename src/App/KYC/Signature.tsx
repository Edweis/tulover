import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { CheckIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignatureCanvas from 'react-signature-canvas';
import Card from '../../components/Card.js';
import { kycContext } from './context.js';

export default function Signature(props: { nextUri: string }) {
  const updateKyc = useContext(kycContext);
  const navigate = useNavigate();
  const ref = useRef();
  const [show, setShow] = useState(false);
  console.log({ ref });
  return (
    <div className="grid gap-8">
      <h3 className="text-3xl">Signature</h3>
      <Card>
        <Link to={props.nextUri} className="flex justify-between">
          Upload signature <ChevronRightIcon className="inline h-6" />
        </Link>
      </Card>
      <Card>
        <div className="flex justify-between" onClick={() => setShow(true)}>
          Draw signature <ChevronRightIcon className="inline h-6" />
        </div>
      </Card>
      {show && (
        <div className="fixed inset-0 flex bg-black">
          <div
            className="my-8 ml-4 flex rotate-180 "
            style={{
              writingMode: 'vertical-rl',
            }}
          >
            <TrashIcon className="inline h-8 w-8 shrink-0 rotate-90 rounded-full border p-2" />
            <span className="ml-2 h-screen  text-center">
              Draw your signature here
            </span>
            <CheckIcon
              onClick={() => {
                updateKyc({ signatureUrl: 'https://...' });
                setShow(false);
                navigate(props.nextUri);
              }}
              className="inline h-8 w-8 shrink-0 rotate-90 rounded-full border border-blue-500 bg-blue-500 p-2"
            />
          </div>
          <SignatureCanvas
            // ref={ref}
            penColor="white"
            canvasProps={{
              minWidth: '120px',
              minHeight: '120px',
              className:
                'm-8 ml-4 rounded-xl border-2 border-dashed border-blue-500 w-[80%]',
            }}
          />
        </div>
      )}
    </div>
  );
}
