import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from '@/app/store/auth/authSlice'
import { getGitHubToken } from '@/shared/api/githubAuth';

export const useGitHubAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      const fetchToken = async () => {
        try {
          const token = await getGitHubToken(code);
          dispatch(setToken(token));
          navigate('/');
        } catch (error) {
          console.error('Error during authentication:', error);
        }
      };

      fetchToken();
    }
  }, [dispatch, navigate]);

  const handleLogin = () => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_CALLBACK;
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user,repo`;
  };

  return { handleLogin };
};