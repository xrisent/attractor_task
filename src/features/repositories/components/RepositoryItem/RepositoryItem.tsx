
import { Repository } from '@/entities/Repositories/types';
import './RepositoryItem.scss';

export const RepositoryItem = ({ repository }: { repository: Repository }) => {
    console.log(repository.description?.length)
  return (
    <div className="repository-item">
      <div className="repository-header">
        <h3>
          <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
            {repository.name}
          </a>
        </h3>
        <span className={`visibility ${repository.private ? 'private' : 'public'}`}>
          {repository.private ? 'Приватный' : 'Публичный'}
        </span>
      </div>
      
      {repository.description && (
        <p className="repository-description">{repository.description.length >= 150?`${repository.description.slice(0,150)}...`:repository.description}</p>
      )}
      
      <div className="repository-owner">
        <span>Владелец: </span>
        <a href={repository.owner.html_url} target="_blank" rel="noopener noreferrer">
          {repository.owner.login}
        </a>
      </div>
    </div>
  );
};