import React from 'react'

async function page({params}) {
    const pms=await params
    const segement=pms.slug
    console.log(typeof segement)
  return (
    <div>
        <h1>Hello i am Slug</h1>
        <h3>segement: {segement.join('/')}</h3>
    </div>
  )
}

export default page