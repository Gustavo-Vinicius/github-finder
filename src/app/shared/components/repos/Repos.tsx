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
      <h3 className={classes.name}>{name}</h3>
      <p className={classes.linguagem}>{language}</p>
      <div className={classes.stats}>
        <div>
          <p className={classes.number}>{stargazers_count}</p>
          <p className={classes.number}>{watchers_count}</p>
        </div>
      </div>

      <Link to="" onClick={handleOpenCode}>
        Abrir codigo
      </Link>
    </div>
  );
};
