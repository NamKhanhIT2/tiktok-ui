import Home from '~/pages/Home';
import Following from '~/pages/Following/index.js';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
