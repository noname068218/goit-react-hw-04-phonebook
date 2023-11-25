import { Wrapper } from './Section.styled';

export const Section = ({ title, children }) => (
  <Wrapper>
    <h2>{title}</h2>
    {children}
  </Wrapper>
);
