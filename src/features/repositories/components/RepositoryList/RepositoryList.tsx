
import './RepositoryList.scss';
import { RepositoryItem } from '../RepositoryItem/RepositoryItem';
import { Repository } from '@/entities/Repositories/types';
import { Loader } from '@/shared/ui/Loader/Loader';

interface RepositoryListProps {
  repositories: Repository[];
  loading: boolean;
  error: string | null;
}

export const RepositoryList = ({ repositories, loading, error }: RepositoryListProps) => {
  if (loading) return <Loader/>;
  if (error) return <div className="error">Ошибка: {error}</div>;
  if (repositories.length === 0) return <div className="empty">Репозитории отсутствуют</div>;

  return (
    <div className="repository-list">
      {repositories.map((repo) => (
        <RepositoryItem key={repo.id} repository={repo} />
      ))}
    </div>
  );
};