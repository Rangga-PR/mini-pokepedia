import Flex from '@/common/Flex/Flex';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import Type from '@/common/Typography/TypoGraphy';
import styled from '@emotion/styled';
import useDisableBodyScroll from '@/hooks/useDisableBodyScroll';

const Overlay = styled(Flex)`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const StyledModal = styled(Flex)`
  background-color: white;
  box-shadow: 0 8px 16px 2px rgba(37, 40, 43, 0.12);
  flex-direction: column;
`;

const CloseButton = styled(Image)`
  cursor: pointer;
`;

const Modal = ({
  children,
  title,
  width = '500px',
  height = '500px',
  active,
  onClose,
  ...props
}) => {
  useDisableBodyScroll(active);

  return (
    <Overlay
      display={active ? 'flex' : 'none'}
      bg={['white', 'transparent']}
      {...props}>
      <StyledModal
        borderRadius={['0', '8px']}
        width={['100%', width]}
        height={['100%', height]}>
        <Flex p="16px" alignItems="center" justifyContent="space-between">
          <Type variant="caption" fontFamily="twop">
            {title}
          </Type>

          <CloseButton
            as="button"
            data-testid="close-modal"
            src="/svg/fi-br-cross-small.svg"
            width={24}
            height={24}
            onClick={onClose}
          />
        </Flex>
        {children}
      </StyledModal>
    </Overlay>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  active: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
