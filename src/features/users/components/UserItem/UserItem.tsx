import { User } from '@/entities/User/types';
import './UserItem.scss';

interface UserItemProps {
  user: User;
  onSelect: (login: string) => void;
}

export const UserItem = ({ user, onSelect }: UserItemProps) => {
  return (
    <div className="user-item" onClick={() => onSelect(user.login)}>
      <img src={user.avatar_url} alt={user.login} className="user-avatar" />
      <div className="user-info">
        <h3 className="user-login" onClick={() => onSelect(user.login)}>{user.login}</h3>
        <a 
          href={user.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="user-link"
          onClick={(e) => e.stopPropagation()}
        >
          Посмотреть профиль
        </a>
      </div>
    </div>
  );
};