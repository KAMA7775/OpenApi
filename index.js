const BASE_URL = 'https://jsonplaceholder.typicode.com';

document.getElementById('loadPosts').addEventListener('click', async () => {
    try {
        const response = await axios.get(`${BASE_URL}/posts`);
        const postsList = document.getElementById('postsList');
        postsList.innerHTML = '';
        response.data.forEach(post => {
            const listItem = document.createElement('li');
            listItem.textContent = post.title;
            postsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Ошибка :', error);
    }
});


document.getElementById('createPost').addEventListener('click', async () => {
    const newPost = {
        title: 'Моя первая запись',
        body: 'Это содержимое записи',
        userId: 1,
    };
    try {
        const response = await axios.post(`${BASE_URL}/posts`, newPost);
        const newPostResponse = document.getElementById('newPostResponse');
        newPostResponse.innerHTML = `<li>Созданная запись: ${response.data.title}</li>`;
    } catch (error) {
        console.error('Ошибка:', error);
    }
});


document.getElementById('updatePost').addEventListener('click', async () => {
    const updatedPost = {
        title: 'Обновленная запись',
        body: 'Это обновленное содержимое',
        userId: 1,
    };
    try {
        const response = await axios.put(`${BASE_URL}/posts/1`, updatedPost); // обновление поста с ID 1
        const updatePostResponse = document.getElementById('updatePostResponse');
        updatePostResponse.innerHTML = `<li>Обновленная запись: ${response.data.title}</li>`;
    } catch (error) {
        console.error('Ошибка :', error);
    }
});

document.getElementById('deletePost').addEventListener('click', async () => {
    try {
        const response = await axios.delete(`${BASE_URL}/posts/1`);
        const deletePostResponse = document.getElementById('deletePostResponse');
        deletePostResponse.innerHTML = '<li>Запись удалена успешно.</li>';
    } catch (error) {
        console.error('Ошибка :', error);
    }
});

