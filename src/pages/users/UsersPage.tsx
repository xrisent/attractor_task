import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { useUsers } from "@/features/users/hooks/useUsers";
import { UserSearch } from "@/features/users/components/UserSearch/UserSearch";
import { UserList } from "@/features/users/components/UserList/UserList";
import { UserRepositories } from "@/features/users/components/UserRepositories/UserRepositories";
import "./UsersPage.scss";

export const UsersPage = () => {
  const {
    searchQuery,
    handleSearchChange,
    handleUserSelect,
    searchResults,
    searchLoading,
    searchError,
    selectedUser,
  } = useUsers();

  const {
    data: repositories,
    loading: reposLoading,
    error: reposError,
  } = useSelector((state: RootState) => state.repositories);

  const handleBackToSearch = () => {
    handleUserSelect("");
  };

  return (
    <section id="usersPage">
      <div className="container">
        <div className="usersPage__box">
          <h2>Поиск</h2>

          {!selectedUser ? (
            <>
              <UserSearch
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
              />

              {searchResults && (
                <UserList
                  users={searchResults.items}
                  totalCount={searchResults.total_count}
                  loading={searchLoading}
                  error={searchError}
                  onUserSelect={handleUserSelect}
                />
              )}
            </>
          ) : (
            <UserRepositories
              repositories={repositories}
              username={selectedUser}
              loading={reposLoading}
              error={reposError}
              onBack={handleBackToSearch}
            />
          )}
        </div>
      </div>
    </section>
  );
};
