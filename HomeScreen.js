import React  from 'react';
import { Alert, StyleSheet, FlatList, View } from 'react-native';
import CustomButton from './CustomButton';

// Navigation is not used in the exercise, but will be helpful in the assignment.
const HomeScreen  = ({ navigation }) => {

    const handleButtonPress = () => {
      Alert.alert('Alert', "You tapped the button!");
    };
  
    const buttons = [
      { 
        id: '1', 
        title: 'My first button', 
        style: { backgroundColor: '#27445D', borderRadius: 20 }, 
        textStyle: { fontFamily: 'Verdana', color: '#27445D', fontSize: 16 } 
      },
      { 
        id: '2', 
        title: 'My Second button', 
        style: { backgroundColor: '#497D74', borderWidth: 4, borderColor: '#000' }, 
        textStyle: { fontFamily: 'Courier New', color: '#497D74', fontSize: 16 } 
      },
      { 
        id: '3', 
        title: 'My Third button', 
        style: { backgroundColor: '#71BBB2', shadowColor: '#000', shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.5, shadowRadius: 5 }, 
        textStyle: { fontFamily: 'Times New Roman', color: '#71BBB2', fontSize: 16 } 
      },
      { 
        id: '4', 
        title: 'My Fourth button', 
        style: { backgroundColor: '#EFE9D5', paddingVertical: 25, paddingHorizontal: 18 }, 
        textStyle: { fontFamily: 'Georgia', color: '#EFE9D5', fontSize: 16 } 
      },
      { 
        id: '5', 
        title: 'My Fifth button', 
        style: { backgroundColor: '#3674B5', borderRadius: 50 }, 
        textStyle: { fontFamily: 'Trebuchet MS', color: '#3674B5', fontSize: 16 } 
      },
      { 
        id: '6', 
        title: 'My Sixth button', 
        style: { backgroundColor: '#578FCA', borderBottomWidth: 3, borderBottomColor: '#333' }, 
        textStyle: { fontFamily: 'Arial', color: '#578FCA', fontSize: 16 } 
      },
      { 
        id: '7', 
        title: 'My Seventh button', 
        style: { backgroundColor: '#A1E3F9', borderLeftWidth: 4, borderLeftColor: '#fff' }, 
        textStyle: { fontFamily: 'Comic Sans MS', color: '#A1E3F9', fontSize: 16 } 
      },
    ];
  
    return (
      <View style={styles.container}>
        <FlatList
          data={buttons}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CustomButton
              onPress={() => handleButtonPress(item.title)}
              title={item.title}
              style={{ ...item.style, textStyle: item.textStyle }}
            />
          )}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 50
    },
    button: {
      margin: 10,
      alignItems:'center'
    }
  });

  export default HomeScreen;