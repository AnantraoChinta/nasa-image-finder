import React, { useState } from 'react';
import upArrow from "../../assets/triangle-up.png";
import downArrow from "../../assets/triangle-down.png";
import './LandingPage.css';
import { useLocation, useNavigate } from 'react-router-dom';



interface FormData {
    phrase: string;
    startYear: number;
    endYear: number;
  }
  
  

const LandingPage: React.FC = () => {
    const years = Array.from({ length: 105 }, (_, i) => 1920 + i); // Generate years 1920-2024

    const navigate = useNavigate();
    const location = useLocation();
    const errorMessage = (location.state as { error?: string })?.error;

    // const [errorMessage, setErrorMessage] = useState<string | null>(null); // Error state


    const [formData, setFormData] = React.useState<FormData>({
        phrase: '',
        startYear: 1920,
        endYear: 2024
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,        // Updates value in form
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // // Validate the input
        // if (!formData.phrase.trim()) {
        //     errorMessage = 'Please enter a search phrase.');
        //     return;
        // }

        // // Clear any existing error messages
        // setErrorMessage(null);

        // Navigate to the DisplayPage with the formData
        navigate('/display', { state: { formData } });
            
    };
    
    return (
        // Start Display Container 
        <div className="search-container">
        
            {/* Website Header containing "NASA Image Search" */}
            <div className="header-box">
                <h1>
                    NASA Image Search
                </h1>
            </div>

            {/* Start Form for Querying */}
            <form onSubmit={handleSubmit} className="query-form">

                {/* Start Search Bar */}
                <div className="search-bar">
                    <input 
                        type="text" 
                        name="phrase"
                        placeholder="Enter in phrase" 
                        value={formData.phrase}
                        onChange={handleChange}
                        required
                        />
                </div>
                {/* End Search Bar */}
                

                {/* Start Year Dropdowns */}
                <div className="year-range-container">

                    <div className="range-text">
                    
                        <h2>
                            Select Year Range:
                        </h2>
                    </div>

                    <div className="custom-dropdown">
                        <select 
                        id="year-start" 
                        name="startYear" 
                        value={formData.startYear} 
                        onChange={handleChange}>
                            {years.map((year) => (
                                
                                <option key={year} value={year}> {year} </option> 

                            ))}
                        </select>

                        <div className="drop-arrows">
                            <img src={upArrow} alt="Up" className="triangle-up" />
                            <img src={downArrow} alt="Down" className="triangle-down" />
                        </div>

                    </div>


                    <div className="custom-dropdown">

                        <select 
                        id="year-end" 
                        name="endYear" 
                        value={formData.endYear}
                        onChange={handleChange}>
                            {years.map((year) => (
                                    
                                <option key={year} value={year}> {year} </option> 

                            ))}
                        </select>

                        <div className="drop-arrows">
                            <img src={upArrow} alt="Up" className="triangle-up" />
                            <img src={downArrow} alt="Down" className="triangle-down" />
                        </div>
                        
                    </div>

                </div>
                {/* End Year Dropdowns */}

                {/* Display Error Message */}
                {errorMessage && <p className="error-text">{errorMessage}</p>}

                {/* Start Search! Button */}
                <div className="search-button">
                    <input type="submit" value="Search!" />
                </div>
                {/* End Search! Button */}

            </form>
            {/* End Form for Querying */}
            
        </div>

        // End Display Container

    );
    
}

export default LandingPage;
