import { KycData } from './index.js';

export default function Signature(props: {
  onSubmit: (data: KycData['signatureUrl']) => void;
}) {
  return (
    <div>
      <p>Sign now!</p>
      <button onClick={() => props.onSubmit('https://...')}>
        Submit Singature
      </button>
    </div>
  );
}
