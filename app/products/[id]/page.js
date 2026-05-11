import React from 'react'

function ProductPage({params}) {
    const id=params.then(res=>res.id)
  return (
    <div>
        <h3>{id}</h3>
    </div>
  )
}

export default ProductPage