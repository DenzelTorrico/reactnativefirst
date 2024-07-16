import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper'; // Importa los componentes necesarios de React Native Paper
import axios from 'axios';

export default function DetailsScreen({ navigation }) {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get("https://api.thecatapi.com/v1/images/search?limit=10")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleImagePress = (imageUrl) => {
    navigation.navigate("Image", { name: imageUrl });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((element, index) => (
        <Card key={index} style={styles.card}>
          <Card.Cover source={{ uri: element.url }} />
          <Card.Content>
            <Text style={styles.title}>ID: {element.id}</Text>
            <Text>Title: lorem gato</Text>
          </Card.Content>
          <Card.Actions>
            <Button style={styles.button} onPress={() => handleImagePress(element.url)}>
              Ver
            </Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#23323d",
    width: 50,
    height: 25,
    padding: 3,
    color: "white",
  },
});
