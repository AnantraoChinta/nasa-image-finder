import React, { useState } from 'react';
import BackButton from "./BackButton";
import { useLocation } from 'react-router-dom';
import GallerySlide from './GallerySlide';
import "./DisplayPage.css";

interface FormData {
    phrase: string,
    startYear: number,
    endYear: number
}

const DisplayPage: React.FC = () => {

    const location = useLocation();
    const formData = (location.state as { formData: FormData }).formData;

    // formData consists of the populated form with information to be passed into NASA API.
    // const formData = location.state as FormData;
    // Track loading state
    const [loading, setLoading] = useState<boolean>(true); 


    return (

        <div className="gallery-container">
            
            {/* Back button to return to the landing page. */}
            <div className="button-container">
                <BackButton loading={loading} />
            </div>
                    
            {/* Pass form information and loading state to GallerySlide to filter images
            and determine whether the display page is still loading. */}
            <GallerySlide data={formData} setLoading={setLoading} />
        </div>

    );
};

export default DisplayPage;
