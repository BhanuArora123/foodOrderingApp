import React , {useState} from "react";

const ShowContext = React.createContext({
    show:false,
    changeShow:() => {}
});

export const ShowContextProvider = props => {
    const [visiblity , setVisiblity] = useState(false);
    return (
        <ShowContext.Provider value={{
            show:visiblity,
            changeShow:setVisiblity
        }}>
            {props.children}
        </ShowContext.Provider>
    )
}

export default ShowContext;