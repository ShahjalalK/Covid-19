import axios from "axios";
const url = 'https://covid19.mathdro.id/api'

export const FatchApi = async () => {
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url)
        return {confirmed, recovered, deaths, lastUpdate}
    }
    catch (error) {
            console.log(error)
    }
}

export const FatchDaily = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`)
        const modifyData = data.map((dalyData) => ({
            confirmed: dalyData.confirmed.total,
            deaths: dalyData.deaths.total,
            date: dalyData.reportDate,
        }))
        return modifyData
    }
    catch (error) {
        
    }
}