import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store/store';
import { fetchProfile, updateProfile } from '@/app/store/profile/profileSlice';

export const useProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: profile, loading, error } = useSelector((state: RootState) => state.profile);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [fieldValue, setFieldValue] = useState('');

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const startEditing = (fieldName: string, currentValue: string) => {
    setEditingField(fieldName);
    setFieldValue(currentValue);
  };

  const cancelEditing = () => {
    setEditingField(null);
    setFieldValue('');
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFieldValue(e.target.value);
  };

  const saveField = async () => {
    if (!editingField || !profile) return;
    
    const updateData = {
      [editingField]: fieldValue
    };
    
    await dispatch(updateProfile(updateData));
    setEditingField(null);
  };

  return {
    profile,
    loading,
    error,
    editingField,
    fieldValue,
    startEditing,
    cancelEditing,
    handleFieldChange,
    saveField,
  };
};