import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = ({count, setCount, calculateResult}) => {

  const DisplayText = (props) => {
    return(
      <Text style={styles.displayText}>
        {props.children}
      </Text>
    )
  };

  const ButtonText = (props) => {
    return(
    <Text style={styles.buttonText}>
      {props.children}
    </Text>)
  };

  const MyButton = (props) => {
    return(
    <TouchableOpacity style={styles.button, props.style} onPress={() => { 
      switch (props.children){
        case '=':
          calculateResult();
          break;
        case 'AC':
          setCount('');
          break;
        default:
          setCount(count + props.children);
        }
     }
    }>
      <ButtonText>{props.children}</ButtonText>
    </TouchableOpacity>)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.display}><DisplayText>{count}</DisplayText></View>

      <MyButton style={styles.ac}>AC</MyButton>
      <View style={styles.blank}></View>
      <MyButton style={styles.sign}>/</MyButton>

      <MyButton style={styles.number}>7</MyButton>
      <MyButton style={styles.number}>8</MyButton>
      <MyButton style={styles.number}>9</MyButton>
      <MyButton style={styles.sign}>*</MyButton>

      <MyButton style={styles.number}>4</MyButton>
      <MyButton style={styles.number}>5</MyButton>
      <MyButton style={styles.number}>6</MyButton>
      <MyButton style={styles.sign}>-</MyButton>

      <MyButton style={styles.number}>1</MyButton>
      <MyButton style={styles.number}>2</MyButton>
      <MyButton style={styles.number}>3</MyButton>
      <MyButton style={styles.sign}>+</MyButton>

      <MyButton style={styles.zero}>0</MyButton>
      <MyButton style={styles.number}>.</MyButton>
      <MyButton style={styles.sign}>=</MyButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  display: {
    backgroundColor: '#535457',
    height: 270,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    minWidth: '100%',
  },
  displayText: {
    color: '#fff',
    fontSize: 100,
    textAlign: 'center',
  },
  button: {
    borderWidth: 50,
    borderColor: '#535457',
  },
  buttonText: {
    color: '#fff',
    fontSize: 50,
    textAlign: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#535457',
  },
  ac: {
    backgroundColor: '#646466',
    minWidth: '25%',
  },
  blank: {
    backgroundColor: '#646466',
    minWidth: '50%',
  },
  number: {
    backgroundColor: '#7e7d7f',
    minWidth: '25%',
  },
  sign: {
    backgroundColor: '#f2a33c',
    minWidth: '25%',
  },
  zero: {
    backgroundColor: '#7e7d7f',
    minWidth: '50%',
  }
});

export default App;