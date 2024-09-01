import joyStickImage from "@assets/images/joystick.png";
import { ReactNode } from "react";
import { Helmet } from "react-helmet";

const POSTFIX_TITLE = "Mekasel | ";

const defaultProps = {
    title: "Mekasel",
    description:
        "Discover a wide range of products across all categories at Mekasel. Shop simple and fast with our user-friendly interface, tailored for those who love convenience and efficiency. Enjoy a seamless shopping experience with unbeatable deals and quick delivery!",
    authorName: "Mohamed Aly Ahmed",
    keywords: [
        "Mekasel",
        "Mekasel app",
        "shop simple",
        "all categories",
        "products",
        "online shopping",
    ],
    noIndex: false,
    favIcon: "",
    facebookData: {
        url: "",
        type: "",
        image: joyStickImage,
    },
    twitterData: {
        username: "@m7md_3ly",
        author: "Mohamed Aly Ahmed",
        largeCard: false,
        image: joyStickImage,
    },
    addPostFixTitles: true,
};

type SeoProps = {
    title?: string;
    description?: string;
    authorName?: string;
    keywords?: string[];
    noIndex?: boolean;
    link?: string;
    favIcon?: string;
    facebookData?: {
        url?: string;
        type?: string;
        image?: string;
    };
    twitterData?: {
        username?: string;
        author?: string;
        largeCard?: boolean;
        image?: string;
    };
    addPostFixTitles?: boolean;
    children?: ReactNode;
};

const Seo = ({
    title = defaultProps.title,
    description = defaultProps.description,
    authorName = defaultProps.authorName,
    keywords = defaultProps.keywords,
    noIndex = defaultProps.noIndex,
    link,
    favIcon = defaultProps.favIcon,
    facebookData = defaultProps.facebookData,
    twitterData = defaultProps.twitterData,
    addPostFixTitles = defaultProps.addPostFixTitles,
    children,
}: SeoProps) => {
    const metaTitle = addPostFixTitles ? POSTFIX_TITLE + title : title;
    const metaRobots = noIndex ? "noindex, nofollow" : "index, follow";
    const twitterCardType = twitterData?.largeCard
        ? "summary_large_image"
        : "summary";

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{metaTitle}</title>
            <meta name="description" content={description} />
            <meta name="author" content={authorName} />
            <meta name="keywords" content={keywords?.join(", ")} />
            <meta name="robots" content={metaRobots} />
            <link rel="canonical" href={link} />
            <link rel="icon" href={favIcon} />

            {/* Facebook tags */}
            <meta property="og:url" content={facebookData?.url} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={facebookData?.type} />
            <meta property="og:image" content={facebookData?.image} />

            {/* Twitter tags */}
            <meta name="twitter:site" content={twitterData?.username} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:creator" content={twitterData?.author} />
            <meta name="twitter:card" content={twitterCardType} />
            <meta name="twitter:image" content={twitterData?.image} />

            <meta name="referrer" content="origin-when-crossorigin" />

            {children}
        </Helmet>
    );
};

export default Seo;
