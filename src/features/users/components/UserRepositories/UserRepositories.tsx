import { RepositoryItem } from '@/features/repositories/components/RepositoryItem/RepositoryItem';
import './UserRepositories.scss';
import { Repository } from '@/entities/Repositories/types';
import { Loader } from '@/shared/ui/Loader/Loader';

interface UserRepositoriesProps {
  repositories: Repository[];
  username: string;
  loading: boolean;
  error: string | null;
  onBack: () => void;
}

export const UserRepositories = ({
  repositories,
  username,
  loading,
  error,
  onBack,
}: UserRepositoriesProps) => {
  if (loading) return <Loader/>;
  if (error) return <div className="error">Ошибка: {error}</div>;

  return (
    <div className="usersPage__box-repositories">
      <button onClick={onBack} className="back-button">
        ← Вернуться
      </button>
      <h3 className="repos-title">Публичные репозитории {username}</h3>
      
      {repositories.length === 0 ? (
        <div className="empty">Публичных репозиториев не найдено</div>
      ) : (
        <div className="usersPage__box-repositories__repos-list">
          {repositories.map((repo) => (
            <RepositoryItem key={repo.id} repository={repo} />
          ))}
        </div>
      )}
    </div>
  );
};