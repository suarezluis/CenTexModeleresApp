import React from 'react';
import {Linking, View} from 'react-native';
import styled from 'styled-components/native';
import openMap from 'react-native-open-maps';

const FieldDirections = () => {
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
          onPress={() =>
            Linking.openURL(
              'https://github.com/suarezluis/Cen-Tex-Modelers-App/blob/master/README.md',
            )
          }>
          <EmojiIcon>ℹ️</EmojiIcon>
          <EmojiIconDescription>About this App</EmojiIconDescription>
        </Link>
      </View>
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
