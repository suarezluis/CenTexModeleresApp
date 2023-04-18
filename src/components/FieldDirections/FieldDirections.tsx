import React, {useState} from 'react';
import {
  Alert,
  Image,
  Linking,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import openMap from 'react-native-open-maps';

const FieldDirections = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <FieldDirectionsContainer>
      <View>
        <Link
          onPress={() => openMap({latitude: 31.008964, longitude: -97.62468})}>
          <EmojiIcon>🧭</EmojiIcon>
          <EmojiIconDescription>Field Directions</EmojiIconDescription>
        </Link>
        <Link
          onPress={() =>
            Linking.openURL('https://www.facebook.com/groups/800757229978646')
          }>
          <EmojiIcon>👥</EmojiIcon>
          <EmojiIconDescription>Join us on Facebook</EmojiIconDescription>
        </Link>
      </View>
      <View>
        <Link
          onPress={() => Linking.openURL('https://www.centexmodelers.com/')}>
          <EmojiIcon>🌐</EmojiIcon>
          <EmojiIconDescription>Visit our Website</EmojiIconDescription>
        </Link>
        <Link
          onPress={() => {
            setModalVisible(true);
          }}>
          <EmojiIcon>ℹ️</EmojiIcon>
          <EmojiIconDescription>About this App</EmojiIconDescription>
        </Link>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <StyledModal>
          <ModalContent>
            <ModalHeader>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text>✖</Text>
              </Pressable>
            </ModalHeader>
            <ModalTitle>
              <Text>This app has been brought to you by</Text>
              <Text>Daniel Santos and Luis Suarez</Text>
            </ModalTitle>
            <ModalBody>
              <StyledImage
                source={require('../../assets/images/daniel-luis.png')}
              />
              <Text>We hope you find it as useful as we do.</Text>
            </ModalBody>
          </ModalContent>
        </StyledModal>
      </Modal>
    </FieldDirectionsContainer>
  );
};

export default FieldDirections;

const FieldDirectionsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: space-around;
`;

const Link = styled.TouchableOpacity`
  justify-content: center;
  text-align: center;
  padding: 10px;
`;

const EmojiIcon = styled.Text`
  font-size: 20px;
  text-align: center;
  color: white;
`;

const EmojiIconDescription = styled.Text`
  color: white;
  text-align: center;
  font-family: Roboto;
`;

const StyledModal = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #00000090;
`;

const ModalContent = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  width: 80%;
`;

const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const ModalTitle = styled.View`
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const ModalBody = styled.View`
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.Image`
  width: 300px;
  height: 240px;
  margin: 10px 0;
  border-radius: 10px;
`;
