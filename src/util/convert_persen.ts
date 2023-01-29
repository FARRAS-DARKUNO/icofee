const convertPersen = (dataNew : number, dataOld : number) => {
    let temp = (dataNew - dataOld)/dataOld * 100
    let convert = temp.toFixed(1)
    return convert.toString()
}

export default convertPersen