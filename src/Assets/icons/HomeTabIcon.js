import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeTabIcon = props => {
    return (
        <Svg
        height="24" width="24"
        viewBox="0 0 122.88 112.07"
      
      >
        <Path
        fill={props.iconColor}
          d="M61.44 0L0 60.18l14.99 7.87L61.04 19.7l46.85 48.36 14.99-7.87L61.44 0zM18.26 69.63L61.5 26.38l43.11 43.25v42.43H73.12V82.09H49.49v29.97H18.26V69.63z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </Svg>

    );
};

export default HomeTabIcon;
