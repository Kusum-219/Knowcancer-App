import {MutableRefObject} from 'react';

import {TextInput} from 'react-native';

export const focus =
  (elementToFocusRef: MutableRefObject<TextInput | undefined>) => (event: { preventDefault: () => void; }) => {
    if (event) {
      event.preventDefault();
    }
    elementToFocusRef?.current?.focus?.();
  };
