import React, {useState} from "react";
import { View } from "react-native";
import { FileManAuthContext } from "./authContextApi";

export default function FileManagerContextAuthProvider({children}) {
    const [authorize,  setAuthorize] = useState(false);

    const setIsAuth = (booly) => {
        setAuthorize(booly);
    }

    const contextVal = {
        isAuth: authorize,
        setIsAuth: setIsAuth
    }
    return (
        <>
            <FileManAuthContext.Provider value={contextVal} >
                {children}
            </FileManAuthContext.Provider>
        </>
    )
}