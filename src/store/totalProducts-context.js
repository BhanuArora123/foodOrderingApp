import React, { useState } from "react";
const TotalProdCtx = React.createContext({
    total:0,
    changeTotal:() => {}
});

export const TotalProdProvider = props => {
    const [totalProds, setTotalProds] = useState(0);
    return (
        <TotalProdCtx.Provider value={{
            total:totalProds,
            changeTotal:setTotalProds
        }} >
            {props.children}
        </TotalProdCtx.Provider>
    )
}

export default TotalProdCtx;