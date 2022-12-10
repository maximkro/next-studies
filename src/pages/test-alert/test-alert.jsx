import React from "react";
import { Alert } from "../../components/alert/Alert";

const TAlert = () => {
    const [ok, setOk] = React.useState(false);

    return(
        <div>
            {ok && <Alert type={'success'}><p>OK</p></Alert>}
            <button onClick={() => setOk(prev => !prev)}></button>
        </div>

    );
}

export default TAlert;