import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import ResultsDetail from './ResultsDetail'
import { withNavigation } from 'react-navigation'
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null
  }
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResultsShow', { id: item.id })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          )
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
    marginRight: 9,
  },
})

//skipped the parent component and allowed ResultsList
export default withNavigation(ResultsList)
