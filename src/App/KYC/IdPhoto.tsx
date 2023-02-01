import { KycData } from './index.js';

export default function IdPhoto(props: {
  onSubmit: (data: KycData['idPhotoUrl']) => void;
}) {
  return (
    <div>
      <p>Take a photo</p>
      <button onClick={() => props.onSubmit('https://...')}>
        Submit Photo
      </button>
    </div>
  );
}
