import { useParams } from 'react-router-dom';
import SlideRight from '../../components/transition/SlideRight.js';

export default function Chat() {
  const { userId } = useParams<{ userId: string }>();
  return (
    <SlideRight title={userId}>
      <div className="flex h-full flex-col border">
        <div className="bg-red-100">xxxx</div>
        <div className="sticky bottom-0">
          <input />
        </div>
      </div>
    </SlideRight>
  );
}
