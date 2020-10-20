console.log('Hello the sssssld')

import axios from 'axios'

axios.get('/api/home').then(res => {
  console.log(res)
  const { provinceList, cityList, areaList } = res.data
  console.log( provinceList, cityList, areaList)
})

