/** @jsx jsx */
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing";
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import { Link } from "gatsby";
import { jsx } from "theme-ui";
import { visuallyHidden } from "../styles/utils";

type PostsProps = {
  posts: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    description: string;
    timeToRead?: number;
    tags?: {
      name: string;
      slug: string;
    }[];
  }[];
  [key: string]: any;
};

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig();
  const { siteTitle } = useSiteMetadata();

  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <Title text="Posts">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all</Link>
      </Title>
      <Listing posts={posts} showTags={false} />
    </Layout>
  );
};

export default Homepage;
