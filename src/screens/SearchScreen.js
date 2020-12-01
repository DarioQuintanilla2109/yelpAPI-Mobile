import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Animated } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'
import { FontAwesome } from '@expo/vector-icons'
import { FontAwesome6 } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
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
        <ResultsList
          results={filterByPrice('$')}
          title={<FontAwesome name='money' style={styles.moneyStyle} />}
        />
        <ResultsList
          results={filterByPrice('$$')}
          title={
            <>
              <FontAwesome name='money' style={styles.moneyStyle} />
              <FontAwesome name='money' style={styles.moneyStyle} />
            </>
          }
        />
        <ResultsList
          results={filterByPrice('$$$')}
          title={
            <>
              <FontAwesome name='money' style={styles.moneyStyle} />
              <FontAwesome name='money' style={styles.moneyStyle} />
              <FontAwesome name='money' style={styles.moneyStyle} />
            </>
          }
        />
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
    backgroundColor: '#ffe3d8',
  },
  moneyStyle: {
    marginRight: 5,
    fontSize: 24,
    color: '#03506f',
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
