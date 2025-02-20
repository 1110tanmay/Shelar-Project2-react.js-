import React  from 'react';
import { Alert, StyleSheet, FlatList, View } from 'react-native';
import CustomButton from './CustomButton';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen  = ({ navigation }) => {
  
    const [buttons, setButtons] = useState ({links:[
      { 
        id: '1', 
        title: 'Asia', 
        url: 'https://en.wikipedia.org/wiki/Asia',
        style: { backgroundColor: '#27445D', borderRadius: 20 }, 
        textStyle: { fontFamily: 'Verdana', color: '#27445D', fontSize: 16 } 
      },
      { 
        id: '2', 
        title: 'North America', 
        url: 'https://en.wikipedia.org/wiki/North_America',
        style: { backgroundColor: '#497D74', borderWidth: 4, borderColor: '#000' }, 
        textStyle: { fontFamily: 'Courier New', color: '#497D74', fontSize: 16 } 
      },
      { 
        id: '3', 
        title: 'Europe', 
        url: 'https://en.wikipedia.org/wiki/Europe',
        style: { backgroundColor: '#71BBB2', shadowColor: '#000', shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.5, shadowRadius: 5 }, 
        textStyle: { fontFamily: 'Times New Roman', color: '#71BBB2', fontSize: 16 } 
      },
      { 
        id: '4', 
        title: 'Africa', 
        url: 'https://en.wikipedia.org/wiki/Africa',
        style: { backgroundColor: '#EFE9D5', paddingVertical: 25, paddingHorizontal: 18 }, 
        textStyle: { fontFamily: 'Georgia', color: '#EFE9D5', fontSize: 16 } 
      },
      { 
        id: '5', 
        title: 'Antartica', 
        url: 'https://en.wikipedia.org/wiki/Antarctica',
        style: { backgroundColor: '#3674B5', borderRadius: 50 }, 
        textStyle: { fontFamily: 'Trebuchet MS', color: '#3674B5', fontSize: 16 } 
      },
      { 
        id: '6', 
        title: 'Australia', 
        url: 'https://en.wikipedia.org/wiki/Australia',
        style: { backgroundColor: '#578FCA', borderBottomWidth: 3, borderBottomColor: '#333' }, 
        textStyle: { fontFamily: 'Arial', color: '#578FCA', fontSize: 16 } 
      },
      { 
        id: '7', 
        title: 'South America', 
        url: 'https://en.wikipedia.org/wiki/South_America',
        style: { backgroundColor: '#A1E3F9', borderLeftWidth: 4, borderLeftColor: '#fff' }, 
        textStyle: { fontFamily: 'Comic Sans MS', color: '#A1E3F9', fontSize: 16 } 
      },
    ],});

    const handleButtonPress = (url) => {
      navigation.navigate('WebViewScreen', {url});
    };
  
    return (
      <View style={styles.container}>
        <FlatList
          data={buttons.links}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CustomButton
              onPress={() => handleButtonPress(item.url)}
              title={item.title}
              style={{ ...item.style,  textStyle:item.textStyle }}
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
