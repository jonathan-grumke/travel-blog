import { getCollection } from "astro:content";
import "./BlogPosts.css"

const BlogPosts = async ({ collection, directory, numberOfPosts }) => {
    const posts = (await getCollection(collection)).sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    ).slice(0, numberOfPosts);

    return (
        <>
            <section>
                <h3 style={{ marginBottom: "20px", marginTop: "40px" }}>Du hast unsere letzten Weekly Updates noch nicht gelesen?</h3>
                <ul>
                    {
                        posts.map((post) => (
                            <li>
                                <a href={`/${directory}/${post.id}/`}>
                                    <img
                                        width={720}
                                        height={360}
                                        src={post.data.heroImage}
                                        alt=""
                                    />
                                    <h4 class="title">{post.data.title}</h4>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </>
    )


}

export default BlogPosts;