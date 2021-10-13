import { useState } from 'react'
export default function useData () {
  const [data, setData] = useState(null)
  const newObj = {}
  const getData = async () => {
    return newObj.get('/').then(res =>
      setData(res.data.records)
    )
  }
  return {
    getData,
    data
  }
}
