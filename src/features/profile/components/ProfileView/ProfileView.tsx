import { ProfileViewProps } from "@/entities/Profile/types";
import { EditField } from "../EditField/EditField";
import "./ProfileView.scss";

export const ProfileView = ({
  profile,
  editingField,
  fieldValue,
  startEditing,
  handleFieldChange,
  saveField,
  cancelEditing,
}: ProfileViewProps) => {
  const renderField = (
    fieldName: string,
    label: string,
    value: string | null,
    isTextarea = false
  ) => {
    if (!value) return null;

    return (
      <div className="profilePage__box-field">
        <strong>{label}:</strong>
        {editingField === fieldName ? (
          <EditField
            value={fieldValue}
            onChange={handleFieldChange}
            onSave={saveField}
            onCancel={cancelEditing}
            isTextarea={isTextarea}
          />
        ) : (
          <div className="field-value">
            <span>{value}</span>
            <button
              onClick={() => startEditing(fieldName, value)}
              className="edit-btn"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="profilePage__box">
      <img
        src={
          profile.avatar_url ||
          `https://www.gravatar.com/avatar/${profile.login}?d=identicon`
        }
        alt="Profile"
        className="profilePage__box-avatar"
      />
      <div className="profilePage__box-info">
        <h2>{profile.login}</h2>

        {renderField("name", "Name", profile.name)}
        {renderField("bio", "Bio", profile.bio, true)}
        {renderField("company", "Company", profile.company)}
        {renderField("location", "Location", profile.location)}

        <div className="profilePage__box-field">
          <strong>Username:</strong> {profile.login}
        </div>

        {profile.email && (
          <div className="profilePage__box-field">
            <strong>Email:</strong> {profile.email}
          </div>
        )}

        <div className="profilePage__box-field">
          <strong>Profile URL:</strong>{" "}
          <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
            {profile.html_url}
          </a>
        </div>
      </div>
    </div>
  );
};
