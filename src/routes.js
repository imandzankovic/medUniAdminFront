import Login from './components/Login.vue';
import CreatePost from './components/posts/CreatePost.vue';
import EditPost from './components/posts/EditPost.vue';
import EditAuthor from './components/authors/EditAuthor.vue';
import ListPosts from './components/posts/ListPosts.vue';
import ListAuthors from './components/authors/ListAuthors.vue';
import ListContacts from './components/contacts/ListContacts.vue';
import CreateAuthor from './components/authors/CreateAuthor.vue';
import Admin from './components/admin/Admin.vue';
import Redirect from './components/Redirect.vue';


const routes = [
    { path: '/', component: Admin, name: 'admin' },
    { path: '/createPost', component: CreatePost, name: 'createPost' },
    { path: '/createAuthor', component: CreateAuthor, name: 'createAuthor' },
    { path: '/editPost', component: EditPost, name: 'editPost' },
    { path: '/editAuthor', component: EditAuthor, name: 'editAuthor' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/admin', component: Admin, name: 'admin' },
    { path: '/posts', component: ListPosts, name: 'posts' },
    { path: '/authors', component: ListAuthors, name: 'authors' },
    { path: '/contacts', component: ListContacts, name: 'contacts' },
    { path: '/redirect', component: Redirect, name: 'redirect' },
    { path: '/404', component: Error, name: '404' },
];

export default routes;