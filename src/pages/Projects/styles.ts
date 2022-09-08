import { FiExternalLink } from 'react-icons/fi';
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export const Divider = styled.hr`
  width: 100%;
  border-top: 1px solid var(--primary);
  margin: 1rem;
`;

export const Description = styled.h4`
  color: var(--text-on-surface);
`;

export const LinkIcon = styled(FiExternalLink)`
  color: var(--text-on-surface);

  :hover {
    color: var(--secondary);
  }
`;
