import React, { Component } from 'react';
import { Stack,Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

export default class Startrampe extends Component {
  render() {
    return (
    <Stack>
    <Skeleton height='20px' />
    <Skeleton height='20px' />
    <Skeleton height='20px' />
  </Stack>
    )
  }
}