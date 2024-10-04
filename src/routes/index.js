import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Seach';

const publicRoutes = [
    { path: '/Clone-Tiktok-UI/', component: Home },
    { path: '/Clone-Tiktok-UI/following', component: Following },
    { path: '/Clone-Tiktok-UI/Clone-Tiktok-UI/profile', component: Profile },
    { path: '/Clone-Tiktok-UI/upload', component: Upload, layout: HeaderOnly },
    { path: '/Clone-Tiktok-UI/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
