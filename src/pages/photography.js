import { useEffect, useState } from "react";
import axios from 'axios'

const Photography = () => {

    const accessToken = '377789738543982|159bb0dfedf13fa068640df9cd2a929f'

    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://graph.instagram.com/v12.0/me?fields=id,username&access_token=${accessToken}`
                );

                setImageUrl(response.data.media_url);
            } catch (error) {
                console.error('Error fetching Instagram data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="container">
            <h1 className="header projHeader">Some of my clicks...</h1>
            <p className="subContent">
                Art, to me, is a kind of expression—a way of communicating one's
                perspective and way of thinking.
            </p>

            {imageUrl && <img src={imageUrl} alt="Instagram Post" />}

        </div>
    );
};

export default Photography;