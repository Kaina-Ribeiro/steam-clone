import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  max-width: 1920px;
  min-height: 100vh;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1 1 0%;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));

  @media (min-width: 1280px) {
    & {
      grid-column: span 10 / span 10;
    }
  }
`;

interface ISectionProps {
  gridRowStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

  gridColStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gridColums?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gridColSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export const Section = styled.section<ISectionProps>`
  gap: 2rem;
  padding: 0 1.5rem;

  ${(props) =>
    props.gridColums
      ? `display: grid; grid-template-columns: repeat(${props.gridColums}, minmax(0, 1fr));`
      : ''}
  ${(props) =>
    props.gridColSpan ? `grid-column: span ${props.gridColSpan} / span ${props.gridColSpan};` : ''}
  ${(props) => (props.gridColStart ? `grid-column-start: ${props.gridColStart};` : '')}
  ${(props) => (props.gridRowStart ? `grid-row-start: ${props.gridRowStart};` : '')}
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 4rem;
  text-align: center;
  line-height: 1.15;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;

    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.5;
`;

export const CodeTag = styled.code`
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  background: #fafafa;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
  border-radius: 5px;
`;
