import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

const UserProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const handleUpdateProfile = () => {
    // Lógica para atualizar o perfil
    console.log('Atualizar perfil:', { name, email, profileImage });
  };

  const handleSelectImage = () => {
    // Lógica para selecionar uma imagem
    console.log('Selecionar imagem');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSelectImage} style={styles.imageContainer}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.image} />
        ) : (
          <View style={styles.placeholder} />
        )}
      </TouchableOpacity>
      <Input label="Nome" value={name} onChangeText={setName} />
      <Input label="Email" value={email} onChangeText={setEmail} />
      <Button title="Atualizar Perfil" onPress={handleUpdateProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  placeholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#eee',
  },
});

export default UserProfileScreen;