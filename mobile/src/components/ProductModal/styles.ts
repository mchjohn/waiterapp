import styled from 'styled-components/native';

export const Image = styled.ImageBackground`
  width: 100%;
  height: 200px;
  align-items: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-right: 24px;
`;

export const Header = styled.View``;

export const ModalBody = styled.View`
  flex: 1;
  padding: 32px 24px 0;
  background: #FAFAFA;
`;

export const ModalForm = styled.View`
  margin-top: 32px;
`;

export const ModalInput = styled.TextInput`
  border: 1px solid rgba(204, 204, 204, 0.5);
  padding: 16px;
  background: #FFF;
  border-radius: 8px;
  margin-bottom: 24px;
`;
