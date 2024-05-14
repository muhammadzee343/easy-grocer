import React from 'react';
import Svg, {Path, G, Defs, Ellipse} from 'react-native-svg';

const BabyCareIcon = props => {
  
  return (
    <Svg
    viewBox="0 0 141.73 141.73"
    fill={props.iconColor}
      width="33"
          height="33"
  >
    {/* <Defs>
      <style>
        {".prefix__cls-3{fill:#f2f5ce}.prefix__cls-4{fill:#e5e6c1}"}
      </style>
    </Defs> */}
    <G id="prefix__Layer_3" data-name="Layer 3">
      <Path
        d="M71.48 123.2h12.66c1.1-.33 1.64-2.19 2.41-3.62s.66-7.78-.44-9.31a9.23 9.23 0 01-1.31-5.81c.11-2.2 1.75-24.67 2.41-33.55S85.78 59.08 83.15 57s-3.83-5.6-4.27-6.91-2.52-27.4-2.52-27.4c0-.33-.37-.84.18-1.25a1 1 0 000-1.53 1.36 1.36 0 01-.47-1.21c0-.43.62-.69.62-1.2s0-1.21-1-1.39h-8.58c-1 .18-1 .88-1 1.39s.63.77.63 1.2a1.37 1.37 0 01-.48 1.21 1 1 0 000 1.53c.55.41.22.92.18 1.25 0 0-2.08 26.08-2.52 27.4S62.33 54.91 59.7 57s-4.7 5-4.06 13.91 2.3 31.35 2.41 33.55a9.23 9.23 0 01-1.31 5.81c-1.1 1.53-1.21 7.89-.44 9.31s1.31 3.29 2.41 3.62z"
        fill="#6d3b18"
      />
      <Path
        d="M71.48 123.2h12.66c1.09-.33 1.64-2.19 2.41-3.62s.66-7.78-.44-9.31a9.17 9.17 0 01-1.32-5.81c.11-2.2 1.76-24.67 2.42-33.55S85.78 59.08 83.15 57s-3.84-5.6-4.27-6.91-2.53-27.4-2.53-27.4c0-.33-.36-.84.19-1.25a1 1 0 000-1.53 1.37 1.37 0 01-.48-1.21c0-.43.62-.69.62-1.2s0-1.21-1-1.39h-4.2z"
        fill="#5a2d13"
      />
      <Ellipse
        className="prefix__cls-3"
        cx={71.43}
        cy={82.76}
        rx={14.91}
        ry={16.38}
      />
      <Path
        className="prefix__cls-4"
        d="M71.48 99.14c9 0 14.91-7.33 14.91-16.38s-5.87-16.37-14.91-16.37z"
      />
      <Path
        className="prefix__cls-3"
        d="M66.51 22.57h9.84l2.26 25.69H64.24l2.27-25.69z"
      />
      <Path
        className="prefix__cls-4"
        d="M71.46 48.26h7.15l-2.26-25.69h-4.89v25.69z"
      />
    </G>
  </Svg>
//      <Svg
//      fill={props.iconColor}
//      width="43"
//      height="23"
    
//      viewBox="0 0 141.73 141.73"
     
//    >
     
//      <G id="prefix__Layer_3" data-name="Layer 3">
//        <Path
//          className="prefix__cls-1"
//          d="M45.24 26.53a48.65 48.65 0 1076.07 41.78 45.92 45.92 0 11-76.07-41.78z"
//        />
//        <Path
//          className="prefix__cls-2"
//          d="M99.61 93.65a41.06 41.06 0 10-64.2-35.26 38.75 38.75 0 1164.2 35.26z"
//        />
//        <Path
//          className="prefix__cls-1"
//          d="M104.1 80.65c-.47-1.29-2.47-2-4.7-1.76-.59.12-1.29.23-1.88.35-2.82.94-17.15 5.76-17.27 5.87l-.35.13.24.23c1.64 1.29 2.46 2.7 2 3.88-.46 1.88-2.82 2.94-6.58 3.17a46.56 46.56 0 01-12.8-.94 9.29 9.29 0 011.76.12c3.64 0 7 0 9.75-.24 4.12-.35 6.11-1.29 6.35-2.82.11-1-.47-1.88-1.89-2.58s-4.81-1.18-7.87-1.77c-2.23-.35-4.11-.58-5.64-.93-4.93-1.3-10-2.59-16-2.12a24.4 24.4 0 00-2.82.35c-4.46.83-8.93 1.89-13.63 3.18l-.59.11 6.94 9.87a35 35 0 013.75-.59 20.34 20.34 0 014.59.12c1.87.35 6.68 1.29 11.27 2.23s9.27 1.88 10.95 2.11a23.17 23.17 0 002.94.13c2.35-.24 4.7-1.53 6.93-2.71.7-.47 1.41-.7 2.12-1.18l20.43-11c2.35-1.4 2.35-2.58 2-3.17z"
//        />
//        <Path
//          className="prefix__cls-2"
//          d="M60.92 52.05a3.65 3.65 0 013.34 3.68 3.59 3.59 0 01-3.52 3.17 3.43 3.43 0 01.18-6.85zM83.79 37.91a4.53 4.53 0 01-4.63 4.54 4.6 4.6 0 01-4.62-4.8 4.63 4.63 0 019.25.26z"
//        />
//        <Path
//          className="prefix__cls-1"
//          d="M73.17 51.53a11 11 0 00-1.12 1.8c-1.62 3.35-4.2 6-6.77 8.57a3.13 3.13 0 00-1 2.49v13.54c0 .94.08 2-1.2 2.06s-1.63-.86-1.55-2c0-2.24.09-4.46 0-6.69 0-.51.35-1.63-.68-1.63s-.6 1-.6 1.54c-.09 2.15 0 4.37 0 6.43 0 1.12.08 2.32-1.46 2.32s-1.28-1.2-1.28-2.15V65.5a2.8 2.8 0 00-.86-2.57c0 2 .08 3.43 0 4.8 0 .86.17 1.8-1.12 1.8-1.11 0-1-.94-1-1.71 0-1.55 0-3.17.08-4.8a2.27 2.27 0 012.66-2.57c1.46.08 3 0 4.37 0 2.66 0 3.68-1 4.89-3.35a81.08 81.08 0 017.67-12.51c.85-1.11 2-1.89 3.51-.51a2.34 2.34 0 003.08-.08c1.21-1.11 2.06-.6 3 .26a17.86 17.86 0 013 4.2c1.45 2.31 2.83 4.62 4.28 6.94.69 1.11 1.54 2.4 0 3.26-1.29.85-1.88-.69-2.4-1.55a39.84 39.84 0 00-3.85-5.48c.85 2.91 1.8 5.91 2.65 8.91.77 2.66.43 3.26-2.4 3.17-1.45-.08-1.72.52-1.72 1.8.1 3.77 0 7.63.1 11.49 0 1.37 0 2.91-1.81 2.91S80 78.36 80 77.07c0-3.77 0-7.46-.08-11.23 0-.68.6-2-.68-2.05-1.46 0-.86 1.29-.86 2v11.63c0 1.11-.18 2.23-1.38 2.48-1.62.34-2-.94-2-2.23 0-3.94-.08-7.88 0-11.91.08-1.54-.34-2.14-2.06-2.06-2.32.09-2.74-.6-2.14-2.74.86-3.08 1.8-6.08 2.66-9.17-.09-.09-.17-.09-.27-.26z"
//        />
//      </G>
//    </Svg>
  );
};

export default BabyCareIcon;
