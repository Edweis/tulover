import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { kycContext } from './context.js';

export default function IdPhoto(props: { nextUri: string }) {
  const updateKyc = useContext(kycContext);

  return (
    <div className="flex flex-col gap-4">
      <img
        className="rounded-xl border border-white"
        src="/fake_passport.jpg"
        width={395}
        height={526}
        style={{
          maxHeight: '70%',
          objectFit: 'cover',
          width: 'auto',
        }}
      />
      <p className="text-center">Place your ID within the frame</p>
      <Link
        to={props.nextUri}
        onClick={() => updateKyc({ idPhotoUrl: 'https://....' })}
        className="mx-auto h-16 w-16 rounded-full border-2 border-black bg-blue-500 ring ring-blue-500"
      />
    </div>
  );
}
