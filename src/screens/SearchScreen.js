import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Animated } from 'react-native'
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
    <View style={styles.appStyle}>
      <SearchBar
        searchTerm={searchTerm}
        //passing in reference to the function we want to call
        onTermChange={setSearchTerm}
        onTermSubmit={() => searchAPI(searchTerm)}
      />

      {err ? <Text>{err}</Text> : null}

      <ScrollView>
        <ResultsList results={filterByPrice('$')} title='Cost Effective' />
        <ResultsList results={filterByPrice('$$')} title='Pricier' />
        <ResultsList results={filterByPrice('$$$')} title='Expensive' />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
  },
  //scrollable for andriod
  appStyle: {
    flex: 1,
  },
})

export default SearchScreen

// const scrollY = new Animated.Value(0)
//   const translateY = scrollY.interpolate({
//     inputRange: [0, 50],
//     outputRange: [0, -50],
//   })
// onScroll={e => {
//   //how much user has scrolled
//   scrollY.setValue(e.native.event.contentOffset.y)
// }}
