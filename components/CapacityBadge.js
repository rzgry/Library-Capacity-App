import React from 'react';
import { Badge, Text } from 'native-base';
import CapacityLimits from '../constants/CapacityLimits';

// nativebase badge component takes boolean props for success,
// warning and danger to change the badge's colour
const CAPACITY_BADGE_TYPES = {
  SUCCESS: { success: true },
  WARNING: { warning: true },
  DANGER: { danger: true },
};

function capacityBadgeType(capacity) {
  if (capacity <= CapacityLimits.low) {
    return CAPACITY_BADGE_TYPES.SUCCESS;
  }

  if (capacity <= CapacityLimits.medium) {
    return CAPACITY_BADGE_TYPES.WARNING;
  }

  return CAPACITY_BADGE_TYPES.DANGER;
}

const CapacityBadge = ({ capacity }) => (
  <Badge {...capacityBadgeType(capacity)}>
    <Text>{`${Math.round(capacity * 100)}%`}</Text>
  </Badge>
);

CapacityBadge.defaultProps = {
  capacity: 0,
};

export default CapacityBadge;
