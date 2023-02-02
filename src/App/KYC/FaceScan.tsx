import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { kycContext, KycData } from './context.js';

export default function FaceScan(props: { nextUri: string }) {
  const updateKyc = useContext(kycContext);

  return (
    <div className="flex-col">
      <div
        style={{
          marginTop: '10vh',
        }}
        className="grid gap-8"
      >
        <img
          className="mx-auto rounded-full"
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=facearea&facepad=3&w=200&h=200"
        />
        <div className="border-gray-muted rounded-full border">
          <div className="mr-20 h-2 rounded-full bg-green-600" />
        </div>
        <div>
          <p className="text-center">Scanning...</p>
          <p className="text-center">Keep your face within the frame</p>
        </div>
      </div>
      <Link to={props.nextUri} className="text-gray-muted">
        Continue
      </Link>
    </div>
  );
}
