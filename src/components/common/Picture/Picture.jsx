import Img from '@/common/Img/Img';
import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

const StyledPicture = styled.picture`
  width: fit-content;
  height: fit-content;
`;

const Picture = ({ source, ...props }) => {
  return (
    <StyledPicture>
      {source &&
        source.map(({ srcset, media, type }) => (
          <source key={srcset} srcSet={srcset} media={media} type={type} />
        ))}
      <Img {...props} alt={props?.alt} />
    </StyledPicture>
  );
};

Picture.propTypes = {
  source: PropTypes.arrayOf(
    PropTypes.shape({
      srcset: PropTypes.string,
      media: PropTypes.string,
      type: PropTypes.string,
    })
  ),
};

export default Picture;
