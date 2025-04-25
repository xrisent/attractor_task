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
    const displayValue: string = value ?? "Нет данных";

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
            <span>{displayValue}</span>
            {displayValue !== "Нет данных" && (
              <button
                onClick={() => startEditing(fieldName, displayValue)}
                className="edit-btn"
              >
                Редактировать
              </button>
            )}
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

        {renderField("name", "Имя", profile.name)}
        {renderField("bio", "О себе", profile.bio, true)}
        {renderField("company", "Компания", profile.company)}
        {renderField("location", "Локация", profile.location)}

        <div className="profilePage__box-field">
          <strong>Логин:</strong> {profile.login}
        </div>

        {profile.email && (
          <div className="profilePage__box-field">
            <strong>Email:</strong> {profile.email}
          </div>
        )}

        <div className="profilePage__box-field">
          <strong>Ссылка на профиль в Github:</strong>{" "}
          <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
            {profile.html_url}
          </a>
        </div>
      </div>
    </div>
  );
};
