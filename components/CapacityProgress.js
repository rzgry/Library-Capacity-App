import React from 'react';
import { Bar, Circle } from 'react-native-progress';
import CapacityLimits from '../constants/CapacityLimits';
import Colors from '../constants/Colors';

function progressColour(progress) {
  if (progress <= CapacityLimits.low) {
    return Colors.success;
  }

  if (progress <= CapacityLimits.medium) {
    return Colors.warning;
  }

  return Colors.danger;
}

export const ProgressBar = ({ progress, ...props }) => (
  <Bar color={progressColour(progress)} progress={progress} borderColor="grey" {...props} />
);

ProgressBar.defaultProps = {
  progress: 0,
};

export const ProgressCircle = ({ progress, ...props }) => (
  <Circle color={progressColour(progress)} progress={progress} {...props} />
);

ProgressCircle.defaultProps = {
  progress: 0,
};
