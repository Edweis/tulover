import { ChevronRightIcon } from '@heroicons/react/20/solid';
import {} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { ButtonAnchor } from '../../components/Button.js';
import Card from '../../components/Card.js';

export default function Terms(props: { nextUri: string }) {
  return (
    <div className="grid gap-8">
      <h3 className="text-3xl">Terms and Conditions</h3>
      <Card>
        <Link
          to="pages/terms"
          // href="https://www.netbank.ph/terms-and-conditions-ii"
          className="flex justify-between"
        >
          Terms and Conditions
          <ChevronRightIcon className="inline h-6" />
        </Link>
      </Card>
      <Card>
        <Link
          to="pages/terms"
          // href="https://www.netbank.ph/privacy-policy-ii"
          target="_blank"
          className="flex justify-between"
        >
          Privacy Policy
          <ChevronRightIcon className="inline h-6" />
        </Link>
      </Card>
      <Card>
        <Link
          to="pages/terms"
          // href="https://docs.google.com/document/d/1K_Tn2mZM36NhUrfVGqoem0kHlkHMAe-F/edit?usp=share_link&ouid=103936378497683470189&rtpof=true&sd=true"
          target="_blank"
          className="flex justify-between"
        >
          Waiver of Confidentiality to Bank Secrecy
          <ChevronRightIcon className="inline h-6" />
        </Link>
      </Card>
      <Card>
        <Link
          to="pages/terms"
          // href="https://docs.google.com/document/d/1fwIwgMlMTTAbnxUkxfHk8D27UNiFb7EO/edit?usp=share_link&ouid=103936378497683470189&rtpof=true&sd=true"
          target="_blank"
          className="flex justify-between"
        >
          Product Disclosure Statement
          <ChevronRightIcon className="inline h-6" />
        </Link>
      </Card>
      <ButtonAnchor variant="primary" to={props.nextUri} className="mt-4">
        Accept all Terms and Conditions
      </ButtonAnchor>
    </div>
  );
}
