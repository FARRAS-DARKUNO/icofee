const RemoveTagHTML = (data : string) => {
    let remove = data.replace(/(<([^>]+)>)/gi, "")

    return remove
}

export default RemoveTagHTML
