import React, { useState } from "react";
import Search from "../../shared/components/shearch/Search";
import User from "../../shared/components/user/User";
import { UserProps } from "../../shared/types/user";
import Error from "../../shared/components/error/Error";

export const Home: React.FC = () => {

    const [ user, setUser ] = useState<UserProps | null>(null);
    const [ error, setError ] = useState(false);

    const loadUser = async (userName: string) => {
        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data = await res.json()
        if(res.status === 404){
            setError(true)
            return;
        }

        const { avatar_url, login, location, followers, following } = data;

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following
        }
        setUser(userData)
    }

    return(
        <div>
            <Search loadUser={loadUser}/>
            {user && <User{...user}/>}
            {error && <Error/>} 
        </div>
    )
}