import { useParams } from 'react-router-dom';

export default function Transaction() {
  const { id } = useParams<{ id: string }>();
  return <div>Transaction {id}</div>;
}
