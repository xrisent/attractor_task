import { User } from "@/entities/User/types";
import "./UserList.scss";
import { UserItem } from "../UserItem/UserItem";
import { Loader } from "@/shared/ui/Loader/Loader";

interface UserListProps {
  users: User[];
  totalCount: number;
  loading: boolean;
  error: string | null;
  onUserSelect: (login: string) => void;
}

export const UserList = ({
  users,
  totalCount,
  loading,
  error,
  onUserSelect,
}: UserListProps) => {
  if (loading) return <Loader />;
  if (error) return <div className="error">Ошибка: {error}</div>;
  if (users.length === 0)
    return <div className="empty">Пользователей не найдено</div>;

  return (
    <div className="usersPage__box-list__box">
      <div className="total-count">Найдено {totalCount} пользователей</div>
      <div className="users-list">
        {users.map((user) => (
          <UserItem key={user.id} user={user} onSelect={onUserSelect} />
        ))}
      </div>
    </div>
  );
};
