import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '@/app/store/store';
import { ReactNode } from 'react';

interface PublicRouteProps {
  children: ReactNode;
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const { token } = useSelector((state: RootState) => state.auth);

  return token ? <Navigate to="/" replace /> : <>{children}</>;
};