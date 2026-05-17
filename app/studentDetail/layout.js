import Link from 'next/link'

function layout({children}) {
  return (
    <div>
        <nav
        style={{
          display:'flex',
          gap:'1rem',
          margin:"3rem"
        }}
        >
            <Link href={'/studentDetail/create'}>create</Link>
            <Link href={'/studentDetail/read'}>read</Link>
            <Link href={'/studentDetail/readAll'}>readAll</Link>
            <Link href={'/studentDetail/update'}>update</Link>
            <Link href={'/studentDetail/delete'}>Delete</Link>
        </nav>
        {children}
    </div>
  )
}

export default layout