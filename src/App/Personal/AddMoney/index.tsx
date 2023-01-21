import { ClipboardDocumentIcon } from '@heroicons/react/20/solid';
import {
  BanknotesIcon,
  ClipboardIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/solid';
import Card from '../../../components/Card.js';
import SlideRight from '../../../components/transition/SlideRight.js';
import database from '../../../lib/database.js';

export default function AddMoney() {
  const bankAccount = database.bankAccount.get();
  return (
    <SlideRight title="Singapore Dollar account">
      <div className="text-gray-muted p-4 text-center">
        Use these account details to send money to your Tulover account
      </div>
      <div className="flex justify-between">
        <div className="text-muted">For cross-border tranfers only</div>
        <div className="text-sm text-blue-500">Share</div>
      </div>
      <Card>
        <div className="grid gap-2">
          <div className="text-muted">Beneficiary</div>
          <div className="flex justify-between text-blue-500">
            {bankAccount.name}
            <ClipboardDocumentIcon className="ml-auto inline h-6 fill-blue-500" />
          </div>
        </div>
        <div className="grid gap-2">
          <div className="text-muted">IBAN</div>
          <div className="flex justify-between text-blue-500">
            {bankAccount.iban}
            <ClipboardDocumentIcon className="ml-auto inline h-6 fill-blue-500" />
          </div>
        </div>
        <div className="grid gap-2">
          <div className="text-muted">BIC</div>
          <div className="flex justify-between text-blue-500">
            {bankAccount.bic}
            <ClipboardDocumentIcon className="ml-auto inline h-6 fill-blue-500" />
          </div>
        </div>
      </Card>
      <Card>
        <div className="flex items-center gap-4">
          <ShieldCheckIcon className="h-10 shrink-0" />
          <div>
            Your money is protected by Lithuanian Deposite Guarantee Scheme.{' '}
            <span className="text-blue-500">Learn More</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <BanknotesIcon className="h-10 shrink-0" />
          <div>
            Intermediary or sender's bankmay charge you for international
            payment
          </div>
        </div>
      </Card>
    </SlideRight>
  );
}
