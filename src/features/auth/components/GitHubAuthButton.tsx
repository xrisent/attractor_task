import './GitHubAuthButton.scss';

interface GitHubAuthButtonProps {
  onClick: () => void;
}

export const GitHubAuthButton = ({ onClick }: GitHubAuthButtonProps) => {
  return (
    <button onClick={onClick} className="github-auth-button">
      <img src="/img/github.svg" alt="" className='github-icon'/>
      <span>Войти с помощью GitHub</span>
    </button>
  );
};
