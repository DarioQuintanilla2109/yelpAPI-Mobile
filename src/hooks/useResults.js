import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [err, setErr] = useState('')

  const searchAPI = async defaultTerm => {
    //search gets concatenated with our base url
    try {
      const response = await yelp.get('/search', {
        //additional params to be concatenated to our string
        params: {
          limit: 50,
          term: defaultTerm,
          location: 'fort lauderdale',
        },
      })
      setResults(response.data.businesses)
    } catch (err) {
      setErr('Request failed' + err)
    }
  }

  //only run one time
  useEffect(() => {
    searchAPI('pasta')
  }, [])

  return [searchAPI, results, err]
}
