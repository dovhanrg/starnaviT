'use strict';

import { large, medium, small } from './sizeFilter';


const getSize =
hasCheckedInput === 'small'
  ? small
  : hasCheckedInput === 'medium'
    ? medium
    : hasCheckedInput === 'large'
      ? large
      : () => {
          return true;
        };

        