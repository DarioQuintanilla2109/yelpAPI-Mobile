import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onTermChange={newTerm => setSearchTerm(newTerm)}
        onTermSubmit={() => console.log('term was submitted')}
      />
      <Text>{searchTerm}</Text>
      <Text>We have found {results.length} results </Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
