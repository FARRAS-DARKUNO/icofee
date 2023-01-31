import axios from "axios"
import Alert from "../component/alert"
import { AxiosProps } from "./interface"

export const mainLink = "http://47.250.128.109:8000"

export const registrationLink = "/api/v1/cofeetera-users/user-registration/"
export const loginLink = "/api/v1/cofeetera-users/user-login/"
export const forgetPassword = "/api/v1/cofeetera-users/reset-password/"
export const productType = '/api/v1/products/product-types/'
export const changePassword = (id : string) => {
    return `/api/v1/cofeetera-users/update-password/${id}/`
}
export const profil = (id : string) => {
    return `/api/v1/cofeetera-users/user-data/${id}/`
}
export const allNotification = (user_id : string) => {
    return `/api/v1/notif/all-notifications/?user_id=${user_id}`
}
export const detailNotificationUser = (id_notifikasi_user: string) => {
    return `/api/v1/notif/user-notifications/${id_notifikasi_user}/`
}
export const patchlNotificationUser = (id_notifikasi_user: string) => {
    return `/api/v1/notif/user-notifications/${id_notifikasi_user}/`
}
export const detailNotificationSistem = (id_notifikasi_sistem : string) => {
    return `/api/v1/notif/system-notifications/${id_notifikasi_sistem}/`
}
export const productList = (product_type : string) => {
    return `/api/v1/products/product-list/?type_id=${product_type}&verification_status=1`
}
export const detailProduct = (id : string) => {
    return `/api/v1/products/product-list/${id}`
}
export const detailStore = (id : string) => {
    return `/api/v1/products/store-datas/${id}/`
}
export const cetegoryArticle = '/api/v1/articles/article-categories/'

export const listArticle = '/api/v1/articles/list-articles/'

export const listArticleByID = (id_article : string) => {
    return `/api/v1/articles/list-articles/${id_article}`
}
export const liatArticleByIdArticle = (id_articles_category : string) => {
    return `/api/v1/articles/list-articles/?category_id=${id_articles_category}`
}
export const liatArticleBySearch = (id_articles_category : string, search: string ) => {
    return `/api/v1/articles/list-articles/?category_id=${id_articles_category}&search=${search}`
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

const getAllNotification = ({id, setData, setLoading, token}: AxiosProps) => {
    axios.get(mainLink + allNotification(id!),{ 
        headers: { "Authorization": `Token ${token}` } 
    })
    .then(placement => {
        setData!(placement.data)
        setLoading!(false)
        console.log(placement.data)
    })
}

const getUerNotification = ({id, setData, setLoading, token}: AxiosProps) => {
    axios.get(mainLink + detailNotificationUser(id!),{ 
        headers: { "Authorization": `Token ${token}` } 
    })
    .then(placement => {
        setData!(placement.data)
        console.log(placement.data)
    })
    .finally(()=>{
        axios.patch(mainLink + patchlNotificationUser(id!),
        {
            read : 1
        },
        {
            headers: { "Authorization": `Token ${token}` }
        })
        .then(value => {
            console.log("mantaps",value)
            setLoading!(false)
        })
    })
}
const getSystemNotification = ({id, setData, setLoading, token}: AxiosProps) => {
    axios.get(mainLink + detailNotificationSistem(id!),{ 
        headers: { "Authorization": `Token ${token}` } 
    })
    .then(placement => {
        setData!(placement.data)
        setLoading!(false)
        console.log(placement.data)
    })
}
const getTypepriceInformation = ({setLoading, token, setData}: AxiosProps) => {
    axios.get(mainLink + productType,{
        headers: { "Authorization": `Token ${token}` }
    })
    .then(placement => {
        setData!(placement.data)
        console.log(placement.data)
        setLoading!(false)
    })
}

const getListProductPrice = ({setLoading, token, setData, id}: AxiosProps) => {
    axios.get(mainLink + productList(id!),{
        headers: { "Authorization": `Token ${token}` }
    })
    .then(placement => {
        setData!(placement.data)
        console.log(placement.data)
        setLoading!(false)
    })
}

const getDetailProduct = ({setLoading, token, setData, id, setStatus}: AxiosProps) => {
    axios.get(mainLink + detailProduct(id!),{
        headers: { "Authorization": `Token ${token}` }
    })
    .then(placement => {
        setData!(placement.data)
        // console.log(placement.data)
        axios.get(mainLink + detailStore(placement.data.id), {
            headers: { "Authorization": `Token ${token}` }
        })
        .then(value => {
            const temp = [
                {
                    tittle: "Nama Usaha",
                    data: value.data.name
                },
                {
                    tittle: "Alamat",
                    data: value.data.address
                },
                {
                    tittle: "Nomor Telepon",
                    data: value.data.telephone
                },
            ]
            setStatus!(temp)
            console.log(value.data)
            setLoading!(false)
        })
    })
    
}

const getCategoryArticle = ({setLoading, token, setData}: AxiosProps) => {
    axios.get(mainLink + cetegoryArticle, {
        headers: { "Authorization": `Token ${token}` }
    })
    .then(placement => {
        setData!(placement.data)
        console.log(placement.data)
        setLoading!(false)
    })
}

const getListArticle = ({setLoading, token, setData}: AxiosProps) => {
    axios.get(mainLink + listArticle, {
        headers: { "Authorization": `Token ${token}` }
    })
    .then(placement => {
        setData!(placement.data)
        console.log(placement.data)
        setLoading!(false)
    })
}

const getListArticleByID = ({setLoading, token, setData, id}: AxiosProps) => {
    axios.get(mainLink + listArticleByID(id!), {
        headers: { "Authorization": `Token ${token}` }
    })
    .then(placement => {
        setData!(placement.data)
        console.log(placement.data)
        setLoading!(false)
    })
}

const getListArticleByIDArticle = ({setLoading, token, setData, id}: AxiosProps) => {
    axios.get(mainLink + liatArticleByIdArticle(id!), {
        headers: { "Authorization": `Token ${token}` }
    })
    .then(placement => {
        setData!(placement.data)
        console.log(placement.data)
        setLoading!(false)
    })
}

const getlistArticleBySearch = ({setLoading, token, setData, id, value}: AxiosProps) => {
    axios.get(mainLink + liatArticleBySearch(id!,value), {
        headers: { "Authorization": `Token ${token}` }
    })
    .then(placement => {
        setData!(placement.data)
        console.log(placement.data)
        setLoading!(false)
    })
}
const ApiAxios = {
    postRegistration,
    postLogin,
    postForgetPassowrd,
    putChangePassword,
    getProfil,
    getAllNotification,
    getUerNotification,
    getSystemNotification,
    getTypepriceInformation,
    getListProductPrice,
    getDetailProduct,
    getCategoryArticle,
    getListArticle,
    getListArticleByID,
    getListArticleByIDArticle,
    getlistArticleBySearch
}
export default ApiAxios