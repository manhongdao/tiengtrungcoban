import React from 'react';
import Head from "next/head";
import PropTypes from "prop-types";

const SEOMetadata = (props) => {
    const {title, metaTitle, metaDescription, metaKeywords, disableCrawling, openGraphTitle,
        openGraphImage,
        openGraphUrl,
        openGraphDescription} = props;

    const url = openGraphUrl || '';

    return (
        <Head>
            <title>{title}</title>
            <meta name="title" content={metaTitle} />
            <meta name="description" content={metaDescription} />
            {metaKeywords && <meta name="keywords" content={metaKeywords} />}
            {disableCrawling && (
                <meta name="robots" content="noindex,nofollow" />
            )}
            <meta property="og:title" content={openGraphTitle || metaTitle} />
            <meta property="og:type" content="website" />
            {url && <meta property="og:url" content={url} />}
            <meta property="og:image" content={openGraphImage} />
            <meta
                property="og:description"
                content={openGraphDescription || metaDescription}
            />
        </Head>
    );
};

SEOMetadata.propTypes = {
    title: PropTypes.string,
    metaTitle: PropTypes.string,
    metaDescription: PropTypes.string,
    metaKeywords: PropTypes.string,
    disableCrawling: PropTypes.string,
    openGraphTitle: PropTypes.string,
    openGraphImage: PropTypes.string,
    openGraphUrl: PropTypes.string,
    openGraphDescription: PropTypes.string
};

export default SEOMetadata;
