const { Post } = require("../models");

const postData = [
	{
		title: 'Blog Post',
		content: 'This is a blog post.',
		user_id: 1,
	},
	{
		title: 'Blog Post',
		content: 'This is a blog post.',
		user_id: 2,
	},
	{
		title: 'Blog Post',
		content: 'This is a blog post.',
		user_id: 3,
	},
	{
		title: "Blog Post",
    content: "This is a blog post.",
		user_id: 4,
	},
	{
		title: 'Blog Post',
		content: 'This is a blog post.',
		user_id: 5,
	},
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
