import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import Login from './screens/Login';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100: 0}
      >
        <Login />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight, // Adjust for status bar
  },
});

export default App;
