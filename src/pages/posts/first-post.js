import Link from "next/link";
import Layout from "../../components/layout/layout";
import Head from "next/head";

const FirstPost = () => {

    return (
        <Layout>
            <Head>
                <title>Page one</title>
            </Head>
            <h1>First Post</h1>
            <h4>
                <Link href="/">Back to Home</Link>
            </h4>
        </Layout>

    );

}

export default FirstPost;