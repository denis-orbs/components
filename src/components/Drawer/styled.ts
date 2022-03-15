import styled from 'styled-components';
import { X } from 'react-feather';

export const DrawerRoot = styled.div<{ isOpen: boolean; backgroundColor?: string }>`
  overflow: hidden;
  position: absolute;
  z-index: 99;
  transition: all 350ms ease;
  background-color: ${({ theme, backgroundColor }: any) => (backgroundColor ? theme[backgroundColor] : theme.bg2)};
  transform: ${({ isOpen }) => (!isOpen ? 'translate(100%, 0px)' : 'translate(0px, 0px)')};
  width: 100%;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  height: 100%;

  /* ${({ theme, isOpen }) => theme.mediaWidth.upToSmall`
    display: ${isOpen ? 'none' : 'flex'};
    width: 100%;
    height: 100%
  `}; */
`;

export const DrawerContent = styled.div`
  flex: 1;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;
export const CloseIcon = styled(X)<{ onClick: () => void }>`
  cursor: pointer;
`;
