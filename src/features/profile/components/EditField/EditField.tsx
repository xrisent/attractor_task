
import { EditFieldProps } from '@/entities/Profile/types';
import './EditField.scss';

export const EditField = ({
  value,
  onChange,
  onSave,
  onCancel,
  isTextarea = false,
}: EditFieldProps) => {
  return (
    <div className="edit-field">
      {isTextarea ? (
        <textarea value={value} onChange={onChange} className="edit-input" />
      ) : (
        <input type="text" value={value} onChange={onChange} className="edit-input" />
      )}
      <div className="edit-actions">
        <button onClick={onSave} className="save-btn">
          ✓
        </button>
        <button onClick={onCancel} className="cancel-btn">
          ✕
        </button>
      </div>
    </div>
  );
};