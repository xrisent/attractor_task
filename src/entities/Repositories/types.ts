export interface Repository {
    id: number;
    name: string;
    html_url: string;
    private: boolean;
    owner: {
      login: string;
      html_url: string;
    };
    description: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
  }