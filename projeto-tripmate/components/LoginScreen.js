import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './../styles/LoginScreenStyles.js';  // Importa os estilos do arquivo styles.js
import { useNavigation } from '@react-navigation/native';
import { LanguageContext } from '../contexts/LanguageContext';
import React, { useContext, useState } from 'react';
import { translations } from '../locales/translations';

import { supabase } from '../supabase/supabase'; // Certifique-se de que o supabase está corretamente exportado

export default function LoginScreen() {
  const navigation = useNavigation();
  const { language } = useContext(LanguageContext);
  const t = translations[language]; // Obtém as traduções baseadas no idioma

  // Estados para controlar o email e senha
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função para realizar o login com o Supabase
  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        throw error;
      }else{
        alert('Login efetuado');
        // Se o login for bem-sucedido, navega para a tela principal ou dashboard
      navigation.navigate('Home'); // Substitua 'Dashboard' pela sua tela de destino
      }

    } catch (error) {
      alert(t.loginError, error.message); // Exibe erro, traduzido
    }
  };

  return (
    <View style={styles.container}>
      {/* Header com logo e idioma */}
      <View style={styles.header}>
        <Text style={styles.title}>{t.login}</Text> {/* Traduzido */}
        <TouchableOpacity style={styles.languageButton} onPress={() => navigation.navigate('Language')}>
          <Text style={styles.language}>
            {language === 'pt' ? t.portuguese : language === 'en' ? t.english : t.spanish}
          </Text> {/* Tradução do idioma */}
        </TouchableOpacity>
      </View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.appTitle}>TripMate</Text>
      </View>
      <Text style={styles.slogan}>{t.exploreTheWorld}</Text> {/* Traduzido */}

      {/* Campos de entrada */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={t.emailPlaceholder}
          value={email}
          onChangeText={setEmail} // Atualiza o estado do email
        />
        <TextInput
          style={styles.input}
          placeholder={t.passwordPlaceholder}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword} // Atualiza o estado da senha
        />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>{t.forgotPassword}</Text> {/* Traduzido */}
        </TouchableOpacity>
      </View>

      {/* Botão de login */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>{t.login}</Text> {/* Traduzido */}
      </TouchableOpacity>

      {/* Login social */}
      <Text style={styles.orText}>{t.orLoginWith}</Text> {/* Traduzido */}
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={{ uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png' }} style={styles.socialIcon} />
          <Text style={styles.socialText}>Gmail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/018/910/719/non_2x/facebook-logo-facebook-icon-free-free-vector.jpg' }} style={styles.socialIcon} />
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Link para criar conta */}
      <TouchableOpacity onPress={() => navigation.navigate('Preferences')}>
        <Text style={styles.signupText}>{t.noAccount} <Text style={styles.signupLink}>{t.createAccount}</Text></Text> {/* Traduzido */}
      </TouchableOpacity>
    </View>
  );
}
