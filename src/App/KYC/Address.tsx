import { KycData } from './index.js';

export default function Address(props: {
  onSubmit: (data: KycData['address']) => void;
}) {
  return (
    <div>
      <p>address...</p>
      <button
        onClick={() =>
          props.onSubmit({
            city: 'Singapore',
            country: 'SG',
            province: 'Singapore',
            street: '123 road',
            zip: '12323',
          })
        }
      >
        Submit Address
      </button>
    </div>
  );
}
