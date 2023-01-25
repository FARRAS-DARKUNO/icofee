import axios from "axios"
import Alert from "../component/alert"
import { AxiosProps } from "./interface"

const mainLink = "http://47.250.128.109:8000"

let registrationLink = "/api/v1/cofeetera-users/user-registration/"

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

const ApiAxios = {
    postRegistration,
}
export default ApiAxios