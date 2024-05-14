import React from 'react';
import Svg, {Path} from 'react-native-svg';

const FacebookIcon = props => {
  return (
    <Svg height="30" width="30" viewBox="0 0 50 50">
      <Path
        fill={props.iconColor}
        fillRule="evenodd"
        d="M25 3C12.85 3 3 12.85 3 25c0 11.03 8.125 20.137 18.712 21.728V30.831h-5.443v-5.783h5.443V21.2c0-6.371 3.104-9.168 8.399-9.168 2.536 0 3.877.188 4.512.274v5.048h-3.612c-2.248 0-3.033 2.131-3.033 4.533v3.161h6.588l-.894 5.783h-5.694v15.944C38.716 45.318 47 36.137 47 25c0-12.15-9.85-22-22-22z"
      />
    </Svg>
  );
};

export default FacebookIcon;
