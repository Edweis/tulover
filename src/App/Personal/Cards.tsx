import { PlusIcon } from '@heroicons/react/24/solid';
import cn from 'classnames';
import Button from '../../components/Button.js';
import Card from '../../components/Card.js';

const CardIcon = (props: { className?: string }) => (
  <div className={cn('h-8 w-12 rounded ', props.className)} />
);

export default function Cards() {
  return (
    <div className="grid gap-8">
      <Card>
        <div className="flex justify-between">
          <Button>
            <PlusIcon className="h-6" /> Get card
          </Button>
          <div className="h-12 w-12 rounded-xl bg-gradient-to-bl from-blue-500 to-blue-100">
            <div className="m-auto mt-2 h-8 w-8 rounded bg-black/80"></div>
          </div>
        </div>
        <p className="text-muted">Single-use virtual</p>
        <div className="flex items-center gap-4">
          <CardIcon className="bg-red-400/80" />
          <div className="grid">
            <span>Disposable Virtual Card</span>
            <span className="text-muted">For safe single use</span>
          </div>
        </div>
        <p className="text-muted">Physical</p>
        <div className="flex items-center gap-4">
          <CardIcon className="bg-slate-300/80" />
          <div className="grid">
            <span>Lavender</span>
            <span className="text-muted">*3874 &bull; Expires on 12/26</span>
          </div>
        </div>
      </Card>
      <Card></Card>
    </div>
  );
}
