import "./UserSearch.scss";

interface UserSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const UserSearch = ({
  searchQuery,
  onSearchChange,
}: UserSearchProps) => {
  return (
    <div className="usersPage__box-search">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Поиск пользователей"
        className="search-input"
        aria-label="Search GitHub users"
      />
    </div>
  );
};
