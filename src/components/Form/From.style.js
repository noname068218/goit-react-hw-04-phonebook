import { Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FromStyle = styled(Field)`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #03f40f;
  margin-bottom: 15px;
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  background: transparent;
  transition: border-bottom-color 0.3s, box-shadow 0.3s;

  &:focus,
  &:hover {
    border-bottom-color: #03f40f;
    box-shadow: 0 1px 0 0 #03f40f;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    font-size: 16px;
    color: #000;
    margin-bottom: 5px;
  }
`;

export const FormButton = styled.button`
  --green: #1bfd9c;
  font-size: 15px;
  padding: 0.7em 2.7em;
  letter-spacing: 0.06em;
  position: relative;
  font-family: inherit;
  border-radius: 0.6em;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 1.4em;
  border: 2px solid var(--green);
  background: linear-gradient(
    to right,
    rgba(27, 253, 156, 0.1) 1%,
    transparent 40%,
    transparent 60%,
    rgba(27, 253, 156, 0.1) 100%
  );
  color: var(--green);
  box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4),
    0 0 9px 3px rgba(27, 253, 156, 0.1);

  &:hover {
    color: #82ffc9;
    box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6),
      0 0 9px 3px rgba(27, 253, 156, 0.2);
  }

  &:before {
    content: '';
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform 0.4s ease-in-out;
    background: linear-gradient(
      to right,
      transparent 1%,
      rgba(27, 253, 156, 0.1) 40%,
      rgba(27, 253, 156, 0.1) 60%,
      transparent 100%
    );

    &:hover,
    &:before {
      transform: translateX(15em);
    }
  }
`;
