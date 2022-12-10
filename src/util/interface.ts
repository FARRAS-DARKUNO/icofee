import React from "react";

export type ReactSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export interface ButtonProps {
    response () : any,
    tiitle? : string,
    iconRight? : string ,
    iconLeft? : string 
}