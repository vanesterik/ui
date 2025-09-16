import { Kbd } from './Kbd'

export const Keys = () => (
  <div className="grid grid-cols-10 gap-1 w-72">
    {[
      'Q',
      'W',
      'E',
      'R',
      'T',
      'Y',
      'U',
      'I',
      'O',
      'P',
      'A',
      'S',
      'D',
      'F',
      'G',
      'H',
      'J',
      'K',
      'L',
      ';',
      'Z',
      'X',
      'C',
      'V',
      'B',
      'N',
      'M',
      ',',
      '.',
      '/',
    ].map((key) => (
      <Kbd key={key}>{key}</Kbd>
    ))}
  </div>
)
