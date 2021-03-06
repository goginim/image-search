import React, { memo } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

interface ImageProp {
  id?: number;
  url?: string;
  size?: string;
  className?: string;
  tags?: string;
}

function Image(props: ImageProp): JSX.Element {
  const {id, url, tags, className, size, ...rest } = props;

  const componentClassName = cn(
    className,
    size && `size--${size}`,
  );

  return (
    <StyledImageBox
      className={componentClassName}
      url={url}
      >
      <StyledImageDetail>
        {tags}
      </StyledImageDetail>
    </StyledImageBox>
  );
}

const StyledImageDetail = styled.div`
  position: relative;
  z-index: 1;
  padding: 15px;
  color: #444;
  background: #fff;
  text-transform: lowercase;
  letter-spacing: 1px;
  color: #828282;

  &:before {
    content: counter(item-counter);
    font-weight: bold;
    font-size: 1.1rem;
    padding-right: 0.5em;
    color: #444;
  }
`;
const StyledImageBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  background: #0c9a9a;
  color: #fff;
  grid-column-start: auto;
  grid-row-start: auto;
  color: #fff;
  background: url(${(props: ImageProp) => props.url});
  background-size: cover;
  background-position: center;
  box-shadow: -2px 2px 10px 0px rgba(#444, 0.4);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  counter-increment: item-counter;
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
    transition: opacity 0.3s ease-in-out;
  }
  
  &:hover {
    transform: scale(1.05);
    
    &:after {
      opacity: 0;
    }
  }

  &.size--medium {
    grid-row-end: span 2;
  }

  &.size--large {
    grid-row-end: span 3;
  }

  &.size--full {
    grid-column-end: auto;

    @media screen and (min-width: 768px) {
      grid-column: 1/-1;
      grid-row-end: span 2;
    }
  }
`;

export default memo(Image);