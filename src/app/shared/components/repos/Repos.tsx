import { Link } from "react-router-dom";
import { ReposProps } from "../../types/repos";
import classes from "./styled.module.scss";

type RepositoriesProps = {
  loadRepositories: () => Promise<void>;
  username: string | undefined;
};

export const Repos: React.FC<ReposProps> = ({
  name,
  svn_url,
  language,
  stargazers_count,
  watchers_count,
}) => {
  function handleOpenCode() {
    window.open(svn_url, "_blank");
  }

  return (
    <div className={classes.container}>
      <h3>{name}</h3>
      <p>{language}</p>
      <div className="">
        <p>{stargazers_count}</p>
      </div>
      <div className="">
        <p>{watchers_count}</p>
      </div>
      <button onClick={handleOpenCode}>Abrir codigo</button>
    </div>
  );
};
