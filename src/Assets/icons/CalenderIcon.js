import * as React from "react";
import Svg, { Path } from 'react-native-svg';

import {button_backgroun} from '../themes/colors';

export const CalenderIcon = (props) => {
    return (
        <Svg
            fill={button_backgroun}
            viewBox="0 0 122.84 122.88"
            width={props.wid}
            height={props.hei}

        >
            <Path d="M81.54 4.71c0-2.62 2.58-4.71 5.77-4.71 3.2 0 5.77 2.13 5.77 4.71V25.4c0 2.62-2.58 4.71-5.77 4.71-3.2 0-5.77-2.13-5.77-4.71V4.71zm3.85 67.94h7.98v25.73h-7.98V72.65zM55.37 98.38V72.65h13.25c2.46 0 4.34.21 5.63.63 1.3.42 2.35 1.2 3.14 2.34.8 1.14 1.19 2.54 1.19 4.18 0 1.43-.31 2.66-.92 3.69-.6 1.04-1.44 1.88-2.52 2.53-.68.41-1.61.75-2.79 1.02.95.32 1.64.63 2.07.95.29.21.71.67 1.27 1.35.55.69.92 1.22 1.11 1.6l3.86 7.43h-8.98l-4.25-7.85c-.54-1.02-1.02-1.68-1.44-1.98-.57-.4-1.23-.59-1.95-.59h-.7v10.42h-7.97v.01zm7.97-15.27h3.36c.36 0 1.07-.12 2.11-.35.53-.1.96-.37 1.29-.81.34-.44.5-.93.5-1.5 0-.83-.26-1.47-.79-1.92-.53-.45-1.52-.67-2.97-.67h-3.5v5.25zM29.46 72.65h19.66v5.53H37.44v4.49h9.99v5.21h-9.99v10.49h-7.98V72.65zm.07-67.94C29.53 2.09 32.11 0 35.3 0c3.2 0 5.77 2.13 5.77 4.71V25.4c0 2.62-2.58 4.71-5.77 4.71-3.2 0-5.77-2.13-5.77-4.71V4.71zM7.56 44.09h107.62V22.66c0-.8-.31-1.55-.84-2.04-.53-.53-1.24-.84-2.04-.84h-9.31c-1.78 0-3.2-2.63-3.2-4.41 0-1.78 1.42-3.2 3.2-3.2h10.53c2.58 0 4.88 1.07 6.57 2.75 1.69 1.69 2.75 4.04 2.75 6.57v92.06c0 2.58-1.07 4.88-2.75 6.57-1.69 1.69-4.04 2.75-6.57 2.75H9.33c-2.58 0-4.88-1.07-6.57-2.75-1.69-1.68-2.76-4.04-2.76-6.57V21.49c0-2.58 1.07-4.89 2.75-6.57 1.69-1.69 4.04-2.75 6.57-2.75H20.6c1.78 0 3.2 1.42 3.2 3.2s-1.42 4.41-3.2 4.41H10.54c-.8 0-1.55.31-2.09.84-.53.53-.84 1.24-.84 2.09v21.43l-.05-.05zm107.63 8.81H7.56v59.4c0 .8.31 1.55.84 2.09.53.53 1.24.84 2.09.84h101.76c.8 0 1.55-.31 2.09-.84.53-.53.84-1.24.84-2.09V52.9h.01zM50.36 19.73c-1.78 0-3.2-2.63-3.2-4.41 0-1.78 1.42-3.2 3.2-3.2h21.49c1.78 0 3.2 1.42 3.2 3.2 0 1.78-1.42 4.41-3.2 4.41H50.36z" />
        </Svg>
    )
}

export default CalenderIcon
