import { useParams } from 'react-router-dom';
import ModalUp from '../../../components/ModalUp.js';

export default function Transaction() {
  const { id } = useParams<{ id: string }>();
  return (
    <ModalUp key={id}>
      <div>Transaction {id}</div>
    </ModalUp>
  );
}
