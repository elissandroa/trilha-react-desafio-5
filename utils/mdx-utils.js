import { api } from '../services/api';
export const getPosts = async () => {
    const { data } = await api.get('/posts');
    if(data) {
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
    const  posts = await api.get(`posts?${id}`);
    const  data = posts.data.filter(post => post.id === id);

    if (data){
        return data[0];
    }
    
        return {title: "Dados inválidos !"}
    }