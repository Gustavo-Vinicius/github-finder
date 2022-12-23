import { Outlet } from "react-router-dom"
import { AppRoutes } from "./app/routes"

import classes from "./styled.app.module.scss"

function App() {
  return (
    <div className={classes.app}>
     <h1>GITHub Finder</h1>
     <Outlet/>
     <AppRoutes/>
    </div>
  )
}

export default App
