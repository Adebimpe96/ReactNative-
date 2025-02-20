import React, { useState } from 'react'
// import { Auth } from '../../Config/firebase'
// import { createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { View, Button, TextInput, StyleSheet } from 'react-native'

const Signin = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const emailChange = (emailText: string) => {
    setEmail(emailText)
  }

  const passwordChange = (passwordText: string) => {
    setPassword(passwordText)
  }
  // const handleGoogleSignIn = async () => {
  //   try {
  //     await signInWithRedirect(Auth, googleProvider)
  //     setEmail('')
  //     setPassword('')
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  const handleSignIn = async () => {
    try {
      // await createUserWithEmailAndPassword(Auth, email, password)
      setEmail('')
      setPassword('')
    } catch (error) {
      console.error(error)
    }
  }

  const handleSignOut = async () => {
    try {
      // await signOut(Auth)
      console.log('logged out')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder="Email..." onChangeText={emailChange} style={styles.textInput} />
      <TextInput placeholder="Password..." onChangeText={passwordChange} style={styles.textInput} secureTextEntry={true} />
      <View style={styles.buttonContainer}>
        <Button title="Sign In" onPress={handleSignIn} color="#b180f0" />
        {/* <Button title="Sign In With Google" onPress={handleGoogleSignIn} color="#791AF5" /> */}
        <Button title="Sign out" onPress={handleSignOut} color="#791AF5" />
      </View>
    </View>
  )
}

export default Signin

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    gap: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    margin: 10,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },

  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    marginTop: 10,
  },
})
