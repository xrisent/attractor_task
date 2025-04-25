import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store/store';
import { fetchRepositories } from '@/app/store/repositories/repositoriesSlice';

export const useRepositories = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.repositories);
  const [activeTab, setActiveTab] = useState<'public' | 'private'>('public');

  useEffect(() => {
    if (activeTab === 'public') {
      dispatch(fetchRepositories({ type: 'public' }));
    } else {
      dispatch(fetchRepositories({ type: 'private' }));
    }
  }, [activeTab, dispatch]);

  const publicRepos = data.filter(repo => !repo.private);
  const privateRepos = data.filter(repo => repo.private);

  return {
    publicRepos,
    privateRepos,
    loading,
    error,
    activeTab,
    setActiveTab,
  };
};