const posts = [
  { id: 1, title: '古い橋' },
  { id: 2, title: '新しい投稿' },
];

const comment = { postId: 2, content: 'イイね！' };

function postForComment(posts, comment) {
  return posts.find(function (post) {
    return post.id === comment.postId;
  });
}

console.log(postForComment(posts, comment));
