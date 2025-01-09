import "./GalleryCard.css";


interface GalleryCardProps {
    image: any;
}

// Pass in each individual image from the image collection queried as a prop.
const GalleryCard: React.FC<GalleryCardProps> = ({ image }) => {

    // Format fetched data into "Month Day, Year"
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (

        <div className="gallery">

            <div className="left-half">
                <h1>{image.data[0]?.title}</h1>
                <img 
                    src={image.links[0]?.href} 
                    alt={image.data[0]?.title || 'Image'} 
                />
                <h2>
                    {formatDate(image.data[0]?.date_created)}
                </h2>
            </div>

            <div className="divider">
            </div>

            <div className="right-half">
                <div className="scrollable-text">
                    {image.data[0]?.description || "No description available."}
                </div>
            </div>
        </div>
                
           

    );

};

export default GalleryCard;