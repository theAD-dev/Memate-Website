import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { slugTagsPost } from '../../api/blogAPI';

const NewsTagsComponents = () => {
    const { slug } = useParams();
    const [postTagsslug, setPostTagsslug] = useState(null);
    console.log('postTagsslug: ', postTagsslug);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTagsPosts = async () => {
            if (!slug) return;

            try {
                const response = await slugTagsPost(slug);
                setPostTagsslug(response);
            } catch (err) {
                console.error('Error fetching tag posts:', err);
                setError('Failed to fetch data. Please try again later.');
            }
        };

        fetchTagsPosts();
    }, [slug]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Tag Posts</h1>
            {postTagsslug.data ? (
                <ul>
                    {postTagsslug.data.map((post, index) => (
                        <li key={index}>{post.title}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default NewsTagsComponents;
