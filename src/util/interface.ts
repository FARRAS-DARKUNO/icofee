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
    price? : string,
    persen? : string,
    id ? : string,
    type ? : string
}

export interface BoxInputData {
    tittle: string,
    input? : ReactSetter<any>,
    picker? : ReactSetter<any>,
    placeholders? : string,
    values? : any,
    dropList? : any
    isPassword? : boolean,
}

export interface HeaderData {
    image? : string,
    name : string,
    nicname? : string,
    action? () : any,
    remove? () : any,
    status? : number
}

export interface AlertProps {
    action? (): any,
    title: string,
    massage: string,
}

export interface AxiosProps {
    token? : string,
    id? : string ,
    action? (): any,
    data? : any,
    setLoading? : ReactSetter<boolean>,
    setId? : ReactSetter<any>,
    value? : any
    setImage? : ReactSetter<string>,
    setName ? : ReactSetter<string>,
    setNicname ? : ReactSetter<string>,
    setStatus ? : ReactSetter<any>
    setData? : ReactSetter<any>
    setDate ? : ReactSetter<Date>
    setValue? :ReactSetter<any>
}