import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ResultsDetail from './ResultsDetail'
const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />
        }}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 15,
  },
})

export default ResultsList
