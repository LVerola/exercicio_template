import React from 'react';

import {
  Container,
  Title,
  CardContainer,
  Divider,
  Description,
  LinkIcon,
} from './styles';

import Card from '../../components/Card';
import { projects } from '../../utils/infos';

const Projects: React.FC = () => {
  return (
    <Container>
      {projects.map(project => {
        return (
          <Card>
            <CardContainer>
              <Title>{project.title}</Title>

              <Divider />

              <Description>{project.description}</Description>

              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <LinkIcon />
              </a>
            </CardContainer>
          </Card>
        );
      })}
    </Container>
  );
}

export default Projects;