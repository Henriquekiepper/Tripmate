import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker'; // Biblioteca para o dropdown
import { useNavigation } from '@react-navigation/native';
import styles from './../styles/SignUpScreenStyles';
import { supabase } from '../supabase/supabase';

export default function SignupScreen() {
  const navigation = useNavigation();

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneCode, setPhoneCode] = useState('+55'); // Código de país padrão
  const [phoneNumber, setPhoneNumber] = useState('');

  const formatPhoneNumber = (text) => {
    const cleaned = text.replace(/\D/g, '');
    const formatted = cleaned
      .replace(/^(\d{2})(\d{5})(\d{4})$/, '$1 $2-$3')
      .slice(0, 14);
    setPhoneNumber(formatted);
  };

  const isFormValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      name.trim() !== '' &&
      surname.trim() !== '' &&
      phoneNumber.replace(/\D/g, '').length === 11 &&
      Number(age) >= 18 &&
      emailRegex.test(email) &&
      password.trim() !== '' &&
      isChecked
    );
  };

  const handleContinue = async () => {
    if (!isFormValid()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos corretamente.');
      return;
    }

    try {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) throw error;

      const { data, error: insertError } = await supabase.from('users').insert([
        {
          name: name,
          surname: surname,
          phone: phoneNumber,
          age: age,
          email: email,
          user_id: user.id,
        },
      ]);

      if (insertError) throw insertError;

      Alert.alert('Sucesso', 'Cadastro concluído!');
      navigation.navigate('Created');
    } catch (error) {
      Alert.alert('Erro', error.message || 'Algo deu errado.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Preferences')}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.progressBar} />
      </View>

      <Text style={styles.title}>Adicione um toque pessoal</Text>
      <Text style={styles.subtitle}>
        Para melhorar sua jornada de viagem, adoraríamos saber mais sobre você.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={surname}
        onChangeText={setSurname}
      />

      <View style={styles.phoneContainer}>
        <Picker
          selectedValue={phoneCode}
          onValueChange={(itemValue) => setPhoneCode(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="+55" value="+55" />
          <Picker.Item label="+1" value="+1" />
          <Picker.Item label="+44" value="+44" />
          <Picker.Item label="+91" value="+91" />
        </Picker>
        <TextInput
          style={styles.phoneNumberInput}
          placeholder="99999-9999"
          value={phoneNumber}
          onChangeText={formatPhoneNumber}
          keyboardType="numeric"
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={age}
        onChangeText={(text) => setAge(text.replace(/[^0-9]/g, ''))}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setPasswordVisible(!isPasswordVisible)}
        >
          <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.termsContainer}>
        <Switch value={isChecked} onValueChange={setChecked} />
        <Text style={styles.termsText}>Aceito o termo e condição</Text>
      </View>

      <TouchableOpacity
        style={[styles.continueButton, !isFormValid() && styles.disabledButton]}
        onPress={handleContinue}
        disabled={!isFormValid()}
      >
        <Text
          style={[
            styles.continueButtonText,
            !isFormValid() && styles.disabledButtonText,
          ]}
        >
          Cadastrar conta
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Preferences')}>
        <Text style={styles.backText}>
          Já tem uma conta? <Text style={styles.backLink}>Volte</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
