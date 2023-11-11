import React, {createContext} from "react";

export const FileManAuthContext = createContext({
    isAuth: false,
    setIsAuth: (boolVal) => {}
});

