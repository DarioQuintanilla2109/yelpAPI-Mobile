import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
  Linking,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

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
    <>
      <View style={styles.container}>
        <Image style={styles.imgStyle} source={{ uri: result.image_url }} />
        <Text style={styles.nameStyle}>{result.name}</Text>
        <Text style={styles.starReview}>
          {result.rating}{' '}
          <Entypo name='star-outlined' style={styles.starStyle} />
        </Text>
        <TouchableHighlight>
          <Text style={styles.numStyle} onPress={() => linkTo(result.phone)}>
            <Feather style={styles.phoneStyle} name='phone-outgoing' />
          </Text>
        </TouchableHighlight>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginTop: 15,
  },
  imgStyle: {
    width: 250,
    height: 120,
    borderRadius: 5,
  },
  nameStyle: {
    fontWeight: 'bold',
    flex: 1,
  },
  starStyle: {
    fontSize: 27,
    color: '#03506f',
  },
  phoneStyle: {
    color: '#03506f',
    fontSize: 27,
  },
  starReview: {
    fontSize: 25,
    flex: 1,
  },
})

export default ResultsDetail
