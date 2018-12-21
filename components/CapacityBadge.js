import React from 'react';
import { Badge, Text } from 'native-base';

function capacityBadgeType(capacity) {
  if (capacity <= 30) {
    return { success: true };
  }

  if (capacity <= 70) {
    return { warning: true };
  }

  return { danger: true };
}

const CapacityBadge = ({ capacity }) => (
  <Badge {...capacityBadgeType(capacity)}>
    <Text>{`${capacity}%`}</Text>
  </Badge>
);

export default CapacityBadge;
