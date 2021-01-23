import Flex from '@/common/Flex/Flex';
import PropTypes from 'prop-types';
import React from 'react';

const HeroImage = ({
  children,
  width = '100%',
  height = '100%',
  imgUrl,
  size = 'contain',
  pos = 'center',
}) => {
  return (
    <Flex
      as="figure"
      backgroundImage={`url(${imgUrl})`}
      backgroundSize={size}
      backgroundPosition={pos}
      m="0"
      width={width}
      height={height}>
      {children}
    </Flex>
  );
};

HeroImage.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  pos: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default HeroImage;
