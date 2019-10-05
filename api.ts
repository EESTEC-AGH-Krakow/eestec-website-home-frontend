interface Post {
	author: string,
	date: Date, // dd.mm.rrrr hh:mm
	title: string,
	body: HTMLDocument,
	mainImage: Blob | string
}

interface Posts {
	posts: Post[]
}
