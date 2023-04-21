import React, {useState} from 'react';
import {Linking, Modal, Pressable, View} from 'react-native';
import styled from 'styled-components/native';
import openMap from 'react-native-open-maps';

const FieldDirections = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
                <StyledText>✖</StyledText>
              </Pressable>
            </ModalHeader>
            <ModalTitle>
              <StyledText>This app has been brought to you by</StyledText>
              <StyledText>Daniel Santos and Luis Suarez</StyledText>
            </ModalTitle>
            <ModalBody>
              <StyledImage
                source={require('../../assets/images/daniel-luis.webp')}
              />
              <StyledText>We hope you find it as useful as we do.</StyledText>
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
  background-color: #000000c1;
`;

const ModalContent = styled.View`
  background-color: #48484a;
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

const StyledText = styled.Text`
  color: white;
  text-align: center;
  font-family: Roboto;
`;
