import { KycData } from './index.js';

export default function FaceScan(props: {
  onSubmit: (data: KycData['faceScanUrl']) => void;
}) {
  return (
    <div>
      <p>Show your face</p>
      <button onClick={() => props.onSubmit('https://...')}>Submit Face</button>
    </div>
  );
}
