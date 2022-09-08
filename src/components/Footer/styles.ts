import styled from 'styled-components';
import {
  FiFacebook,
  FiInstagram,
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi';

export const Container = styled.footer`
  background: var(--surface);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    height: 160px;
    justify-content: center
  }
`;

export const DevelopedContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
`;

export const DevelopedText = styled.p`
  color: var(--text-on-surface);
`;

export const DevText = styled.b`
  color: var(--secondary);
`;

export const LinksContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

export const Facebook = styled(FiFacebook)`
  color: var(--text-on-surface);
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    color: var(--secondary);
  }
`;

export const Instagram = styled(FiInstagram)`
  color: var(--text-on-surface);
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    color: var(--secondary);
  }
`;

export const Github = styled(FiGithub)`
  color: var(--text-on-surface);
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    color: var(--secondary);
  }
`;

export const Linkedin = styled(FiLinkedin)`
  color: var(--text-on-surface);
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    color: var(--secondary);
  }
`;

