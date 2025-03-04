import type { Route } from '.react-router/types/app/routes/+types/home';
import { Input } from '~/components/input';

export default function Home(args: Route.ComponentProps) {
  return (
    <div className="grid gap-4 p-10">
      <div className="grid grid-cols-4 gap-4">
        <Input size="sm" placeholder="Small" />
        <Input size="sm" placeholder="Disabled" disabled />
        <Input size="sm" placeholder="Error" aria-invalid />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Input size="default" placeholder="Small" />
        <Input size="default" placeholder="Disabled" disabled />
        <Input size="default" placeholder="Error" aria-invalid />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Input size="lg" placeholder="Small" />
        <Input size="lg" placeholder="Disabled" disabled />
        <Input size="lg" placeholder="Error" aria-invalid />
      </div>
    </div>
  );
}
