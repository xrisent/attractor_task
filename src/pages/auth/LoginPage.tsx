import { GitHubAuthButton } from '@/features/auth/components/GitHubAuthButton';
import { useGitHubAuth } from '@/features/auth/hooks/useGitHubAuth';
import './LoginPage.scss';

export const LoginPage = () => {
  const { handleLogin } = useGitHubAuth();

  return (
    <section id="loginPage">
        <div className="container">
            <div className="loginPage__box">
                <h1 className="loginPage__box-title">Welcome to GitHub Client</h1>
                <GitHubAuthButton onClick={handleLogin} />
            </div>
        </div>
    </section>
  );
};