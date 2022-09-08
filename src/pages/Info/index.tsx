import React from 'react';

import {
  Container,
  Title,
  CardContainer,
  AvatarContainer,
  Avatar,
  InfoContainer,
  BasicInfoContainer,
  ContactInfoContainer,
  Divider,
  InfoContent,
} from './styles';

import Card from '../../components/Card';

import { personalInfo } from '../../utils/infos';

const Info: React.FC = () => {
  return (
    <Container>
      <Card>
        <CardContainer>
          <AvatarContainer>
            <Avatar src={personalInfo.photoLink} />
          </AvatarContainer>

          <InfoContainer>
            <BasicInfoContainer>
              <Title>Informações Gerais</Title>

              <Divider />

              <InfoContent>{personalInfo.name}</InfoContent>
              <InfoContent>{personalInfo.age}</InfoContent>
              <InfoContent>{personalInfo.gender}</InfoContent>
            </BasicInfoContainer>

            <ContactInfoContainer>
              <Title>Informações de Contato</Title>
              
              <Divider />

              <InfoContent>{personalInfo.phone}</InfoContent>
              <InfoContent>{personalInfo.email}</InfoContent>
            </ContactInfoContainer>
          </InfoContainer>
        </CardContainer>
      </Card>
    </Container>
  );
}

export default Info;