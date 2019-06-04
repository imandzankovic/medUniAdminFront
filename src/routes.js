import Login from './components/Login.vue';
import CreatePost from './components/posts/CreatePost.vue';
import EditPost from './components/posts/EditPost.vue';
import ListPosts from './components/posts/ListPosts.vue';
import Admin from './components/admin/Admin.vue';
import Redirect from './components/Redirect.vue';
import Video from './components/Video.vue';

const routes = [
    { path: '/', component: Admin, name: 'admin' },
    { path: '/video', component: Video, name: 'video' },
    { path: '/createPost', component: CreatePost, name: 'createPost' },
    { path: '/editPost', component: EditPost, name: 'editPost' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/admin', component: Admin, name: 'admin' },
    { path: '/posts', component: ListPosts, name: 'posts' },
    { path: '/redirect', component: Redirect, name: 'redirect' },
    { path: '/404', component: Error, name: '404' },
];

export default routes;