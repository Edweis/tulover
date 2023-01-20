import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="absolute inset-0 px-4 py-2">
      <Outlet />
    </div>
  );
}
