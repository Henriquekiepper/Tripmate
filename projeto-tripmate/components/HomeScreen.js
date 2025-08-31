import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "../styles/HomeScreenStyles";

const categories = [
  { id: '1', name: 'Todos', icon: 'grid-outline' },
  { id: '2', name: 'Praia', icon: 'sunny-outline' },
  { id: '3', name: 'Floresta', icon: 'leaf-outline' },
  { id: '4', name: 'Montanha', icon: 'trail-sign-outline' },
];

const popularPlaces = [
  {
    id: '1',
    name: 'Convento da Penha',
    image: require('../assets/images/convento.jpg'), // Substitua pelo caminho correto
    rating: 5.0,
  },
  {
    id: '2',
    name: 'Chocolate Garoto Museu',
    image: require('../assets/images/garoto.jpg'), // Substitua pelo caminho correto
    rating: 4.5,
  },
];

const nearbyAttractions = [
  {
    id: '1',
    name: 'Praia da Costa',
    image: require('../assets/images/praia-da-costa.jpg'), // Substitua pelo caminho correto
    rating: 5.0,
  },
  {
    id: '2',
    name: 'Morro do Moreno',
    image: require('../assets/images/morro-do-moreno.jpg'), // Substitua pelo caminho correto
    rating: 4.8,
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="location-outline" size={20} color="#000" />
        <Text style={styles.locationText}>Espirito Santo, BR</Text>
        <Ionicons name="person-circle-outline" size={30} color="#000" />
      </View>

      {/* Navegação */}
      <View style={styles.nav}>
        <Text style={[styles.navItem, styles.navItemActive]}>Lugares</Text>
        <Text style={styles.navItem}>Eventos</Text>
        <Text style={styles.navItem}>Voos</Text>
        <Text style={styles.navItem}>Hotéis</Text>
      </View>

      {/* Categorias */}
      <View style={styles.categories}>
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryButton}>
            <View style={styles.categoryIconContainer}>
              <Ionicons name={category.icon} size={20} color="#fff" />
            </View>
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Lugares Populares */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Lugares populares</Text>
        <Text style={styles.viewAll}>Ver tudo</Text>
      </View>
      <FlatList
        data={popularPlaces}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardRating}>⭐ {item.rating}</Text>
          </View>
        )}
      />

      {/* Outras Atrações Perto de Você */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Outras atrações perto de você</Text>
        <Text style={styles.viewAll}>Ver tudo</Text>
      </View>
      <FlatList
        data={nearbyAttractions}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardRating}>⭐ {item.rating}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}
