import { lazy } from "react"

const Administration = lazy(() => import('../page/admin/Administration'))

const routes = [
    {
        path: '/admin-dashboard',
        component: Administration,
        fullscreen: true,
        exact: true,
        auth: true
    }
]

export default routes