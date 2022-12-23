import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Repos } from "../../shared/components/repos/Repos";
import { ReposProps } from "../../shared/types/repos";
import classes from "./styled.module.scss"

interface IRepositoriesProps {}

export const Repositories: React.FC<IRepositoriesProps> = ({}) => {
  const { username } = useParams<{ username?: string }>();
  const [repos, setRepos] = useState<ReposProps[] | null>(null);

  const loadRepositories = async () => {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=5`
    );
    const data = (await res.json()) as ReposProps[];
    if (res.status === 404) {
    }

    const mappedData: ReposProps[] = data.map(
      ({ name, svn_url, language, stargazers_count, watchers_count }) => {
        const repoData: ReposProps = {
          name,
          svn_url,
          language,
          stargazers_count,
          watchers_count,
        };

        return repoData;
      }
    );

    setRepos([...mappedData]);
  };

  useEffect(() => {
    (async () => {
      await loadRepositories();
    })();
  }, []);

  return (
    <div>
      <h3>Explore repositorios de : {username}</h3>
      <div className={classes.container}>
      {repos && repos.length > 0 && repos?.map((repo) => <Repos {...repo} />)}
      </div>
    </div>
  );
};
