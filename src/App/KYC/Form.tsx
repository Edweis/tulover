import { useContext } from 'react';
import InputText from '../../components/InputText.js';
import Label from '../../components/Label.js';
import Select from '../../components/Select.js';
import { kycContext } from './context.js';
import countries from '../../lib/countries.json';
import { ButtonAnchor } from '../../components/Button.js';

export default function Form(props: { nextUri: string }) {
  const updateKyc = useContext(kycContext);
  return (
    <div className="mb-4 grid gap-8">
      <h3 className="text-3xl">Profile</h3>
      <form className="grid gap-4">
        <Label label="First Name">
          <Select>
            <option value="Mr">Mr.</option>
            <option value="Mrs">Mrs.</option>
            <option value="Dr">Dr.</option>
          </Select>
        </Label>
        <Label label="First Name">
          <InputText itemType="text" placeholder="John" />
        </Label>
        <Label label="Middle Name, if any">
          <InputText itemType="text" placeholder="Pastirma" />
        </Label>
        <Label label="Last Name">
          <InputText itemType="text" placeholder="Pastirma" />
        </Label>
        <Label label="Civil Status">
          <Select>
            <option value="single">Single</option>
          </Select>
        </Label>
        <Label label="Date of birth">
          <InputText placeholder="John Doe" />
        </Label>
        <Label label="Country of birth">
          <Select>
            {countries.map((c, i) => (
              <option value={c.code} key={c.code + i}>
                {c.name}
              </option>
            ))}
          </Select>
        </Label>
        <Label label="Birthplace">
          <InputText placeholder="John Doe" />
        </Label>
        <Label label="Id number">
          <InputText placeholder="12xx xxxx xxxx" />
        </Label>
        <Label label="Email">
          <InputText placeholder="John Doe" />
        </Label>
      </form>
      <ButtonAnchor
        variant="primary"
        to={props.nextUri}
        onClick={() =>
          updateKyc({
            form: {
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
            },
          })
        }
      >
        Submit Form
      </ButtonAnchor>
    </div>
  );
}
