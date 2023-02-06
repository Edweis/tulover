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
      <p>
        <b className="block">1. Deposits.</b>
        Deposits shall be credited to the Deposit Account after verification by
        the Bank. The amount verified shall be deemed to be the correct amount
        deposited by the Accountholder. Any discrepancies noted shall be
        communicated to the Accountholder.
      </p>
      <p>
        <b className="block">2. Loss or theft of Deposit Item.</b>
        The Bank shall not be responsible for any payment it may make on any
        deposit item prior to its notice of loss/ theft of deposit item and such
        payment shall have the same effects as if made to the Accountholder
        personally except in case of patently discernable acts of forgery or
        irregularity.
      </p>
    </SlideRight>
  );
}
