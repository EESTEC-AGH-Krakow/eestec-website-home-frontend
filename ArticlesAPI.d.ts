interface Post {
	author: string,
	date: Date,
	title: string,
	body: HTMLDocument | string,
	mainImage: Blob | string
}

interface TruncatedPost extends Post {
	body: string // limited
}

interface Posts {
	posts: Post[]
}

interface TruncatedPosts {
	posts: TruncatedPosts[]
}
