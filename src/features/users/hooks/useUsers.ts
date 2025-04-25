import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store/store';
import { searchUsers, clearSearch, setSelectedUser } from '@/app/store/users/usersSlice';
import { fetchUserRepositories } from '@/app/store/repositories/repositoriesSlice';

export const useUsers = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    searchResults,
    searchLoading,
    searchError,
    selectedUser,
  } = useSelector((state: RootState) => state.users);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      dispatch(searchUsers(debouncedQuery));
    } else {
      dispatch(clearSearch());
    }
  }, [debouncedQuery, dispatch]);

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleUserSelect = useCallback((userLogin: string) => {
    dispatch(setSelectedUser(userLogin));
    dispatch(fetchUserRepositories(userLogin));
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearSearch());
    };
  }, [dispatch]);

  return {
    searchQuery,
    handleSearchChange,
    handleUserSelect,
    searchResults,
    searchLoading,
    searchError,
    selectedUser,
  };
};