import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: max-content;
  min-height: 100vh;
  gap: 2rem;
  padding: 2rem calc((100vw - 1000px) / 2);
`;

export const Title = styled.h1`
  color: var(--secondary);
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;  

export const Avatar = styled.img`
  vertical-align: middle;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  border: 1px solid;
  border-color: var(--primary);
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export const BasicInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Divider = styled.hr`
  width: 100%;
  border-top: 1px solid var(--primary);
  margin: 1rem;
`;

export const InfoContent = styled.h3`
  color: var(--text-on-surface);
`;
