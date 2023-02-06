import { ChevronRightIcon } from '@heroicons/react/20/solid';
import {} from '@heroicons/react/24/solid';
import { ButtonAnchor } from '../../components/Button.js';
import Card from '../../components/Card.js';
import SlideRight from '../../components/transition/SlideRight.js';

export default function TermPage() {
  return (
    <SlideRight>
      <h2 className="text-2xl">
        Terms and conditions governing the opening and maintenance of Deposit
        Accounts
      </h2>

      <p>
        The account holder (individually the “Accountholder” and collectively,
        the “Accountholders”) hereby stipulates and agrees to be governed and
        bound by the following terms and conditions governing the opening and
        maintenance of the deposit account (the “Deposit Account”).
      </p>

      <p>
        Further, the ACCOUNTHOLDER hereby stipulates and agrees to be bound by
        pertinent laws, rules and regulations of the Bangko Sentral ng Pilipinas
        (BSP), Bankers Association of the Philippines (BAP), as well as any
        subsequent amendments or supplements thereof and any new laws or rules
        to be promulgated which are applicable to the Deposit Account.{' '}
      </p>
    </SlideRight>
  );
}
