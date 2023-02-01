import { KycData } from './index.js';

export default function Form(props: {
  onSubmit: (data: KycData['form']) => void;
}) {
  return (
    <div>
      <p>form...</p>
      <button
        onClick={() =>
          props.onSubmit({
            birthPlace: 'Fontenay-aux-Roses',
            civilStatus: 'Single',
            countryOfBirth: 'FR',
            email: 'asdf@asdf.fr',
            expiryDate: '2030-02-12',
            firstName: 'François',
            middleName: null,
            gender: 'M',
            idNumber: '1232123',
            lastName: 'Rullière',
            title: 'Dr',
          })
        }
      >
        Submit Form
      </button>
    </div>
  );
}
