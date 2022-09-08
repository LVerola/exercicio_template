import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { shade } from 'polished';

export const Container = styled.nav`
  background: var(--surface);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const Link = styled(NavLink)`
  color: var(--text-on-surface);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

export const Avatar = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid;
  border-color: var(--primary)
`;

export const Bars = styled(FaBars)`
  display: none;
  color: var(--text-on-surface);

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const MenuContent = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  .active {
    color: var(--secondary);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ButtonLink = styled(NavLink)`
  border-radius: 10px;
  background: var(--primary);
  padding: 10px 22px;
  color: var(--text-on-primary);
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.4s;

  &:hover {
    background: ${shade(0.2, '#BB86FC')};
  }
`;
