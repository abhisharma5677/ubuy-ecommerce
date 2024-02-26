import React, { useState } from "react";

import HomeContext from "./HomeContext";

const HomeContextProvider = ({ children }) => {

    const [isSearched , setIsSearched] = useState(false);

    return (
        <HomeContext.Provider value={{isSearched, setIsSearched}}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider
