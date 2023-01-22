import {
  ArrowDownTrayIcon,
  ArrowPathIcon,
  ChevronRightIcon,
  CircleStackIcon,
  InformationCircleIcon,
  NewspaperIcon,
  PencilIcon,
  XCircleIcon,
} from '@heroicons/react/20/solid';
import Card from '../../../../components/Card.js';
import ModalUpFull from '../../../../components/ModalUp/ModalUpFull.js';

export default function AccountActions() {
  return (
    <ModalUpFull>
      <Card className="!gap-8 text-blue-500">
        <div>
          <ArrowPathIcon className="mr-4 inline h-6" /> Exchange
        </div>
        <div>
          <NewspaperIcon className="mr-4 inline h-6" /> Statement
        </div>
        <div>
          <InformationCircleIcon className="mr-4 inline h-6" /> Acount details
        </div>
        <div>
          <XCircleIcon className="mr-4 inline h-6" /> Desactivate
        </div>
        <div>
          <CircleStackIcon className="mr-4 inline h-6" /> Add new account
        </div>
      </Card>
    </ModalUpFull>
  );
}
