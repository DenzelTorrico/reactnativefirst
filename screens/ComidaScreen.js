import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import axios from 'axios';

export default function ComidaScreen() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.18.12:8083/crudphp/');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Vista Paisajes</Text>
            {data.map((item, index) => (
                <View key={index} style={styles.item}>
                    <Image 
                        source={{ uri: `https://picsum.photos/id/${10+index}/200/300` }} 
                        style={styles.image}
                    />
                    <Text style={styles.text}>{item.id}</Text>
                    <Text style={styles.text}>{item.Nombre}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 300,
        marginBottom: 10,
        borderRadius: 5,
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
    },
});
