import axios from "axios"
import Alert from "../component/alert"
import { AxiosProps } from "./interface"

export const mainLink = "http://47.250.128.109:8000"

export const registrationLink = "/api/v1/cofeetera-users/user-registration/"
export const loginLink = "/api/v1/cofeetera-users/user-login/"
export const forgetPassword = "/api/v1/cofeetera-users/reset-password/"
export const changePassword = (id : string) => {
    return `/api/v1/cofeetera-users/update-password/${id}/`
}
export const profil = (id : string) => {
    return `/api/v1/cofeetera-users/user-data/${id}/`
}

const postRegistration = ({ action, data, setLoading }: AxiosProps) => {
    axios.post(mainLink + registrationLink, data,
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            }

        })
        .then(placement => {
            console.log("Mantasps", placement.data)
            //@ts-ignore
            setLoading(false)
            Alert.ActionAlert(
                {
                    title: "Registrasi Berhasil",
                    massage: "Lanjutkan ke halaman Login",
                    action: action,
                }
            )
        })
        .catch(err => {
            //@ts-ignore
            setLoading(false)
            Alert.MistakeAlert(
                {
                    title: "Terjadi Kesalahan",
                    massage: "NIK atau Username anda sudah terpakai"
                }
            )
        })
}

const postLogin = ({ action, data, setLoading }: AxiosProps) => {
    axios.post(mainLink + loginLink, data)
    .then(placement => {
        //@ts-ignore
        setLoading(false)
        Alert.ActionAlert(
                {
                    title: "Login Berhasil",
                    massage: "Anda berhasil melakukan Login",
                    action: action,
                }
            )
        // console.log("Mantaps",placement.data)
    })
    .catch(err => {
        //@ts-ignore
        setLoading(false)
            Alert.MistakeAlert(
                {
                    title: "Terjadi Kesalahan",
                    massage: "Username atau Password salah"
                }
            )
    })
}

const postForgetPassowrd = ({ action, data, setLoading, setId }: AxiosProps) =>{
    axios.post(mainLink + forgetPassword, data)
    .then(placemen => {
        //@ts-ignore
        setLoading(false)
        //@ts-ignore
        setId(placemen.data.user_id)
    }).then(()=>{
        Alert.ActionAlert(
                {
                    title: "Akun anda ditemukan",
                    massage: "Silahkan isi ulang password",
                    action: action,
                }
            )
    })
    .catch(err =>{
        console.log(err)
        //@ts-ignore
        setLoading(false)
        Alert.MistakeAlert(
                {
                    title: "Pengguna tidak ditemukan",
                    massage: "Pastikan Username dan NIK yang anda masukan benar"
                }
            )
    })
    .finally(()=>{
        
    })
}

const putChangePassword = ({ action, data, setLoading, value}: AxiosProps) => {
    axios.patch(mainLink + changePassword(value),data)
    .then(placemen => {
        console.log(placemen)
        //@ts-ignore
        setLoading(false)
        
        Alert.ActionAlert(
                {
                    title: "Akun anda ditemukan",
                    massage: "Silahkan isi ulang password",
                    action: action,
                }
            )
    })
    .catch(err =>{
        console.log(err)
        //@ts-ignore
        setLoading(false)
    })
}

const getProfil =({ token, id , setImage,setName, setLoading}: AxiosProps)=>{
    //@ts-ignore
    axios.get(mainLink + profil(id),
    { 
        headers: { "Authorization": `Token ${token}` } 
    })
    .then(plecement =>{
        //@ts-ignore
        setName(plecement.data.name)
        //@ts-ignore
        setImage(plecement.data.profile_pic)
        //@ts-ignore
        setLoading(false)
    })
}

const ApiAxios = {
    postRegistration,
    postLogin,
    postForgetPassowrd,
    putChangePassword,
    getProfil,
}
export default ApiAxios