import { useProfile } from '@/features/profile/hooks/useProfile';
import { ProfileView } from '@/features/profile/components/ProfileView/ProfileView';
import { Loader } from '@/shared/ui/Loader/Loader';
import './ProfilePage.scss';

export const ProfilePage = () => {
  const {
    profile,
    loading,
    error,
    editingField,
    fieldValue,
    startEditing,
    cancelEditing,
    handleFieldChange,
    saveField,
  } = useProfile();

  if (loading && !profile) return <Loader />;
  if (error) return <div>Error: {error}</div>;
  if (!profile) return <div>No profile data</div>;

  return (
    <ProfileView
      profile={profile}
      editingField={editingField}
      fieldValue={fieldValue}
      startEditing={startEditing}
      handleFieldChange={handleFieldChange}
      saveField={saveField}
      cancelEditing={cancelEditing}
    />
  );
};