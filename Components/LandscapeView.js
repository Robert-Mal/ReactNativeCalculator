import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = ({count, setCount, calculateResult}) => {

  const DisplayText = (props) => {
    return(
      <Text style={styles.displayText}>
        {props.children}
      </Text>
    )
  }

  const ButtonText = (props) => {
    return(
    <Text style={styles.buttonText}>
      {props.children}
    </Text>)
  }

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
      case '√':
        setCount(count + '√(');
        break;
      case 'x!':
        setCount(count + '!');
        break;
      case 'e^x':
        setCount(count + 'e^(');
        break;
      case '10^x':
        setCount(count + '10^(');
        break;
      case 'ln':
        setCount(count + 'ln(');
        break;
      case 'log':
        setCount(count + 'log(');
        break;
      case 'x^2':
        setCount(count + '^2');
        break;
      case 'x^3':
        setCount(count + '^3');
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

      <MyButton style={styles.ac}>√</MyButton>
      <MyButton style={styles.ac}>x!</MyButton>
      <MyButton style={styles.ac}>(</MyButton>
      <MyButton style={styles.ac}>)</MyButton>
      <MyButton style={styles.ac}>%</MyButton>
      <MyButton style={styles.sign}>AC</MyButton>

      <MyButton style={styles.ac}>e^x</MyButton>
      <MyButton style={styles.ac}>10^x</MyButton>
      <MyButton style={styles.number}>7</MyButton>
      <MyButton style={styles.number}>8</MyButton>
      <MyButton style={styles.number}>9</MyButton>
      <MyButton style={styles.sign}>/</MyButton>

      <MyButton style={styles.ac}>ln</MyButton>
      <MyButton style={styles.ac}>log</MyButton>
      <MyButton style={styles.number}>4</MyButton>
      <MyButton style={styles.number}>5</MyButton>
      <MyButton style={styles.number}>6</MyButton>
      <MyButton style={styles.sign}>*</MyButton>

      <MyButton style={styles.ac}>e</MyButton>
      <MyButton style={styles.ac}>x^2</MyButton>
      <MyButton style={styles.number}>1</MyButton>
      <MyButton style={styles.number}>2</MyButton>
      <MyButton style={styles.number}>3</MyButton>
      <MyButton style={styles.sign}>-</MyButton>

      <MyButton style={styles.ac}>π</MyButton>
      <MyButton style={styles.ac}>x^3</MyButton>
      <MyButton style={styles.number}>0</MyButton>
      <MyButton style={styles.number}>.</MyButton>
      <MyButton style={styles.sign}>=</MyButton>
      <MyButton style={styles.sign}>+</MyButton>
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
    height: 142,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    minWidth: '100%', 
  },
  displayText: {
    color: '#fff',
    fontSize: 50,
    textAlign: 'center',
  },
  button: {
    borderWidth: 50,
    borderColor: '#535457',
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: '#535457',
  },
  ac: {
    backgroundColor: '#646466',
    minWidth: '16.66%',
  },
  number: {
    backgroundColor: '#7e7d7f',
    minWidth: '16.66%',
  },
  sign: {
    backgroundColor: '#f2a33c',
    minWidth: '16.66%',
  },
  zero: {
    backgroundColor: '#7e7d7f',
    minWidth: '16.66%',
  }
});

export default App;