import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import GalleryCard from './GalleryCard';
import {CustomArrow} from './CustomArrow'
import './GallerySlide.css'



interface FormData {
    phrase: string;
    startYear: number;
    endYear: number
}

interface GallerySlideProps {
    data: FormData;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>; // Set loading state

}

// Manages the entire gallery slide, passing in formData and the loading state of the gallery page.
const GallerySlide: React.FC<GallerySlideProps> = ({ data, setLoading }) => {

    const navigate = useNavigate();


    const [images, setImages] = useState<any[]>([]);
    // Local loading state to for to help the "Loading..." text be displayed.
    const [loading, setLocalLoading] = useState(true); 



    // Async function to fetch images.
    const fetchImages = async () => {
        try {

            setLoading(true);
            setLocalLoading(true);

            const response = await axios.get('https://images-api.nasa.gov/search', {
                params: {
                    q: data.phrase,
                    media_type: 'image',
                    year_start: data.startYear,
                    year_end: data.endYear
                }
            });

            // Collection of images that meet the parameters or an empty collection.
            const items = response.data.collection.items;
            
        
            if (items.length === 0) {
                navigate('/', { state: { error: 'No images found for the given query. Try again.' } });
            } else {
                setImages(items || []);
            }

        }
        catch (error) {
            // Should output an error on screen later
            navigate('/', { state: { error: 'An error occurred while fetching data. Please try again later.' } });
        }
        finally {
            setLoading(false);
            setLocalLoading(false);
        }
    }

    // Fetch images from api when information is validated.
    useEffect(() => {
        if (data.phrase && data.startYear && data.endYear) {
            fetchImages();
        }
    }, [data.phrase, data.startYear, data.endYear, setLoading]);

    const sliderSettings = {
        dots: false,           // Don't show dots
        infinite: false,      // No infinite loop
        speed: 500,           // Moderate speed
        slidesToShow: 1,      // Display one slide at atime
        slidesToScroll: 1,    // Slide pace
        arrows: true,         // Enable arrows
        centerMode: false,    // Prevent centering multiple slides
        adaptiveHeight: true, // Adjust slider height based on content
        nextArrow: <CustomArrow direction="next" />,
        prevArrow: <CustomArrow direction="prev" />,
    };


    return (
        // Pass each image in the queried list of images to GalleryCard to create its own slide.
        <div className="slider-container">
            
            {loading ? (
                <p className="loading-text">Loading...</p> // Loading text
            ) : 
                <Slider {...sliderSettings}>
                    {images.map((image, index) => (
                        <div key={index} className="gallery-slide">
                            <GalleryCard image={image} />
                        </div>
                    ))}
                </Slider>
            }

            

        </div>

    );
    




}

export default GallerySlide;