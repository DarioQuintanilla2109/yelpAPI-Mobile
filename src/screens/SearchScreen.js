import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchAPI, results, err] = useResults()

  //passing in $, $$, $$$
  //return all matches
  const filterByPrice = price => {
    return results.filter(result => {
      return result.price === price
    })
  }

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        //passing in reference to the function we want to call
        onTermChange={setSearchTerm}
        onTermSubmit={() => searchAPI(searchTerm)}
      />
      {err ? <Text>{err}</Text> : null}
      <Text>We have found {results.length} results </Text>

      <ResultsList results={filterByPrice('$')} title='Cost Effective' />
      <ResultsList results={filterByPrice('$$')} title='Pricier' />
      <ResultsList results={filterByPrice('$$$')} title='Expensive' />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
