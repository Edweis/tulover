import {
  ArrowLeftIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  StarIcon,
  UserIcon,
} from '@heroicons/react/20/solid';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button.js';
import Card from '../../../components/Card.js';
import SlideRight from '../../../components/transition/SlideRight.js';
import database from '../../../lib/database.js';

export default function AccountDetails() {
  const bankAccount = database.bankAccount.get();
  return (
    <SlideRight title="François Rullière">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl">François Rullière</h1>
          <h3 className="text-xl text-blue-500">@francisruri</h3>
        </div>
        <div className="bg-gray-muted flex h-16 w-16 items-center justify-center rounded-full">
          FR
        </div>
      </div>
      <div className="flex gap-4">
        <Button variant="primary">
          <RocketLaunchIcon className="h-6" />
          Upgrade
        </Button>
        <Button>
          <HeartIcon className="h-6" />
          Invite friends
        </Button>
      </div>
      <Card>
        <div className="flex gap-4">
          <QuestionMarkCircleIcon className="w-6 fill-blue-500" />
          Help
        </div>
      </Card>
      <div className="flex justify-between">
        <span className="text-muted">Account details</span>
        <span className="text-sm text-blue-500">See all</span>
      </div>
      <Card>
        <div className="flex justify-between">
          <span className="text-muted">Name</span>
          <span className="text-sm text-blue-500">Personal &bull; EUR</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted">IBAN</span>
          <span className="text-sm text-blue-500">
            <DocumentDuplicateIcon className="inline w-6" /> {bankAccount.iban}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted">BIC</span>
          <span className="text-sm text-blue-500">
            <DocumentDuplicateIcon className="inline w-6" /> {bankAccount.bic}
          </span>
        </div>
      </Card>
      <Card>
        <div className="flex gap-4">
          <StarIcon className="w-8 fill-blue-500" />
          <div className="grid">
            <span>Plan</span>
            <span className="text-muted">Standard</span>
          </div>
        </div>
        <div className="flex gap-4">
          <UserIcon className="h-8 fill-blue-500" />
          <span>Account</span>
        </div>
        <div className="flex gap-4">
          <ShieldCheckIcon className="h-8 fill-blue-500" />
          <span>Security & privacy</span>
        </div>
        <div className="flex gap-4">
          <Cog6ToothIcon className="h-8 fill-blue-500" />
          <span>App settings</span>
        </div>
        <div className="flex gap-4">
          <StarIcon className="h-8 fill-blue-500" />
          <span>About us</span>
        </div>
      </Card>
    </SlideRight>
  );
}
