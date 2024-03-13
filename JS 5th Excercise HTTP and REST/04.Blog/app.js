function attachEvents() {
    const buttonLoad = document.getElementById('btnLoadPosts');
    const selectPost = document.getElementById('posts');
    const buttonView = document.getElementById('btnViewPost');
    const postBody = document.getElementById('post-body')
    const postComment = document.getElementById('post-comments')
    const PostsURL = 'http://localhost:3030/jsonstore/blog/posts'
    const CommentsURL = 'http://localhost:3030/jsonstore/blog/comments'

    buttonLoad.addEventListener('click',loadPosts)
    buttonView.addEventListener('click',loadComments)

    let postOptions = []

    function loadPosts(){

        fetch(PostsURL)
            .then((res) => res.json())
            .then(data => {
                Object.entries(data).forEach(([key,value]) => {
                    let title = value.title
                    let newOption = document.createElement('option')
                    newOption.value = key
                    newOption.textContent = title
                    document.getElementById('posts').appendChild(newOption)

                    postOptions.push({title: value.title, body: value.body})
                })
            })
            .catch(e => console.error(e))
    }

    function loadComments(){
        fetch(CommentsURL)
            .then((res) => res.json())
            .then(data => {
                postComment.textContent = ''
                let comments = []

                document.getElementById('post-title').textContent = selectPost.selectedOptions[0].textContent
                
                const po = postOptions.filter(p => 
                    p.title === selectPost.selectedOptions[0].textContent);
                document.getElementById('post-body').innerHTML = `${po[0].body}`

                Object.entries(data).forEach(([key,value]) => {
                    if (value.postId == selectPost.value){
                        comments.push(value.text)
                    }
                })
                
                comments.forEach(el => {
                    let newComment = document.createElement('li')
                    newComment.textContent = el
                    postComment.appendChild(newComment)
                })
            })
    }
}

attachEvents();