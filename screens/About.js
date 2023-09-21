import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import { bookStore } from '../data/books'
import { useState } from 'react'
import { Avatar, Text, Card, Surface} from 'react-native-paper';

export default function About({navigation}) {

    const [data, setData] = useState();

    const addingData = () => {
        console.log("started");
        setData(bookStore);
    };

    return (
        <View style={styles.container}>
            <Avatar.Text size={80} label="You" />
           <Card title="Card Title" subtitle=" Card Subtitle">
            <Surface style={styles.surface} elevation={4}>
                <Text>Welcome to the Dashboard</Text>
            </Surface>
            </Card>
            <Button styles={styles.dataButton} title="Show data" onPress={() => addingData()}/>
            {
                data && data.books.map((b, index) => {
                    if(b.category.toLowerCase() == "java") {
                        return (
                            <View key={index}>
                                <Text variant="displaySmall">{b.title}</Text>
                                {
                                b.authors && b.authors.map((a, ind) => {
                                    return(
                                        <Text variant="titleSmall" key={ind}>
                                            {a}
                                        </Text>
                                    )
                                })
                            }
                            </View>
                        )
                    }
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBC04D',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    dataButton:{
        backgroundColor: '#CE5A18',
        borderColor: '#CE5A18',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },
    textContent:{
        backgroundColor:'#2D4120'
    },
    surface: {
        padding: 20,
        height: 80,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
      },
});
