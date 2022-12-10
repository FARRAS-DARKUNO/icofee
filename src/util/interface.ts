import React from "react";

export type ReactSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export interface ButtonProps {
    response () : any,
    tiitle? : string,
    iconRight? : string ,
    iconLeft? : string 
}

export interface CardProps {
    response? () : any,
    image? : string,
    tittle? : string,
    body? : string,
    time? : string,
    icon? : string,
    isUpgrade? : number,
    price? : string
    persen? : string


}