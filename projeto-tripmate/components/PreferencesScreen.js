import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "../styles/PreferencesScreenStyles";

export default function App() {
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const maxSelections = 5;
  const navigation = useNavigation();

  const preferences = [
    "Viagem de aventura 🏞️",
    "Escapadinhas na cidade 🏙️",
    "Exploração Cultural 🏛️",
    "Acampamento 🏕️",
    "Férias na praia 🏖️",
    "Natureza 🌲",
    "Relaxantes 🏝️",
    "Viagens rodoviárias 🚗",
    "Turismo Gastronômico 🍔",
    "Mochilão 🎒",
    "Férias em cruzeiro 🚢",
    "Férias 🎉",
    "Esqui/Snowboard 🎿",
    "Tour do Vinho 🍷",
    "Safaris 🦁",
    "Galerias de arte 🖼️",
  ];

  const togglePreference = (preference) => {
    if (selectedPreferences.includes(preference)) {
      setSelectedPreferences((prev) =>
        prev.filter((item) => item !== preference)
      );
    } else if (selectedPreferences.length < maxSelections) {
      setSelectedPreferences((prev) => [...prev, preference]);
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Preferences')}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar} />
        </View>
      </View>

      <Text style={styles.title}>Preferências de viagem ✈️</Text>
      <Text style={styles.subtitle}>
        Diga-nos suas preferências de viagem e adaptaremos as recomendações ao
        seu estilo. Não se preocupe, você sempre pode alterá-lo
        posteriormente nas configurações.
      </Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Pesquisar preferências de viagem"
      />

      <FlatList
        data={preferences}
        keyExtractor={(item) => item}
        numColumns={2}
        columnWrapperStyle={styles.preferenceRow}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.preferenceButton,
              selectedPreferences.includes(item)
                ? styles.selectedPreference
                : null,
            ]}
            onPress={() => togglePreference(item)}
          >
            <Text
              style={[
                styles.preferenceText,
                selectedPreferences.includes(item)
                  ? styles.selectedPreferenceText
                  : null,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Botão desativado até selecionar 5 preferências */}
      <TouchableOpacity
        style={[
          styles.continueButton,
          selectedPreferences.length < maxSelections
            ? styles.disabledButton // Adiciona um estilo de botão desativado
            : null,
        ]}
        onPress={() => navigation.navigate('SignUp')}
        disabled={selectedPreferences.length < maxSelections} // Desativa o botão se menos de 5 opções forem selecionadas
      >
        <Text
          style={[
            styles.continueButtonText,
            selectedPreferences.length < maxSelections
              ? styles.disabledButtonText // Adiciona um estilo ao texto do botão desativado
              : null,
          ]}
        >
          Continue ({selectedPreferences.length}/{maxSelections})
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.footerText}>
          Já tem uma conta? 
          <Text style={styles.footerLink}> Volte</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
