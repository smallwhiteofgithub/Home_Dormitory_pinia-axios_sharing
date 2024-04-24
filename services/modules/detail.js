import hyRequset from '../request'

export function getDetailInfos(houseId) {
    return hyRequset.get({
        url: "/detail/infos",
        params: {
            houseId
        }
    })

}