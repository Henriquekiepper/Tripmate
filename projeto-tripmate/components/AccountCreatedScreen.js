// src/screens/AccountCreatedScreen.js
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importe seu estilo personalizado aqui
import styles from '../styles/AccountCreatedScreenStyles.js';

export default function AccountCreatedScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Ícone de sucesso */}
      <View style={styles.iconContainer}>
        <Image source={require('../assets/images/success-check.png')} style={styles.successIcon} />
      </View>

      {/* Mensagem de sucesso */}
      <Text style={styles.title}>Uma conta criada com sucesso</Text>
      <Text style={styles.message}>
        Parabéns! Agora você faz parte da comunidade TripMate. Suas experiências de viagem personalizadas aguardam.
      </Text>

      {/* Botão para explorar destinos */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Explore Destinos</Text>
      </TouchableOpacity>
    </View>
  );
}
