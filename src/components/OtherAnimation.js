import { TypeAnimation } from 'react-type-animation';

export const AnimationText = () => {
  return (
    <TypeAnimation
      sequence={[
        'To create an entry, enter the name',
        1000,
        'To create an entry, enter the number',
        1000,
        'Press the button',
        1000,
        'I believe in you',
        1000,
      ]}
      speed={50}
      style={{ fontSize: '2em' }}
      repeat={Infinity}
    />
  );
};
