import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useState } from 'react'
import { Button, Card, Text } from 'react-native-paper';

export default function Home({navigation}) {

    const [number, setNumber] = useState(1);

    const check = () => {
        
        if(number == 1) {
            console.log("ONE")
        } else if(number == 2) {
            console.log("TWO")
        } else if(number == 3) {
            navigation.push('About')
        }
        console.log(number);
        setNumber(number + 1)
    }

    return (
        <View style={styles.container}>
            <Card title="Card Title" subtitle=" Card Subtitle" style={styles.cardContainer}>
                <Card.Cover source={{ uri: 'https://picsum.photos/400' }} />
                <Text styles={styles.textContent} variant="displayMedium">Class 3 Exercise</Text>
                <Text variant="titleMedium">3-2 Expo Logic Data
                assignment 3</Text>
            </Card>
            <TouchableOpacity onPress={() => check()} 
                style={number === 1 ? styles.btnBlue : 
                number === 2 ? styles.btnRed : styles.btnGreen }>
                <Text>Click Me</Text>
            </TouchableOpacity>
            <Text>Sept. 21st 2023</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2D4120',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    btnBlue: {
        alignItems: 'center',
        backgroundColor: '#EBC04D',
        borderColor: '#EBC04D',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
    btnRed: {
        alignItems: 'center',
        backgroundColor: '#CE5A18',
        borderColor: '#CE5A18',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
    btnGreen: {
        alignItems: 'center',
        backgroundColor: '#EBC04D',
        borderColor: '#EBC04D',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
    cardContainer: {
        height: '300px',
        width: '300px', 
        padding: '30', 
    },
    textContent:{  
        fontSize: '148px',
        color: '#EBC04D',
        backgroundColor: '#2D4120',
    }
});
