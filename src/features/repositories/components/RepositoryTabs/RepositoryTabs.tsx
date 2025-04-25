import './RepositoryTabs.scss';

interface RepositoryTabsProps {
  activeTab: 'public' | 'private';
  setActiveTab: (tab: 'public' | 'private') => void;
}

export const RepositoryTabs = ({ activeTab, setActiveTab }: RepositoryTabsProps) => {
  return (
    <div className="repository-tabs">
      <button
        className={`tab ${activeTab === 'public' ? 'active' : ''}`}
        onClick={() => setActiveTab('public')}
      >
        Публичные репозитории
      </button>
      <button
        className={`tab ${activeTab === 'private' ? 'active' : ''}`}
        onClick={() => setActiveTab('private')}
      >
        Приватные репозитории
      </button>
    </div>
  );
};