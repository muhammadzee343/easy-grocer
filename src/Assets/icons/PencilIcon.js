import * as React from "react";
import Svg, { Path } from 'react-native-svg';
import {button_backgroun} from "../themes/colors";

export const PencilIcon = (props) => {
    return (
        <Svg
            fill={button_backgroun}
            viewBox="0 0 121.48 122.88"
            width={16}
            height={16}

        >
            <Path
                d="M96.84 2.22l22.42 22.42c2.96 2.96 2.96 7.8 0 10.76l-12.4 12.4-33.18-33.18 12.4-12.4c2.96-2.96 7.8-2.96 10.76 0zM70.18 52.19v.01c.92.92 1.38 2.14 1.38 3.34 0 1.2-.46 2.41-1.38 3.34v.01l-.01.01-30.08 30.09h-.01c-.26.26-.55.48-.84.67h-.01c-.3.19-.61.34-.93.45-1.66.58-3.59.2-4.91-1.12h-.01v-.01c-.26-.26-.48-.55-.67-.84v-.01c-.19-.3-.34-.61-.45-.93-.58-1.66-.2-3.59 1.11-4.91v-.01l30.09-30.09h.01c.92-.92 2.14-1.38 3.34-1.38 1.2 0 2.41.46 3.34 1.38h.03zm-24.7 56.92c-8.98 2.78-17.95 5.55-26.93 8.33-21.1 6.53-21.01 10.88-15.25-9.44l9.07-32-.03-.03L67.4 20.9l33.18 33.18-55.07 55.07-.03-.04zM18.03 81.66l21.79 21.79c-5.9 1.82-11.8 3.64-17.69 5.45-13.86 4.27-13.8 7.13-10.03-6.22l5.93-21.02z"
                fillRule="evenodd"
                clipRule="evenodd"
            />
        </Svg>
    )
}

export default PencilIcon
