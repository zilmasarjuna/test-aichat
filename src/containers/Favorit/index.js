import * as React from 'react'

const LazyList = React.lazy(() => import('./List'))

export default LazyList