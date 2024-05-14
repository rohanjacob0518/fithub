import * as React from 'react';
import { WrapperStyles } from './WorkoutLayout';
import styled from 'styled-components';

const Div = styled.div`
  .shapes > * {
    opacity: 0;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(1);
  }
  @keyframes sup1 {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    75%,
    100% {
      opacity: 0;
    }
  }

  #flat {
    animation-name: sup1;
  }

  @keyframes sup2 {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50%,
    100% {
      opacity: 0;
    }
  }

  #right {
    animation-name: sup2;
  }

  @keyframes sup3 {
    0%,
    50% {
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  #left {
    animation-name: sup3;
  }
`;
export const AlternatingSupermans = ({ isPaused }) => (
  <WrapperStyles isPaused={isPaused}>
    <Div className="illo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 523.65 139.72">
        <g className="shapes">
          <g id="flat">
            <path
              fill="var(--shirt)"
              d="M267.53,74a33,33,0,0,0,3.27-1.27c2.9-1.5,4.94-1.49,6.93,1.81,1.78,3,7.74,3.33,10.72,1.29,1.51-1,2.89-2,4.87-1.2,1.06.45,2.13-.17,3.1-.55,14.19-5.57,28.9-9.52,43.43-14,1.38-.43,3.55.75,4.12-1.7h14.32c.26.38.44.93.8,1.11,7.85,3.81,14.37,9.84,22.32,13.48-1.4,5.69,2.94,7.9,6.45,10.61l5.39,4.07,3.69,2.82c2.35,1.79,4.58,3.74,7.35,4.9l7.18,5.72a4.85,4.85,0,0,1-1.14,1.7c-2.41,2.42-5.55,3.87-7.84,6.48-5.19,5.9-5.22,6.24,1.33,9.87.07,0,.08.22.11.33-.71.63-1.66,1.12-2.1,1.9-1.35,2.38-2.9,1.94-5.05,1.06-4.36-1.81-9.36-1.44-13.6-3.84-1.75-1-3.64-1.72-5.44-2.6a12.43,12.43,0,0,0-8.66-.81c-12,2.46-23.38,7.19-35.27,10-7.09,1.69-14.2.91-21.25-.47a18.81,18.81,0,0,0-6.73-.17c-9.92,1.62-20,.91-29.94,1.58-3,.2-4.76-1.82-6.29-4-.66-1-1.21-2-1.82-3a57,57,0,0,1-2.38-23.49A79.26,79.26,0,0,0,266,80.71C265.78,78.38,265.62,75.92,267.53,74Z"
            />
            <path
              fill="var(--flesh)"
              d="M515.78,115.57c1.38,1.07,3.13,1,4.69,1.29a4.17,4.17,0,0,1,3.18,2.3v2.15c-14.36,3.36-28.75.33-43.1,0-6.74-.15-12.94,1.57-19.27,3-8.38,1.94-16.91,2.45-25.42,3.24a3.74,3.74,0,0,1-1.77-.09c-8.17-3.44-17.26-3.1-25.5-6.23l-4.66-1.79c0-.12,0-.3-.11-.34-6.55-3.63-6.52-4-1.33-9.87,2.29-2.61,5.43-4.06,7.84-6.48a4.85,4.85,0,0,0,1.14-1.7c3.78,1.14,7.42,2.86,11.48,2.89a25,25,0,0,0,13.38,2.44c3.3-.28,6.78-.62,9.95.1,11.2,2.53,22.59,2.55,33.94,3.33,9.16.64,18.52-.23,27.33,3.54A26.58,26.58,0,0,0,515.78,115.57Z"
            />
            <path
              fill="var(--flesh)"
              d="M187.29,124.5c-4.58,0-9.19-.36-13.69-.47-7.53-.2-15-2.53-22.63-.69-3.58.87-7.06-.36-10.39-1.71a110.6,110.6,0,0,0-26.72-7.22c-11.43-1.57-22.28-5.79-33.36-9-.9-.26-1.84-.41-2.76-.61a50.54,50.54,0,0,0-11.37-2.79c-4.12-1-8.3-.8-12.48-.7-4.68-.73-7.42-3.76-9.22-7.85C42.23,88,44.46,83.78,50.26,83c1-.13,2-.16,1.55-1.62,4.12,0,7.91,2.18,12.08,1.93C69,85.48,74.55,86,80,86.75c1.85.25,3.77.59,5.52-.51,5.72,1.84,11.53.26,17.34.36a32.35,32.35,0,0,0-14.93-3.18c-3.3-.77-5.3-2.92-6.6-6-2.24-5.23.67-9.54,6.28-9.21.83,0,1.67,0,2.5.07,6.55,1,13.09,2.19,19.67,3,7.42.93,14.87,1.62,22.32,2.25,8.12.69,15,4.6,21.59,8.76,7.09,4.48,14.39,6.16,22.51,4.35,4.39-1,8.75-2.13,13.14-3.13,1.07-.25,2.23-1.2,3.27.1-1.15,3.39-2,7-6.69,7.26-1.39.09-1.57,1.9-1.94,3.14C180.9,104.67,183.23,114.68,187.29,124.5Z"
            />
            <path
              fill="var(--pants)"
              d="M187.29,124.5c-4.06-9.82-6.39-19.83-3.3-30.43.37-1.24.55-3,1.94-3.14,4.7-.31,5.54-3.87,6.69-7.26.69-1.6,2.3-1.58,3.62-1.93a112.46,112.46,0,0,1,17.11-3.53,44.19,44.19,0,0,0,16.59-5.08c9.11-4.89,18.8-5.53,28.78-3.51a17.81,17.81,0,0,1,8.81,4.4c-1.91,1.9-1.75,4.36-1.56,6.69a79.26,79.26,0,0,1-.57,14.85,57,57,0,0,0,2.38,23.49c-3.2,1.57-6.49,3-9.58,4.76-6.17,3.55-12.85,4-19.71,3.68q-23.56-.94-47.14-1.86A6.51,6.51,0,0,1,187.29,124.5Z"
            />
            <path
              fill="var(--hair)"
              d="M51.81,81.37c.45,1.46-.56,1.49-1.55,1.62-5.8.79-8,5-5.59,10.51,1.8,4.09,4.54,7.12,9.22,7.85.23,1.05-.58,1.43-1.21,2-1.55,1.3-3.14,2.57-4.57,4-6.8,6.74-7,8.32-2.24,16.64,2.22,3.89,1.79,4.76-2.69,5.44-6.82,1-16.29-7-16.52-14.1-.08-2.38.08-4.76.18-7.14.27-6.67.46-13.32-1.49-19.85a28.05,28.05,0,0,1-.79-6.37c-.31-5.3-.09-4.74,5-5.55C37.8,75.05,44.73,78.22,51.81,81.37Z"
            />
            <path
              fill="var(--hair)"
              d="M85.53,86.24c-1.75,1.1-3.67.76-5.52.51C74.55,86,69,85.48,63.89,83.3c.87-4,.51-8,0-12a47.1,47.1,0,0,1-.12-6.4c.12-5.1.41-4.89,5.54-5C76.24,59.79,82,62.33,87.55,66c1,.63,2.15,1.06,2.57,2.32-.83,0-1.67,0-2.5-.07-5.61-.33-8.52,4-6.28,9.21,1.3,3,3.3,5.18,6.6,6C88.17,85.24,86.32,85.29,85.53,86.24Z"
            />
            <path
              fill="var(--hair)"
              d="M66.37,102.05a50.54,50.54,0,0,1,11.37,2.79c0,1.79,1.09,4-1.61,4.75-2.48.69-5,.9-6.72-1.6A17.1,17.1,0,0,1,66.37,102.05Z"
            />
            <path
              fill="var(--hair)"
              d="M423,104c-4.06,0-7.7-1.75-11.48-2.89l-7.18-5.71c-1.55-4.42-3.74-8-9.31-7.5a8.06,8.06,0,0,1-1.73-.23l-5.39-4.07c.68-3,1.36-6.12,2-9.18L398.84,72c9.84-2.69,19.12,1.33,24,10.44.95,1.77,1.71,3.64,2.55,5.47a38.63,38.63,0,0,1-.78,13.72A4.71,4.71,0,0,0,423,104Z"
            />
            <path
              fill="var(--flesh)"
              d="M389.9,74.39c-.68,3.06-1.36,6.13-2,9.18-3.51-2.71-7.85-4.92-6.45-10.61C384.23,73.47,387,74.42,389.9,74.39Z"
            />
            <path
              fill="var(--flesh)"
              d="M393.25,87.64a8.06,8.06,0,0,0,1.73.23c5.57-.54,7.76,3.08,9.31,7.5-2.77-1.17-5-3.12-7.35-4.91Z"
            />
            <path
              fill="var(--flesh)"
              d="M424.58,101.61a38.63,38.63,0,0,0,.78-13.72c5,0,9.79,1.55,14.48,2.89,6.16,1.77,12.47.55,18.57,2a5.93,5.93,0,0,0,4.4,1.45.42.42,0,0,0,.47,0c7.74,2.58,15.94,2.53,23.86,4.07l1.93.22c.93.88.65,2.67,2.27,3v.89c-2.88,1.73-7.2-.19-9.3,3.66-.15.28-1.14.21-1.72.13-7.62-1-15.43-.77-22.75-3.63a22.28,22.28,0,0,0-10.19-1A153.56,153.56,0,0,1,424.58,101.61Z"
            />
          </g>
          <g id="right">
            <path
              fill="var(--flesh)"
              d="M381.11,91.62c2.83-2.73,1.93-6.91,3.87-10,.93-1.5,1.63-3.13,2.44-4.7a23.74,23.74,0,0,0,13.36,2.75c6.25-.42,11.87,1.83,17.54,3.89,2.45.89,4.88,1.84,7.31,2.76l1.43.78a94.91,94.91,0,0,0,13,5.81c3.06,1.15,6.31-.13,9.43,1.31,9.73,4.52,20.16,6.91,30.52,9.46a4,4,0,0,1,2.81,2.36c1.44,2.72.11,3.22-2.08,3.06-2-.14-3.8-.69-5.3,1.5-.87,1.26-2.77.49-4.07.14-7.42-2-15.14-2.8-22.13-6.59-4.08-2.21-9.09-1.39-13.68-1.92-8.73-1-17.52-1.54-26.21-2.76-5.5-.77-10.88-2.41-16.31-3.66-2.18-1.26-4.71-1.31-7-2.07C384.36,93.19,382.16,93.68,381.11,91.62Z"
            />
            <path
              fill="var(--flesh)"
              d="M56.33,39.64c-4.87-6.47-3.86-6.2.19-13.25,2.11-3.68,4.59-4.06,8.16-1.88a8.2,8.2,0,0,0,4.78.92C75.3,28.27,81.12,31.14,87,33.94c1.59.76,42.18,10.21,56.28,22.78,9.71,8.66,21.81,11.55,34.43,13,6.36.74,12.83.35,19.1,1.9a57.69,57.69,0,0,0-1.42,11.62,229.86,229.86,0,0,0,2.53,36.5c-9.64-.08-19.26-.27-28.28-4.38-1.93-.88,2,0,0,0-3.23,0-11.23-3.21-14.49-3.5-6.66-.59-19.38.8-27.5-2.11-7.14-2.56-32.78-5.88-40-8.29s-53.22-4.56-60.81-5c-5.31-2-10.11-12.28-9-16.9.95-4,65.38-5.26,72.13-4.92,14.38,2.47,28.76,4.81,43.38,5.24.21.28.45.49.72.1,0,0-.25-.29-.38-.44-2.06-3.16-5.54-4.5-8.7-5.66-14.92-5.45-27.85-14.47-41.49-22.24C75.2,47,66.37,38.8,56.33,39.64Z"
            />
            <path
              fill="var(--pants)"
              d="M197.89,119.76a229.86,229.86,0,0,1-2.53-36.5,57.69,57.69,0,0,1,1.42-11.62c4.72-.41,9.24.86,13.58,2.24C215,75.37,220,75,224.49,77.26c.71.35,1.3-.35,1.93-.63a59.05,59.05,0,0,1,27.37-5.18c6.73.38,12.17,3.71,17.16,7.93,2.3,5.17,2.7,10.81,3.7,16.26A134.37,134.37,0,0,1,277.32,119c0,7.66-.31,8.06-7.73,8.92a16.82,16.82,0,0,0-10.07,1.57,23,23,0,0,1-16.68,1c-12.06-3.57-24.48-4.69-36.88-5.85C202.22,124.31,199.33,123.46,197.89,119.76Z"
            />
            <path
              fill="var(--hair)"
              d="M35.32,97c-1.27,2.84-4.3,3.91-6.17,6.23-3.41,4.21-6.41,8.45-7,14.1-.52,5-1.6,9.87-2.32,14.82-1,6.71-1.79,7.48-8.57,7.6l-3.42-4.58c-.64-4-3.15-7.27-4.75-10.89C.21,117.74-1,111.33,1,104.19a63,63,0,0,0,2.62-23,28.85,28.85,0,0,1,.41-5.7c.77-6.12.84-5.7,6.77-6.34,8.77-1,16.4,1.94,23.94,5.7A8.25,8.25,0,0,1,30.4,77c-4.17.39-5.93,2.18-5.42,6.39C26,91.48,27.54,94.71,35.32,97Z"
            />
            <path
              fill="var(--hair)"
              d="M394.54,94.88,387.93,90c.49-2.83,2.06-5.53,1.11-8.55l12.21-3.83c9.5-1.66,16.21,3,20.95,10.32,4.63,7.15,5,15,.51,22.62-2.8,1.31-4.95-.86-7.38-1.45a32.83,32.83,0,0,1-4-1.54l-7.13-5.88C400.57,94.62,401.44,94.26,394.54,94.88Z"
            />
            <path
              fill="var(--flesh)"
              d="M495.1,47.45c-2.77.19-4.81,2-6.88,3.45-7.09,5-13.52,10.86-21,15.43-6.21,3.8-9.58,10.48-14.47,15.64-5.07,5.34-9.94,11.1-15.86,15.34-5.35,3.84-12,5.83-18.07,8.72-3.54,1.69-7,3.55-11,4.15a30.58,30.58,0,0,0-4.61.92c-1.6.56-2.36-.14-2.53-1.44-.31-2.4-.27-4.84-.54-7.25-.4-3.74,2-7.14,1.25-10.91a31.94,31.94,0,0,0,4-1.47c2.22-1.16,5.26-1,6.51-3.79,1.53,1.37,2.61-.26,3.85-.62,6.33-1.81,9.81-7.84,15.45-10.6,12.13-5.94,22.66-14.36,34-21.55a40.84,40.84,0,0,0,4.31-3.17c8.25-6.92,19-8.59,28.21-13.39a2.91,2.91,0,0,1,3.61.58c1.18,1.19.26,2.13-.52,3.08a3.87,3.87,0,0,0-.94,2.63Z"
            />
            <path
              fill="var(--hair)"
              d="M69.46,27.88c-5.19-4.33-6.5-4.6-9.69-1.95-3.65,3-4,8-1,12.82-.5,1.14-1.42,1-2.42.89a31.45,31.45,0,0,0-7.79.7,12.69,12.69,0,0,0-10.69,8.78c-.62,1.69-1.06,4.2-4,3.55-3.11-.69-5-3-4.65-6.19.9-7.64,2.26-15.07,8.75-20.4C43,21.94,45.74,15.92,49.59,10.8a33.25,33.25,0,0,1,3.29-3.73c.66-.66,1.57-1.27,2.55-.52C62.61,12,68.22,18.52,69.46,27.88Z"
            />
            <path
              fill="var(--shirt)"
              d="M411.34,107.55c-1.91,3.34-6,4.3-8.13,7.38-1.4,2-21.27,10.46-28.54,6a3.23,3.23,0,0,0-2.76-.27c-10.1,3-20.51,5-30.38,8.74-9.72,3.67-19.54,3.77-29.49,1.71a21.53,21.53,0,0,0-7.43.11c-9.12,1.2-18.34.57-27.48,1.41-3.61.33-6.13-1.4-7.54-4.73,7.42-.86,7.76-1.26,7.73-8.92a134.37,134.37,0,0,0-2.67-23.33c-1-5.45-1.4-11.09-3.7-16.26,2.67-1.68,4.59-1.69,6.63,1.41s8.48,3.48,11.65,1.15c.47-.35.95-1,1.41-1,9.69.11,17.64-5.69,26.7-7.76,10.33-2.37,19.64.22,29.34-4,14.64-1.13,28.41,3.57,32.38,4.51,8.87,2.09,14.29,3.87,13.79,6.53-1.33-.17-5.55-.86-6.45-.63-.5.21-1.11.73-1.48.6-1.68-.62-3-.32-3.51,1.43-.64,2.06-.32,4.31,1.63,5.28,1.76.88,3.59.25,5.41.94,2.2,1.64,3.89-1.43,6.09.21,4.83-1.76,13.61-3.82,16.8-1.51C418.32,83.56,409,105.59,411.34,107.55Z"
            />
            <path
              fill="var(--flesh)"
              d="M386.4,79.6c-.14,2.08,1.83,1.11,2.64,1.83.95,3-.62,5.72-1.11,8.55-1.82-.7-3.13-2.19-4.89-3.07-2-1-2.27-3.22-1.63-5.28.53-1.75,1.83-2,3.51-1.43C385.29,80.33,385.9,79.81,386.4,79.6Z"
            />
            <path
              fill="red"
              d="M133.67,79.58c.13.15.41.4.38.44-.27.39-.51.18-.72-.1Z"
            />
          </g>

          <g id="left">
            <path
              fill="var(--flesh)"
              d="M510.77,132c-2.21-1.68-4.94-1.67-7.46-1.94-8.62-.93-17.32-.76-25.93-2.24-7.17-1.24-14.11,1.56-21.19,2.2-7.33.67-14.79,1.79-22,1.07-6.55-.65-12.88-3.55-19.33-5.37-3.78-1.07-7.61-2-11-4.12a31.3,31.3,0,0,0-4.07-2.35c-1.57-.63-1.68-1.66-.95-2.75,1.35-2,3-3.82,4.38-5.8,2.16-3.08,6.22-4,8.13-7.38a29.84,29.84,0,0,0,4,1.54c2.43.6,4.58,2.76,7.38,1.45.25,2,2.14,1.53,3.31,2.08,6,2.81,12.54.58,18.6,2.22,13,3.55,26.51,4.18,39.76,6.24a41.37,41.37,0,0,0,5.33.46c10.76.25,19.92,6.06,30,8.55a2.92,2.92,0,0,1,2.33,2.82c.1,1.67-1.21,1.77-2.43,2a3.82,3.82,0,0,0-2.43,1.35Z"
            />
            <path
              fill="var(--hair)"
              d="M56.69,39.19C54,40.7,50.9,39.75,48,40.48,42.76,41.82,37.83,43.42,34,47.59c-3.4,3.67-7.2,6.95-10.74,10.48-4.79,4.79-5.91,4.92-11.41,1V53.31c1.9-3.61,1.83-7.7,2.72-11.56C16.13,34.81,19,28.93,24.9,24.46A62.85,62.85,0,0,0,40.74,7.64a28.2,28.2,0,0,1,3.74-4.31c4.28-4.45,4.08-4.07,9.22-1,7.59,4.49,12,11.38,15.76,18.89a8.2,8.2,0,0,1-4.78-.91c-3.57-2.19-6.05-1.81-8.16,1.87C52.47,29.19,51.81,32.72,56.69,39.19Z"
            />
            <path
              fill="var(--shirt)"
              d="M411.34,103.3c-1.91,3.34-6,4.3-8.13,7.38-1.4,2-3,3.79-4.38,5.8-.73,1.09-.62,2.12.95,2.75a31.3,31.3,0,0,1,4.07,2.35c-.91.93-1.79,1.88-2.72,2.79a2.7,2.7,0,0,1-2.88.77c-8.06-2.29-16.31-4-23.58-8.47a3.31,3.31,0,0,0-2.76-.27c-10.1,3-20.51,5-30.38,8.75-9.72,3.66-19.54,3.77-29.49,1.7a21.53,21.53,0,0,0-7.43.11c-9.12,1.2-18.34.58-27.48,1.41-3.61.33-6.13-1.4-7.54-4.72,7.42-.86,7.76-1.27,7.73-8.92a134.15,134.15,0,0,0-2.67-23.33c-1-5.46-1.4-11.1-3.7-16.27,2.67-1.68,4.59-1.68,6.63,1.41s8.48,3.48,11.65,1.15c.47-.35.95-1,1.41-1,9.69.12,17.64-5.68,26.7-7.76,10.33-2.37,20.06-6.54,29.76-10.73a18.89,18.89,0,0,1,7.67-1.4c9.65,0,19.31,0,29,0,1.19,0,2.42-.13,3.3.94,0,1.76.09,3.54-.08,5.29-.34,3.64,2.34,7,1,10.67-1.33-.17-.69,1.48-1.59,1.71-.5.22-1.11.73-1.48.6-1.68-.61-3-.31-3.51,1.43-.64,2.06-.32,4.31,1.63,5.28,1.76.88,3.07,2.38,4.89,3.07l6.61,4.9c2.38,3.46,6.48,4.48,9.67,6.79Z"
            />
            <path
              fill="var(--flesh)"
              d="M56.69,39.19c-4.88-6.47-4.22-10-.17-17,2.11-3.68,4.59-4.06,8.16-1.87a8.2,8.2,0,0,0,4.78.91C75.3,24,81.12,26.9,87,29.7c1.59.75,42.18,10.21,56.28,22.77,9.71,8.67,21.81,11.56,34.43,13,6.36.75,12.83.36,19.1,1.9A57.7,57.7,0,0,0,195.36,79a229.86,229.86,0,0,0,2.53,36.5c-9.64-.09-19.26-.28-28.28-4.38-1.93-.88-4-.4-6-.43a12,12,0,0,1-8.5-3.07c-6.58-6.18-15.17-8.12-23.29-11q-10.73-3.84-21.52-7.45c-7.26-2.43-14.8-3.18-22.39-3.6-5.31-2-8-6.24-6.88-10.86.95-4,2.16-4.61,8.91-4.27,14.38,2.47,28.76,4.81,43.38,5.24.21.28.45.49.72.1,0,0-.25-.28-.38-.43-2.06-3.16-5.54-4.51-8.7-5.67-14.92-5.45-27.85-14.46-41.49-22.24C75.2,42.72,66.72,38.35,56.69,39.19Z"
            />
            <path
              fill="var(--pants)"
              d="M197.89,115.52A229.86,229.86,0,0,1,195.36,79a57.7,57.7,0,0,1,1.42-11.63c4.72-.41,9.24.86,13.58,2.25C215,71.12,220,70.8,224.49,73c.71.35,1.3-.35,1.93-.63a58.92,58.92,0,0,1,27.37-5.17c6.73.38,12.17,3.7,17.16,7.92,2.3,5.17,2.7,10.81,3.7,16.27a134.15,134.15,0,0,1,2.67,23.33c0,7.65-.31,8.06-7.73,8.92a16.67,16.67,0,0,0-10.07,1.57,23,23,0,0,1-16.68,1c-12.06-3.56-24.48-4.68-36.88-5.84C202.22,120.07,199.33,119.22,197.89,115.52Z"
            />
            <path
              fill="var(--flesh)"
              d="M388,73.64c1.3-3.71-1.38-7-1-10.67.17-1.75.06-3.53.08-5.29a23.81,23.81,0,0,0,13.17-3.54c5.39-3.18,11.43-3.7,17.42-4.4,2.59-.3,5.18-.54,7.77-.81L427,49a94.27,94.27,0,0,0,14.25-.66c3.25-.34,5.58-3,9-3.06C461,44.94,471.4,42.39,481.81,40a4.05,4.05,0,0,1,3.57.84c2.51,1.78,1.54,2.83-.49,3.67-1.84.77-3.71,1.09-4.07,3.72-.21,1.51-2.25,1.69-3.57,2-7.53,1.52-14.78,4.3-22.73,4-4.64-.14-8.75,2.84-13.09,4.42-8.25,3-16.34,6.49-24.66,9.3C411.51,69.76,406,70.7,400.55,72c-2.51-.16-4.79.93-7.2,1.3C391.59,73.59,389.85,75,388,73.64Z"
            />
            <path
              fill="var(--hair)"
              d="M394.54,90.63l-6.61-4.9c.49-2.83,2.06-5.53,1.11-8.55l12.21-3.83c9.5-1.66,16.21,3,20.95,10.33,4.63,7.14,5,15,.51,22.61-2.8,1.31-4.95-.85-7.38-1.45a29.84,29.84,0,0,1-4-1.54l-7.13-5.88C400.57,90.37,401.44,90,394.54,90.63Z"
            />
            <path
              fill="var(--hair)"
              d="M90,70.43c-6.75-.34-8,.24-8.91,4.27-1.09,4.62,1.57,8.83,6.88,10.86.29,1.2-.54,1.63-1.39,2.16A31.44,31.44,0,0,0,80.72,93a12.67,12.67,0,0,0-3.26,13.43c.52,1.73,1.68,4-1.06,5.25-2.9,1.32-5.8.64-7.44-2.15-3.88-6.64-7.26-13.4-5.27-21.56,1.55-6.36.11-12.8.11-19.2a34.43,34.43,0,0,1,.38-5c.14-.92.5-2,1.73-2C74.93,61.87,83.33,63.69,90,70.43Z"
            />
            <path
              fill="var(--flesh)"
              d="M386.4,75.35c-.14,2.08,1.83,1.11,2.64,1.83.95,3-.62,5.72-1.11,8.55-1.82-.69-3.13-2.19-4.89-3.07-2-1-2.27-3.22-1.63-5.28.53-1.74,1.83-2,3.51-1.43C385.29,76.08,385.9,75.57,386.4,75.35Z"
            />
            <path
              fill="var(--flesh)"
              d="M394.54,90.63c6.9-.62,6-.26,9.67,6.79C401,95.11,396.92,94.09,394.54,90.63Z"
            />
            <path
              fill="red"
              d="M133.67,75.34c.13.15.41.39.38.43-.27.39-.51.18-.72-.1Z"
            />
          </g>
        </g>
      </svg>
    </Div>
  </WrapperStyles>
);