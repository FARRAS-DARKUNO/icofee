const convertDete = (data : any) => {
    
    let year = data[0] + data[1]+data[2] + data[3]
    let month = data[5] + data[6]
    let day = data[8] + data[9]
    let hour = data[11] + data[12]
    let minute = data[14] + data[15]

    
    if (month == '01') month = 'Januari'
    if (month == '02') month = 'Februari'
    if (month == '03') month = 'Maret'
    if (month == '04') month = 'April'
    if (month == '05') month = 'Mei'
    if (month == '06') month = 'Juni'
    if (month == '07') month = 'Juli'
    if (month == '08') month = 'Agustus'
    if (month == '09') month = 'September'
    if (month == '10') month = 'Oktober'
    if (month == '11') month = 'Novembar'
    if (month == '12') month = 'Desember'
    
    let convert = `${day} ${month} ${year} - ${hour}:${minute}`
    return convert
}

export default convertDete