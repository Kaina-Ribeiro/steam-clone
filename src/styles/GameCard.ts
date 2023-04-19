import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  position: relative;
  grid-column: span 4 / span 4;
  padding-top: ${(16 / 9) * 100}%;
`;

export const ImageCover = styled.div`
  inset: 0;
  position: absolute;

  ${Container}:hover & {
    opacity: 0.2;
  }
`;

export const Wrapper = styled.div`
  inset: 0;
  color: rgb(255 255 255 / 100%);
  display: flex;
  position: absolute;
  transform: translateY(100%);
  background: radial-gradient(at left top, rgb(69, 139, 116) 5%, rgb(52, 96, 105));
  transition: ease-in-out transform 500ms;
  justify-items: stretch;
  flex-direction: column;

  ${Container}:hover & {
    transform: translateY(0);
  }
`;

export const Header = styled.div`
  position: relative;
  padding-top: ${(9 / 16) * 100}%;

  & .image {
    display: none;
  }
  @keyframes blender {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  & .imageActive {
    float: left;
    width: 150vw;
    height: 100vh;
    object-fit: cover;
    box-sizing: border-box;
    opacity: 0;
    animation: blender 5s linear 50ms;
  }
`;

export const Body = styled.div`
  padding: 1.5rem;
`;
