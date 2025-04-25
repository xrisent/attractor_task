import { ChangeEvent } from "react";

export interface Profile {
  name: string | null;
  login: string;
  email: string | null;
  avatar_url: string | null;
  company: string | null;
  location: string | null;
  bio: string | null;
  html_url: string;
}

export interface ProfileViewProps {
  profile: Profile;
  editingField: string | null;
  fieldValue: string;
  startEditing: (field: string, value: string) => void;
  handleFieldChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  saveField: () => void;
  cancelEditing: () => void;
}

export interface EditFieldProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSave: () => void;
  onCancel: () => void;
  isTextarea?: boolean;
}
