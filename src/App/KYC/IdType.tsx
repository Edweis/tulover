import { KycData } from './index.js';

export default function IdType(props: {
  onSubmit: (data: KycData['idType']) => void;
}) {
  return (
    <div>
      <p>Select you id</p>
      <button onClick={() => props.onSubmit('Passport')}>
        Submit Passport
      </button>
    </div>
  );
}
