import { useContext } from 'react';
import InputText from '../../components/InputText.js';
import Label from '../../components/Label.js';
import Select from '../../components/Select.js';
import { kycContext } from './context.js';
import countries from '../../lib/countries.json';
import { ButtonAnchor } from '../../components/Button.js';

export default function Address(props: { nextUri: string }) {
  const updateKyc = useContext(kycContext);
  return (
    <div className="mb-4 grid gap-8">
      <h3 className="text-3xl">Address</h3>
      <form className="grid gap-4">
        <Label label="Country">
          <Select>
            {countries.map((c, i) => (
              <option value={c.code} key={c.code + i}>
                {c.name}
              </option>
            ))}
          </Select>
        </Label>
        <Label label="Province">
          <Select>
            <option>Metro Manila</option>
          </Select>
        </Label>
        <Label label="City">
          <Select>
            <option>Manila</option>
          </Select>
        </Label>
        <Label label="Address 1/2">
          <InputText itemType="text" placeholder="1422 Oroquieta Street 1000" />
        </Label>
        <Label label="Address 2/2">
          <InputText itemType="text" placeholder="#12-43" />
        </Label>
        <Label label="Zip code">
          <InputText itemType="text" placeholder="1000" />
        </Label>
      </form>
      <ButtonAnchor
        variant="primary"
        to={props.nextUri}
        onClick={() =>
          updateKyc({
            address: {
              city: 'Manila',
              country: 'PH',
              province: 'Metro Manila',
              street: '1422 Oroquieta Street',
              zip: '12321',
            },
          })
        }
      >
        Submit Form
      </ButtonAnchor>
    </div>
  );
}
