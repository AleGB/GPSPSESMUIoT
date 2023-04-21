import React, { createContext } from "react";

type authContextProps = {
    errorMessage: string;
    token: string | null;
}

const authContext = createContext({});