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

export interface BoxInputData {
    tittle: string,
    input? : ReactSetter<string>,
    picker? : ReactSetter<any>,
    placeholders? : string,
    values? : any,
    dropList? : any
}

export interface HeaderData {
    image? : string,
    name : string,
    action? () : any,
    remove? () : any,
}