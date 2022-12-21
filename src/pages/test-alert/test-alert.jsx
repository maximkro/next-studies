import React from "react";
import { Alert } from "../../components/alert/Alert";

const TAlert = () => {
    const [ok, setOk] = React.useState(false);

    const showAllert = () => {
        setOk(prev => !prev)
        setTimeout(() => setOk(prev => !prev),3000);
    }
    return(
        <div>
            {ok && <Alert type={'success'}><p>OK</p></Alert>}
            <button onClick={showAllert}> show allert</button>
        </div>

    );
}

export default TAlert;