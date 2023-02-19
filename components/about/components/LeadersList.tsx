import React from 'react'
import getImageUrl from '../../../utils/getImageUrl'
import LeaderListItem from './LeaderListItem'
import TestimonialCard from './LeaderListItem'

function LeadersList({ leaders }: any) {
  return (
    <div className="flex flex-col gap-8 md:flex-row justify-evenly px-10 sm:px-32">
    {leaders.map((leader: any) => (
      <LeaderListItem key={leader._id} leader={leader}/> 
    ))}
  </div>
  )
}

export default LeadersList