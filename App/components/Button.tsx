import React from 'react'
import {Dimensions, GestureResponderEvent, StyleSheet, Text, TouchableHighlight} from 'react-native'

const screen = Dimensions.get('window')
const buttonWidth = screen.width / 4

const styles = StyleSheet.create({
  text: {
    color: '#dbdbdb',
    fontSize: 28,
  },
  textSecondary: {
    color: '#a9a9a9',
  },
  button: {
    backgroundColor: '#333333',
    height: Math.floor(buttonWidth - 15),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 5,
  },
  buttonDouble: {
    height: Math.floor(buttonWidth - 15) * 2,
  },
  buttonSecondary: {
    backgroundColor: '#142e47',
  },
  buttonAccent: {
    backgroundColor: '#016cde',
    color: '#FFF',
  },
})

interface Props {
  onPress: (event: GestureResponderEvent) => void
  text: string
  size?: string
  theme?: string
}

const CustomButton: React.FC<Props> = ({onPress, text, size, theme}) => {
  const buttonStyles = [styles.button]
  const textStyles = [styles.text]

  if (size === 'double') {
        // @ts-ignore
    buttonStyles.push(styles.buttonDouble)
  }

  if (theme === 'secondary') {
        // @ts-ignore
    buttonStyles.push(styles.buttonSecondary)
        // @ts-ignore
    textStyles.push(styles.textSecondary)
  } else if (theme === 'accent') {
        // @ts-ignore
    buttonStyles.push(styles.buttonAccent)
  }

  return (
        <TouchableHighlight underlayColor='#414141' onPress={onPress} style={buttonStyles}>
            <Text style={textStyles}>{text}</Text>
        </TouchableHighlight>
  )
}

export default CustomButton
