import './GitHubAuthButton.scss';

interface GitHubAuthButtonProps {
  onClick: () => void;
}

export const GitHubAuthButton = ({ onClick }: GitHubAuthButtonProps) => {
  return (
    <button onClick={onClick} className="github-auth-button">
      Login with GitHub
    </button>
  );
};