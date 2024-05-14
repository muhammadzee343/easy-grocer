import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ProceedIcon = props => {
  return (
    <Svg height="16" width="16" viewBox="0 0 19 19">
      <Path
        d="M11.446 18.586c.78 0 1.303-.531 1.61-1.336l5.628-14.743c.125-.323.183-.614.183-.88 0-.772-.498-1.27-1.27-1.27-.274 0-.565.059-.88.183L1.958 6.176c-.78.3-1.32.822-1.32 1.602 0 .888.623 1.32 1.503 1.594l3.669 1.146c.747.232 1.236.232 1.817-.283l9.712-8.774c.15-.132.332-.116.432-.008.108.108.124.29-.008.432l-8.766 9.687c-.473.523-.523 1.137-.307 1.826l1.154 3.66c.274.889.714 1.528 1.602 1.528z"
        fill={props.iconColor}
        fillRule="evenodd"
      />
    </Svg>
  );
};

export default ProceedIcon;
