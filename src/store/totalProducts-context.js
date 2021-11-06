import React, { useState } from "react";
const TotalProdCtx = React.createContext(0);

export const TotalProdProvider = props => {
    const [totalProds, setTotalProds] = useState(0);
    return (
        <TotalProdCtx.Provider value={totalProds} changeProds = {setTotalProds}>
            {props.children}
        </TotalProdCtx.Provider>
    )
}

export default TotalProdCtx;