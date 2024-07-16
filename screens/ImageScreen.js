import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default function ImageScreen({ route }) {
  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenidos</Text>
      <Image source={{ uri: name }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
