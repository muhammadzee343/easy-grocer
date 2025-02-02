import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {button_backgroun} from '../themes/colors';

export const HandCash = props => {
  return (
    <Svg
      width={props.wid}
      height={props.hei}
      fill={props.iconColor}
      viewBox="0 0 122.88 113.03">
      <Path
        d="M36.9 23.5h71.13c8.17 0 14.85 6.69 14.85 14.85v59.83c0 8.17-6.69 14.85-14.85 14.85H36.9c-8.17 0-14.85-6.68-14.85-14.85V38.35c0-8.16 6.68-14.85 14.85-14.85zM10.08 73.96c0 2.78-2.26 5.04-5.04 5.04C2.26 79 0 76.74 0 73.96V19.89C0 14.42 2.24 9.44 5.84 5.84 9.44 2.24 14.42 0 19.89 0h65.37c2.78 0 5.04 2.26 5.04 5.04 0 2.78-2.26 5.04-5.04 5.04H19.89c-2.69 0-5.15 1.1-6.93 2.88a9.774 9.774 0 00-2.88 6.93v54.07zm44.22.07c-3.18 0-5.76-2.58-5.76-5.76s2.58-5.76 5.76-5.76h12.4V50.1c0-3.18 2.58-5.76 5.76-5.76s5.76 2.58 5.76 5.76v12.41h12.41c3.18 0 5.76 2.58 5.76 5.76s-2.58 5.76-5.76 5.76h-12.4v12.41c0 3.18-2.58 5.76-5.76 5.76s-5.76-2.58-5.76-5.76V74.03H54.3z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default HandCash;
