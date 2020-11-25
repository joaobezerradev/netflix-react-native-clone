import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.ScrollView`
  flex: 1;
  background: #000;
`;
export const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 65) / 100}px;
`;

export const Gradient = styled(LinearGradient)`
  height: 100%;
`;
