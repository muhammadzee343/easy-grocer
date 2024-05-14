import React from 'react';
import Svg, {Path} from 'react-native-svg';

const PlusIcon = props => {
  return (
    <Svg height="20" width="20" viewBox="0 0 122.879 122.879">
      <Path
        fill={props.iconColor}
        fillRule="evenodd"
        d="M104.885 17.995c23.993 23.994 23.993 62.896 0 86.89-23.994 23.993-62.896 23.993-86.89 0-23.993-23.994-23.993-62.896 0-86.89 23.994-23.993 62.896-23.993 86.89 0zM93.607 57.949a3.49 3.49 0 110 6.98H64.93v28.678a3.49 3.49 0 11-6.979 0V64.93H29.272a3.49 3.49 0 110-6.98H57.95V29.271a3.49 3.49 0 016.979 0v28.678h28.678z"
      />
    </Svg>
  );
};

export default PlusIcon;
