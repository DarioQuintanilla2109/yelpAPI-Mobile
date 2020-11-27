import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchAPI, results, err] = useResults()

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
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
