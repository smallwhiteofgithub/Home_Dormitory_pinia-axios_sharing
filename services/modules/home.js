import hyRequest from '../request'

export function getHomeHotSuggests() {
  return hyRequest.get({
    url: "/home/hotSuggests"
  })
}


export function getHomeCategories() {
  return hyRequest.get({
    url: "/home/categories"
  })
}

export function getHomeHouseList(currentPage) {
  return hyRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}

export function getDormitory(currentDorm){
  return hyRequest.get({
    url:"/home/dormlist",
    params:{
      page:currentDorm
    }
  })
}