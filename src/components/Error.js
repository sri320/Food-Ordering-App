import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    return (
        <div>
            <h1>OOPS something went wrong</h1>
            <h2>Wrong url</h2>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    )
}

export default Error;