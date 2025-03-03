import type { Route } from '.react-router/types/app/routes/+types/home';
import { Input } from '~/components/input';

export default function Home(args: Route.ComponentProps) {
  return (
    <div className="grid grid-cols-5 justify-center gap-4 p-10">
      <Input size="sm" placeholder="Small" />
      <Input size="sm" aria-invalid="true" placeholder="Small" />
    </div>
  );
}
