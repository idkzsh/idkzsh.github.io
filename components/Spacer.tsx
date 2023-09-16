import React from 'react'

interface Props {
  height: string;
}

const Spacer = ({height}:Props) => {
  return (
    <div className={`w-full ${height}`}></div>
  )
}

export default Spacer