import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
  Linking,
} from 'react-native'

const linkTo = phoneNumber => {
  let number = phoneNumber
  number = number.toString()
  if (Platform.OS === 'ios') {
    number = `telprompt:${number}`
  } else {
    number = `tel:${number}`
  }
  return Linking.openURL(number)
}

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Image style={styles.imgStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>{result.rating} Stars</Text>
      <TouchableHighlight onPress>
        <Text onPress={() => linkTo(result.phone)}>{result.phone}</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  imgStyle: {
    width: 250,
    height: 120,
    borderRadius: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
  },
})

export default ResultsDetail
