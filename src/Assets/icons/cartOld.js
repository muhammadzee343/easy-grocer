import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Defs, Ellipse, Path, Rect, Stop } from 'react-native-svg';

const cartOld = props => {
    return (
        <Svg
            width={props.wid}
            height={props.hei}

            data-name="Layer 1"
            viewBox="0 0 16 12.4"
        >

            <Path

                d="M15.53 2.46H6.47a.16.16 0 01-.15-.13l-.14-2A.15.15 0 006 .16H3.53a.13.13 0 00-.13.1l-.06.21a.15.15 0 00.14.19h1.61a.14.14 0 01.15.13L5.42 3l.13 1.6h-3a.27.27 0 00-.28.27.27.27 0 00.28.27H8.3a.28.28 0 01.29.28.28.28 0 01-.29.28H4.68a.29.29 0 00-.28.31.27.27 0 00.28.25h3.94a.28.28 0 01.28.29.27.27 0 01-.28.28H5.17a.22.22 0 00-.17.28v.11a.23.23 0 00.23.21h2.64a.28.28 0 01.29.28.29.29 0 01-.29.29H3.36a.29.29 0 00-.29.29.29.29 0 00.29.29h2.51v.47a.15.15 0 00.15.15h6.48a.14.14 0 00.15-.12v-.11a.15.15 0 00-.15-.17H7.01c-.08 0-.15 0-.15-.13 0-.05.07-.1.12-.1h5.7a.16.16 0 00.14-.08l2.8-5.79a.16.16 0 00-.09-.24z"
                fill={props.iconColor}
            />
            <Path
                d="M7 9.45a.62.62 0 00-.76.41.62.62 0 00.19.83.61.61 0 00.76-.4.62.62 0 00-.19-.84zm-.28.84a.22.22 0 11.28-.22.22.22 0 01-.26.22z"
                fill={props.iconColor}
            />
            <Path
                d="M12 9.34a.63.63 0 00-.76.41.62.62 0 00.2.84.61.61 0 00.75-.41.62.62 0 00-.19-.84zm-.28.84a.21.21 0 01-.22-.21.22.22 0 01.5.03.21.21 0 01-.24.18z"
                fill={props.iconColor}
            />
            <Ellipse

                cx={8.45}
                cy={11.38}
                rx={4.79}
                ry={0.39}
                opacity={0.31}
                fill={props.iconColor}
            />
        </Svg>
    );
};

export default cartOld;
