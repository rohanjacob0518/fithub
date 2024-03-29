import * as React from 'react';
import { WrapperStyles } from './WorkoutLayout';
import styled from 'styled-components';

const Div = styled.div`
  .shapes > * {
    opacity: 0;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    animation-timing-function: steps(1);
  }
  @keyframes psu-01 {
    0% {
      opacity: 1;
    }
    16.66667%,
    50% {
      opacity: 0;
    }
    50%,
    66.66667% {
      opacity: 1;
    }
    66.66667%,
    100% {
      opacity: 0;
    }
  }

  #psu-01 {
    animation-name: psu-01;
  }

  @keyframes psu-02 {
    0%,
    16.66667% {
      opacity: 0;
    }
    16.66667%,
    33.33333% {
      opacity: 1;
    }
    33.33333%,
    100% {
      opacity: 0;
    }
  }

  #psu-02 {
    animation-name: psu-02;
  }

  @keyframes psu-03 {
    0%,
    33.33333% {
      opacity: 0;
    }
    33.33333%,
    50% {
      opacity: 1;
    }
    50%,
    100% {
      opacity: 0;
    }
  }

  #psu-03 {
    animation-name: psu-03;
  }

  @keyframes psu-05 {
    0%,
    66.66667% {
      opacity: 0;
    }
    66.66667%,
    83.33333% {
      opacity: 1;
    }
    83.33333%,
    100% {
      opacity: 0;
    }
  }

  #psu-05 {
    animation-name: psu-05;
  }

  @keyframes psu-06 {
    0%,
    83.33333% {
      opacity: 0;
    }
    83.33333%,
    100% {
      opacity: 1;
    }
  }

  #psu-06 {
    animation-name: psu-06;
  }
`;
export const PrimalStepUp = ({ isPaused }) => (
  <WrapperStyles isPaused={isPaused}>
    <Div className="illo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 608.7 722.8">
        <g className="shapes">
          <g id="psu-01">
            <path fill="var(--shirt)" d="M484 288Z" />
            <path fill="var(--hair)" d="M425 76Z" />
            <path
              fill="var(--hair)"
              d="M506 643c2-2 4-4 3-8-1-3-4-5-7-5-4 0-8-2-12-4a188 188 0 0 1-27-16c-4-3-7-5-7-10 0-2 0-6-4-3a3 3 0 0 1-2 0c-2 0-2 3-3 4 2 5 0 8-5 10l-1 8c-4 3-9 4-12 10-4 8-13 5-18-5l-4-6c-2 0-3-1-3-3s1-3 3-3a1 1 0 0 1 1-1c-1-1-1-3-3-2l-3 4c0 6-1 11 1 17v2a1 1 0 0 0 0 1 1 1 0 0 1 0-1v9a6 6 0 0 0 2-2 6 6 0 0 1-2 2c1 4-1 8 1 12a3 3 0 0 0 3 3c5 3 11 4 17 5a2 2 0 0 0 3 1h4l8 2 2 1 12 6 4 1c6 2 13 2 19 1 9-2 17-3 24-9 6-3 8-10 4-14-3-4-1-5 2-7Zm-101-7a7 7 0 0 0-1 0 7 7 0 0 1 1 0Zm0 3a3 3 0 0 0 0-1 3 3 0 0 1 0 1Z"
            />
            <path fill="var(--shirt)" d="M499 317ZM500 318Z" />
            <path
              fill="var(--pants)"
              d="M491 384c0 2-4 1-4 0 1-8-8-12-5-21a29 29 0 0 0-4-28c-4-4-4-10-5-16l-8 1c-6-1-12 1-18 3l-30 6c-8 2-15 3-21-3-1 12 0 24 4 35 8 24 11 49 11 74 0 12 0 12 12 13 19 0 37-2 56-3 12-1 12-1 13-13l2-10c2-12 0-24 2-36-1 0-2-6-5-2Z"
            />
            <path
              fill="var(--pants)"
              d="M491 4c-3-4-7-2-11-2-3 0-7 1-9-2h-29c-3 4-8 3-12 4-14 3-23 13-22 28s4 30 8 44a4 4 0 0 0 2 5c3 0 6-1 7-5 7-6 2-13 1-20-1-5-1-9 3-12 6-2 10 1 12 7 2 8 6 9 12 3a15 15 0 0 0 2-3l2-4c1-6 2-10 9-13 3-1 3-5 3-8-2-8 1-11 9-8l7 3 2-2a26 26 0 0 0 2-3c2-4 4-8 2-12Z"
            />
            <path
              fill="var(--hair)"
              d="M407 618c-2 0-3-1-3-3s1-3 3-3v2h-1a7 7 0 0 0 1 1v2Z"
            />
            <path fill="var(--pants)" d="M407 616v-1l1 1a9 9 0 0 0-1 0Z" />
            <path
              fill="var(--pants)"
              d="M407 615a7 7 0 0 1-1-1s1 0 1-1a1 1 0 0 1 0 2Z"
            />
            <path
              fill="var(--shirt)"
              d="M497 296c-6-35-7-70-5-106 0-9 0-19-5-27-2-9-6-17-11-25 0-4-3-7-6-10a38 38 0 0 0-7-13l-3-4c-3 1-3 3-3 5 0 6-3 8-7 5l-9-2c-5-6-12-8-19-10l-9-12c-7 5-9 15-13 22s-5 15-11 21v27a178 178 0 0 1 12 86c-1 10 0 21-4 31-5 14-3 28-1 42 6 6 13 5 21 3 10-3 20-5 31-6 5-2 11-4 17-3l8-1a17 17 0 0 0-6-11c-9-8-14-19-24-27-6-5-9-13-12-21l-5-12-1-1v-5l-1-4-4-18-3-25c-2-2 0-5 0-8a44 44 0 0 1 0-12c11 3 22 1 34 2 2 0 5-2 6 2a7 7 0 0 0 1 0 8 8 0 0 1-1 0v33c0 5 0 10 3 14 4 5 4 12 7 18 2 3 4 7 4 11 3 0 1 5 4 6l1 2v6c5 3 5 8 6 13 3 1 2 3 2 6 2 0 3 1 3 3v2c4 3 4 7 5 11s2 7 6 8c2-5 0-11-1-16Z"
            />
            <path
              fill="var(--flesh)"
              d="m511 336-11-18-1-1-1-5c-4-1-5-4-6-8s-1-9-5-11v-3a2 2 0 0 1-3-1 2 2 0 0 0 3 1l-3-6c0-2-5-14-7-16-2-11-8-21-13-31l-4-11c-3-4-3-9-3-14v-33c-1-4-4-2-7-3-11 0-22 2-33-1a44 44 0 0 0 0 12 4 4 0 0 1 0 1 4 4 0 0 0-1 4c2 14 2 28 5 41l5 20c1 5 3 9 7 12 2 6 5 12 10 17 10 7 15 18 24 26a17 17 0 0 1 6 11c1 6 1 12 5 17a29 29 0 0 1 4 27c-3 9 6 13 5 21 0 1 4 2 4 0 3-4 4 2 5 1 7 1 6-6 9-8 1 2 0 5 3 5s3-3 4-5l3-13c1-10 1-20-4-28ZM414 493a56 56 0 0 0-5 8c-3 9-8 17-7 26l4 49c1 12 3 23 2 35a1 1 0 0 0-1 1v1a1 1 0 0 1 0 2l1 1a9 9 0 0 0-1 0v2l4 6c5 10 14 13 18 5 3-6 8-7 12-10l1-8c5-2 7-5 5-10 1-1 1-4 3-4v-8l-1-4c2-14-1-28 0-42v-5c2-2 1-4 1-7 2-10 1-22 7-30 11-17 16-37 22-56-19 1-37 4-56 3 2 16 0 31-9 45Zm-3 131v-2 2Zm36-29a8 8 0 0 0-1 1v1-1a8 8 0 0 1 1-1 11 11 0 0 1 0-2 11 11 0 0 0 0 2Zm5-91-2-4 2 4Zm-2-4a6 6 0 0 0-3-1 6 6 0 0 1 3 1ZM407 615ZM418 81c-2 5-1 11-5 16l9 12c7 2 14 4 19 10l9 2c4 3 7 1 7-5 0-2 0-4 3-5-2-10 4-17 14-16 5 1 11 1 12-3 1-8 7-13 6-21a4 4 0 0 1 2-4c4-4 3-7 0-11-2-3-6-5-5-9 2-9-3-17-4-26-2-1-5-3-8-3-7-3-10 0-9 8 1 3 0 7-3 8-6 3-7 7-8 13l-2 4a15 15 0 0 1-2 3c-6 6-10 5-12-3-2-6-6-9-12-7-4 3-4 7-3 12 1 7 6 14-1 20-1 4-4 5-7 5Z"
            />
          </g>
          <g id="psu-02">
            <path
              fill="var(--hair)"
              d="M510 643c-5 7-12 11-21 11-18 2-35 3-52 1l-31-2c-3 0-5 0-4-4 3-12 3-24 9-35 1-2 1-5 4-3l6 9c2 3 6 5 9 2 4-3 12-4 11-12-1-6 1-9 7-10 2 2 2 4 2 6 0 10 5 14 13 17 13 5 25 13 40 13 3 0 5 2 7 3ZM86 663c1 4-3 4-5 3-5 0-6 3-6 7-1 6-1 11 7 13l10 6c3 2 3 4 3 7s-2 4-5 4l-15 4H63v-1c-17-3-23-14-25-30-1-9-5-18-7-27-4-11 1-18 13-18l15 2c1-1 2 1 2 2l-3 4c-4 3-7 7-3 13 3 5 14 10 19 8 5-3 8-1 12 3Z"
            />
            <path
              fill="var(--pants)"
              d="M400 480a174 174 0 0 0-14 30c-3 3-2 9-6 12-2-1-3-3-3-5l-10-29c-3-9-4-18-10-26v-4c3-6 7-12 13-14 5 0 9 3 13-1 2-2 5 1 7 2 6 3 11 8 18 3 3-1 7 1 8 5-3 1-4 4-5 7-4 6-8 11-10 18l-1 2Z"
            />
            <path
              fill="var(--shirt)"
              d="M362 361a7 7 0 0 1-3-4 7 7 0 0 0 3 4c1-7-3-13-5-19-5-16-18-26-27-39a15 15 0 0 0-8-6c-1-2-3-3-6-3-3-5-8-8-13-10-7-3-14-8-23-9-7 10-14 20-19 31-10 23-9 47-4 70l9 47c1 6 2 12 0 18-4 11-9 21-12 32-1 7-6 14-3 21l13 4c14 2 26 7 40 9 12 1 23-1 31-11-1-4-5-6-7-9-3-3-5-7-4-11v-2c-5-8-10-16-12-25a3 3 0 0 1 0-1c-1-7-7-11-7-18l-11-29c-1-5 7-14 12-14 7-1 14 1 22-3 5-2 8 3 9 7l3 18c3 6 5 12 5 18l1 3c4 5 2 11 2 16 3 1 2 4 3 6a8 8 0 0 0 6 6c3-6 7-12 13-14-1-28-6-55-8-83Zm-4-7Z"
            />
            <path
              fill="var(--pants)"
              d="m347 509-2-1-2-3-8-9c-8 10-19 12-31 11-14-2-26-7-40-9 0 3-2 3-5 2 1-3 4-2 5-2l-13-4c-1 7-1 15 2 22v1c0 5-6 10 2 14l-1 5-9 26-7 18c-2 6-6 13-5 20 8 7 17 13 29 14l24 1a72 72 0 0 1 30-8c6 0 7-3 8-8l4-47c5-13 10-26 28-26-1-7-7-11-9-17Z"
            />
            <path
              fill="var(--pants)"
              d="M349 183h-9c-15-3-31-1-46 2-13 2-20 14-20 23-1 18 4 36 10 54 3-1 5-3 7-6 5-6 1-13 0-20-2-9 0-12 9-12 4 3 6 6 7 11 0 4 3 4 6 3 5-3 9-7 10-13 0-5 2-7 6-9 5-2 5-6 4-11s1-8 6-7a49 49 0 0 1 7 1l4 3a26 26 0 0 0 6-10c2-6 0-9-7-9Z"
            />
            <path fill="var(--pants)" d="M264 498c0 3-2 3-5 2 1-3 4-2 5-2Z" />
            <path
              fill="var(--flesh)"
              d="M233 600c-3 1-3 3-4 5-2 7-6 13-9 20-2 5-5 7-10 6l-10-1c-17-4-34-6-52-3-26 4-53 8-80 7l-7 1-3 4c-4 3-7 7-3 13 3 5 14 10 19 8 5-3 8-1 12 3 2-2 5-2 8-2a102 102 0 0 1 34 3c34 10 69 8 104 10 10 1 18-4 23-13 4-9 10-15 16-23 6-7 12-14 15-23l-24-1c-12-1-21-7-29-14ZM458 463l-42-10c-3 1-4 4-5 7l-1 7 1-7c-4 6-8 11-10 18l-1 2a174 174 0 0 0-14 30 303 303 0 0 0 39 2c4-1 5 0 4 4a63 63 0 0 0-5 15c-2 19-1 38-5 56l-4 24 6 9c2 3 6 5 9 2 4-3 12-4 11-12-1-6 1-9 7-10-1-10 2-19 6-29l7-17c6-17 11-34 19-50 8-18-3-38-22-41Zm-50 19a2 2 0 0 0-2-3 2 2 0 0 1 2 3ZM358 247c5-3 4-7 1-10-3-4-6-7-5-11 1-9-2-16-4-24l-4-3a49 49 0 0 0-7-1c-5-1-7 2-6 7s1 9-4 11c-4 2-6 4-6 9-1 6-5 10-10 13-3 1-6 1-6-3-1-5-3-8-7-11-9 0-10 3-9 12 1 7 6 14 0 20-2 3-4 5-7 6-3 4-3 9-4 13 9 2 16 6 23 9 5 2 10 5 13 10 3 0 5 1 6 3l2-7c1-11 5-15 16-15h5c4 1 7-2 7-6 1-7 8-12 5-20l1-2Z"
            />
            <path
              fill="var(--flesh)"
              d="M390 544c-7-6-9-14-10-22-2-1-3-3-3-5l-10-29c-3-9-4-18-10-26v-4a8 8 0 0 1-6-6c0-2 0-5-3-6 0-5 3-11-2-16l-1-3c1-6-2-13-5-18l-3-18c-1-4-4-9-9-7-8 4-15 2-22 3-5 0-13 9-12 14l11 29c0 7 6 11 7 18a3 3 0 0 0 0 1c2 9 7 17 12 25v2c-1 4 1 8 4 11 2 3 6 5 7 9l8 9 2 3 2 1c2 6 8 10 9 17a29 29 0 0 1 9 19c1 7 2 15 7 21s7 12 3 19c-3 5-1 7 3 8 3 3 6 0 8 0 9-1 19-13 19-22 0-12-7-20-15-27Zm-13 4a1 1 0 0 1 0 1 1 1 0 0 0 1-1Z"
            />
          </g>
          <g id="psu-03">
            <path
              fill="var(--shirt)"
              d="M511 545c-2 5-4 9-11 10-3 0-3 5-3 9-1 7-5 12-11 16l-5 1c-1-3-3-5-6-5-5 1-9-3-13-4-6-2-11-8-18-2-2 1-3-1-5-2a4 4 0 0 1-1-5 20 20 0 0 1 3-5c2-2 1-3-1-4-4-3-9-1-12-5-1-2-2-4-4-1-5 7-15 9-19 17a6 6 0 0 1-4 3c-6 0-9 3-12 6-4 3-7 6-12 6-8-1-15 2-22 5-10 4-13 3-21-5a94 94 0 0 1-25-60c2-6 7-8 11-11 18-16 38-29 61-37 24-7 47-15 73-14 10 0 21-4 32-2 14 3 26 9 36 20a126 126 0 0 0 12 12c3 3 3 5 0 8l-10 12c-4 9-5 20-11 28a15 15 0 0 0-2 9Z"
            />
            <path
              fill="var(--flesh)"
              d="M428 549c3 4 8 2 12 5 2 1 3 2 1 4a20 20 0 0 0-3 5 4 4 0 0 0 1 5c2 1 3 3 5 2 7-6 12 0 18 2 4 1 8 5 13 4 3 0 5 2 6 5-7 9-12 20-13 31-1 10-4 19-7 29a22 22 0 0 0-2 8c-5 5-5 12-8 17-2 4-1 6 4 6 10 1 21 3 30 9-3 7-9 6-15 4-4 0-7-2-9 3-2 3-6 2-9 1h-6c-2 1-3 3-3 5 0 3 2 2 4 3 11 6 25 2 36 7l13 5c3 0 4 2 4 4s-2 4-4 5c-20 8-41 3-62 4-4 1-6-3-8-6a4 4 0 0 1-1-2c0-25-10-47-11-72l-2-41a7 7 0 0 0-3-5l-9-7a73 73 0 0 1 4-6l24-34ZM68 636c23 0 45-3 66-10 19-7 37-9 56-3 16 5 27-4 39-12 9-7 18-16 28-22 2 10 6 20 13 28 5 5 11 7 17 12 0 3-3 4-5 5l-50 24c-12 7-24 5-36 4l-20-2a252 252 0 0 1-49 0c-12-1-24-2-36 2-2 0-5 0-6 2-4 0-6 4-9 3-5-3-11-5-15-10s-3-10 1-13c3-2 5-5 6-8Z"
            />
            <path
              fill="var(--pants)"
              d="M287 629c-6-5-12-7-17-12-7-8-11-18-13-28l3-6c7-4 12-11 20-14l4-5a182 182 0 0 0 14-28c2-6 5-12 11-16 2 23 10 43 25 60 8 8 11 9 21 5 7-3 14-6 22-5 5 1 8-3 12-6 3-3 6-6 12-6a6 6 0 0 0 4-3c4-8 14-10 19-17 2-3 3-1 4 1l-24 34a73 73 0 0 0-4 6c-3 6-7 6-12 2-12-9-22-7-33 2-14 12-23 25-33 39-2 4-4 5-8 3l-27-6Z"
            />
            <path
              fill="var(--flesh)"
              d="M511 545a15 15 0 0 1 2-9c6-8 7-19 11-28l10-12c3 4 8 4 13 4v11c0 5-1 10 7 8 8-1 17 5 18 11 0 8-7 10-13 12-1 0-3 0-3 2a3 3 0 0 0 3 3c9-1 17 3 25 4 6 0 10 2 8 8l-3 9c-13 3-27-1-38 8-2 1-4 2-6 0-8-5-18-5-27-9-4-1-6-4-6-8 0-5 2-10-1-14Z"
            />
            <path
              className="cls-11"
              d="M68 636c-1 3-3 6-6 8-4 3-5 8-1 13s10 7 15 10c3 1 6-3 9-3 2 2 1 4 0 6a15 15 0 0 0-4 6c-3 12-2 13 8 19l9 7a7 7 0 0 1 2 7c0 4-2 5-5 5-14 3-27 4-40-4-8-4-13-11-13-21-1-12-5-25-8-37-5-17 8-20 20-18l14 2ZM589 568l3-9c2-6-2-8-8-8-8-1-16-5-25-4a3 3 0 0 1-3-3c0-2 2-2 3-2 6-2 13-4 13-12-1-6-10-12-18-11-8 2-7-3-7-8v-11a9 9 0 0 1 5-2h1l18-3a32 32 0 0 1 38 32l-1 41c0 5-4 6-8 5l-11-5ZM485 681c-9-6-20-8-30-9-5 0-6-2-4-6 3-5 3-12 8-17 7 7 16 8 25 11l15 4c5 2 8 4 8 9 0 4-5 5-8 6a39 39 0 0 1-14 2Z"
            />
            <path fill="var(--flesh)" d="M553 498h-1 1Z" />
          </g>
          <g id="psu-05">
            <path
              fill="var(--flesh)"
              d="m463 465-42-9c-3 1-4 3-5 6l-1 8 1-8c-4 6-8 12-10 19l-1 2a173 173 0 0 0-14 29 303 303 0 0 0 39 2c4 0 5 1 3 5a63 63 0 0 0-4 15c-3 18-2 37-6 56l-4 24c2 2 3 6 6 8s6 6 9 3c4-3 12-4 11-12-1-6 1-9 7-10-1-10 2-20 6-29l7-17 19-50c9-18-2-38-21-42Zm-50 19a2 2 0 0 0-2-2 2 2 0 0 1 2 2ZM291 558l2-43c-2-3-5-4-8-4l-7 1 7-1c-6-3-12-6-19-6l-3-2a174 174 0 0 0-31-8 303 303 0 0 0 5 39c0 4 0 5-4 4a63 63 0 0 0-16-2c-18 1-37 5-56 5h-56a99 99 0 0 0-8 8c-2 3-4 7-1 10 4 3 6 11 14 8 6-2 33 2 47 3s16 0 26 2l18 4 53 10c19 5 36-9 37-28Zm-28-46a2 2 0 0 0 2-3 2 2 0 0 1-2 3Z"
            />
            <path
              fill="var(--pants)"
              d="m382 430-24-10a5 5 0 0 1-2-2l-8-1c-7 3-10 9-14 14v5h1c6 7 7 16 10 25l9 30 4 4c-10 22-9 47 23 27 17-2 24 3 30-7l4-42c2-7 10-14 13-20l-40-20-6-3Z"
            />
            <path
              fill="var(--shirt)"
              d="M339 334a7 7 0 0 1-3-4 7 7 0 0 0 3 4c1-7-2-13-4-19-5-16-18-26-27-39a15 15 0 0 0-8-6c-2-2-4-3-7-2-2-6-8-8-12-10-8-4-15-8-23-10-7 10-14 20-19 31-10 23-9 47-5 71l10 47c1 5 2 11 0 17-4 11-10 21-12 33-1 7-6 13-4 20l14 4c13 3 26 7 40 9 12 1 22-1 30-11 0-4-4-6-7-9-2-3-4-6-3-11l-1-2c-5-8-9-16-12-25a3 3 0 0 1 0-1c-1-6-7-11-6-18l-11-29c-1-4 6-14 11-14 8-1 15 1 22-3 6-2 9 3 9 7 1 6 4 12 4 18 3 6 5 12 5 19v2c5 5 2 11 3 17 3 0 2 3 3 5a8 8 0 0 0 5 6c4-6 7-11 14-14-1-28-6-55-9-83Zm-3-7v2-2Z"
            />
            <path
              fill="var(--pants)"
              d="M228 493v22c25 8 53 7 75 3 30 4 79 19 31-19-1-7-8-10-10-16v-1l-1-1-3-3-8-9c-8 11-18 12-30 11-14-2-27-6-40-9-1 4-3 3-5 2 1-3 3-1 5-2l-14-4v26Z"
            />
            <path
              fill="var(--pants)"
              d="M327 156h-9c-16-2-31-1-47 2-13 3-19 14-20 23-1 19 5 36 10 54l8-5c5-7 0-14-1-21-1-8 1-12 10-12 3 3 6 6 6 11 1 4 3 4 6 3 6-3 10-7 10-13 1-4 2-7 6-9 5-2 6-6 5-11-2-5 0-7 6-7a50 50 0 0 1 6 1l4 3a26 26 0 0 0 6-9c3-6 0-10-6-10Z"
            />
            <path fill="var(--pants)" d="M242 471c-1 4-3 3-5 2 1-3 3-1 5-2Z" />
            <path
              fill="var(--flesh)"
              d="M336 220c5-3 3-7 0-10-2-3-5-7-5-11 1-8-2-16-4-24l-4-3a50 50 0 0 0-6-1c-5 0-8 2-6 7 1 5 0 9-5 11-4 2-5 5-6 9 0 6-4 10-10 13-3 1-5 1-6-3 0-5-2-8-6-11-9 0-11 4-9 12 1 7 5 14 0 21-2 2-4 4-8 5-2 4-2 9-3 13 8 2 16 6 23 10 4 2 10 4 13 10 2-1 4 1 6 2l1-6c2-12 6-15 17-15h4c5 0 8-2 8-7 0-7 8-12 4-20l2-2ZM367 517c-6-6-9-14-9-22l-4-4-9-30c-3-9-4-18-10-25h-1v-5a8 8 0 0 1-5-6c-1-2 0-5-3-5-1-6 2-12-3-17v-2c0-7-2-13-5-19 0-6-3-12-4-18 0-4-3-9-9-7-7 4-14 2-22 3-5 1-12 10-11 14l11 29c-1 7 5 12 6 18a3 3 0 0 0 1 1c2 9 6 17 12 25v3c-1 4 1 7 3 10 3 3 7 5 7 9l8 9 3 3 1 1v1c2 6 9 9 10 16a29 29 0 0 1 8 19c1 8 2 15 8 21 5 6 6 12 2 19-2 5 0 7 4 8 3 4 5 0 8 0 9-1 18-13 18-22 0-12-6-20-15-27Zm-12 5Z"
            />
            <path
              fill="var(--hair)"
              d="M138 568c1 5-2 4-4 4-6-1-7 2-7 7-1 6-1 11 7 13 4 1 7 4 10 6 3 1 3 4 3 6 0 3-2 4-5 5l-15 4h-12v-1c-17-3-23-15-25-31-1-9-5-17-7-26-3-12 1-18 14-18 4 0 9 2 14 1 2 0 2 2 2 3-1 1-1 3-3 3-4 4-7 8-3 14 3 5 15 10 19 7 5-2 8 0 12 3ZM522 642c-6 7-14 11-23 12-20 2-39 3-58 1-11-2-23-2-34-2-3-1-6 0-5-4 4-13 4-28 10-40 1-2 1-5 5-3l7 10c3 3 7 6 10 3 4-4 13-5 11-14-1-6 2-10 8-11 2 2 2 5 2 7 0 10 6 15 15 18 14 6 28 15 44 15 3 0 5 2 8 3Z"
            />
          </g>
          <g id="psu-06">
            <path
              fill="var(--flesh)"
              d="m454 468-42-10c-3 1-4 4-5 7v7-7c-4 6-8 11-10 18l-1 2a173 173 0 0 0-14 30 305 305 0 0 0 39 2c4 0 5 1 3 5a63 63 0 0 0-4 14c-2 19-1 38-6 57-1 8-1 16-4 23l6 9c2 3 6 6 9 3 4-4 12-4 11-12-1-6 1-9 7-10-1-11 3-20 6-29l7-18c7-16 12-33 20-49 8-18-3-38-22-42Zm-50 19a2 2 0 0 0-2-3 2 2 0 0 1 2 3Z"
            />
            <path
              fill="var(--hair)"
              d="M513 645c-6 7-14 11-23 12-19 2-38 2-58 0l-34-2c-2 0-6 0-4-4 3-13 3-27 10-39 1-2 1-5 4-3l7 10c3 3 7 6 10 3 4-4 13-5 12-14-2-6 1-10 7-11 3 2 3 5 3 7-1 10 6 15 14 18 14 6 28 15 44 14 4 0 6 3 8 4Z"
            />
            <path
              d="M533 595c-7-1-12-6-19-9-2-1-4-2-6-1-9 4-19 0-28 1-3 0-6-2-7-6-3-13-2-27 0-41l9-46c2-10 3-20 0-30a35 35 0 0 1-2-18c2-9 4-18 4-27-15 6-31 6-46 10l1 7 3 22a36 36 0 0 1-13-2c-3-1-5-1-8 1l-10 1 2 17c2 13 5 27 3 40-3 22 0 43 3 65 2 26 10 51 13 77 1 6 6 9 12 10a72 72 0 0 0 10 0c11 0 21 0 31 3a7 7 0 0 0 7-1c3-2 0-5 0-7 7 0 13-1 18 3h10a4 4 0 0 0 4-4c0-2-1-4-3-4-8-2-15-7-22-10-2-1-4-3-7-2-10 4-21 0-32 1-4 0-6-2-7-6a126 126 0 0 1 0-57l2 13c1 6 5 8 11 9a62 62 0 0 0 9 1c9-1 18-1 27 2a6 6 0 0 0 6-1c3-2 0-4 0-6 6 0 11-1 16 2 3 2 6 2 9 1a4 4 0 0 0 3-4 3 3 0 0 0-3-4Z"
              fill="var(--flesh)"
            />
            <path
              fill="var(--flesh)"
              d="M35 530c22 0 45-2 66-10 19-6 37-9 56-3 16 6 27-3 39-12 9-7 17-16 28-21 2 10 6 19 13 27 4 5 11 8 16 12 0 4-2 4-5 5l-49 25c-12 6-24 5-36 3-7-1-13-2-20-1a252 252 0 0 1-49 0c-12-1-24-2-36 1-2 1-5 1-6 3-4-1-6 4-9 2-5-2-11-4-15-9s-3-10 1-14c3-2 5-4 6-8Z"
            />
            <path
              fill="var(--pants)"
              d="m402 514 4-39c2-7 10-13 14-19l-25-13c-1-1-2-2-3-1l-12-7-7-2-24-10a5 5 0 0 1-2-2l-8-2c-6 3-10 9-14 15l1 4s-17 19-14 28c0 3 0 8 2 9a21 21 0 0 0-2 7c-4 0-6-3-11-7a94 94 0 0 1-25-61c-6 4-9 11-11 17a183 183 0 0 1-14 28l-4 5c-8 3-13 9-20 14l-3 6c2 10 6 19 13 27 4 6 11 8 16 13l27 6c5 1 7 0 9-3l10-14c10 9 20 17 33 22s28 4 42 4c5 0 15 1 22-1 3 0 7 0 9-2a7 7 0 0 0 2-1l-2-21a6 6 0 0 0-3 0Zm-3 9h-3a9 9 0 0 0 3-2v2Z"
            />
            <path
              fill="var(--flesh)"
              d="M478 440a15 15 0 0 1 2-9c6-9 7-19 11-28l10-13c3 4 8 5 13 5l-1 11c1 5 0 9 8 8 8-2 17 5 18 11 0 8-7 9-13 11-1 1-3 1-3 3a3 3 0 0 0 3 3c9-1 17 3 25 3 6 1 10 3 8 9l-3 8c-13 4-27 0-38 8-2 1-4 2-6 1-8-6-18-5-27-9-4-2-6-4-6-8 0-5 2-10-1-14Z"
            />
            <path
              fill="var(--hair)"
              d="M35 530c-1 4-3 6-6 8-4 4-5 9-1 14s10 7 15 9c3 2 5-2 9-2 2 2 1 4 0 6a16 16 0 0 0-4 6c-3 12-3 12 8 19l8 6c3 2 4 5 3 8s-3 4-5 5c-14 2-27 3-40-4-8-5-13-11-13-21-1-13-5-25-8-37-5-17 8-20 20-19l14 2ZM556 462l3-8c2-6-2-8-8-9-8 0-16-4-25-3a3 3 0 0 1-3-3c0-2 2-2 3-3 6-2 13-3 13-11-1-6-10-13-18-11s-7-3-8-8l1-11a9 9 0 0 1 5-2h1l18-4a32 32 0 0 1 38 33l-1 40c0 6-4 7-8 6l-11-6Z"
            />
            <path fill="var(--flesh)" d="M520 393h-1 1Z" />
            <path
              fill="var(--shirt)"
              d="M500 382a124 124 0 0 1-11-12 63 63 0 0 0-36-19c-11-2-22 2-32 1-26-1-49 7-73 15-23 8-43 21-61 36-4 3-9 5-11 11 2 23 10 44 25 61 8 8 11 9 21 4l9-3a6 6 0 0 0 2 0l4-1a28 28 0 0 1 7 0c3 0 6-1 8-3l28-2 24-2h2a8 8 0 0 0 1 5c3 3 8 3 12 3 10 1 20 1 28 8a4 4 0 0 0 4 0l16 5c6 1 8-3 8-9l2-38 1-2a15 15 0 0 1 2-9c6-9 7-19 11-28l10-12c3-3 3-6-1-9Zm-94 73Z"
            />
          </g>
        </g>
      </svg>
    </Div>
  </WrapperStyles>
);
