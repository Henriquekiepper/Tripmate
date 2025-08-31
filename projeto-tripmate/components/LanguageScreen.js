// src/components/LanguageScreen.js
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LanguageContext } from '../contexts/LanguageContext';
import { useNavigation } from '@react-navigation/native'; // Importar o useNavigation
import styles from '../styles/LanguageScreenStyles';

export default function LanguageScreen() {
  const { changeLanguage } = useContext(LanguageContext);
  const navigation = useNavigation(); // Obter o objeto de navegação

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);  // Muda o idioma
    navigation.goBack();   // Retorna à tela anterior
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione seu idioma</Text>
      <TouchableOpacity onPress={() => handleLanguageChange('pt')} style={styles.optionButton}>
        <Text style={styles.optionText}>Português</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleLanguageChange('en')} style={styles.optionButton}>
        <Text style={styles.optionText}>Inglês</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleLanguageChange('es')} style={styles.optionButton}>
        <Text style={styles.optionText}>Espanhol</Text>
      </TouchableOpacity>
    </View>
  );
}
