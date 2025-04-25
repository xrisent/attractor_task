import { useRepositories } from "@/features/repositories/hooks/useRepositories";
import { RepositoryTabs } from "@/features/repositories/components/RepositoryTabs/RepositoryTabs";
import { RepositoryList } from "@/features/repositories/components/RepositoryList/RepositoryList";
import "./RepositoriesPage.scss";

export const RepositoriesPage = () => {
  const { publicRepos, privateRepos, loading, error, activeTab, setActiveTab } =
    useRepositories();

  return (
    <section id="repositoriesPage">
      <div className="container">
        <div className="repositoriesPage__content">
          <h2>Мои репозитории</h2>

          <RepositoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === "public" ? (
            <RepositoryList
              repositories={publicRepos}
              loading={loading}
              error={error}
            />
          ) : (
            <RepositoryList
              repositories={privateRepos}
              loading={loading}
              error={error}
            />
          )}
        </div>
      </div>
    </section>
  );
};
