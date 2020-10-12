import React from 'react'
import {  View , Text, TextInput, Button, StyleSheet } from 'react-native';

// import {borderStyle} from '../../Constants/Constants'

function InputWithLabelComponent(props){
  
  return (
    <View >

              <View style={[styles.titleInputContainer, {...props.style}]}>

                  <TextInput
                  {...props}
                  style={[{width: "100%", textAlign: "center", color: "#000", fontSize: 30},{...props.style} ]}
  
                  />
              </View>
              {/* {props.label !== undefined ?
                <View style={[styles.titleContainer,{height: props.numberOfLines !== undefined ? props.numberOfLines * 100  : null}]}>
                    <Text style={styles.titleText}>{props.label} </Text>
                </View> : */}
               
              {/* } */}
      </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    width: 80,
    // backgroundColor: '#fff',
    alignItems: 'center',
    marginHorizontal: 20

  },
  textInput: {
    width: 200
  },
  titleInputContainer: {
    borderWidth: 2,
    borderColor: '#A9A9A9',
    borderRadius: 10,
    width: 300,
    marginTop: 10,
    position: 'relative',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },
  titleText: {
    fontSize: 17,
  },
})

export default InputWithLabelComponent
