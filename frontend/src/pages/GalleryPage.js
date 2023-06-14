import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: "images/tahoe-hiking-joel.JPG",
        thumbnail: "images/tahoe-hiking-joel.JPG",
        description: "Hiking in Tahoe (2019)",
        originalHeight: '450px',
        
    },
    {
        original: "images/fishing-bass-joel.JPG",
        thumbnail: "images/fishing-bass-joel.JPG",
        description: "Joel reeled in a bass (2020)",
        originalHeight: '450px'
    },
    {
        original: "images/hawaii-joel-beach-waves.JPG",
        thumbnail: "images/hawaii-joel-beach-waves.JPG",
        description: "Joel looking off into the ocean in Hawaii (2017)",
        originalHeight: '450px'
    },
    {
        original: "images/outside-tree-hugging-joel-tahoe.jpg",
        thumbnail: "images/outside-tree-hugging-joel-tahoe.jpg",
        description: "Joel hugging a fallen tree in Tahoe (2020)",
        originalHeight: '450px'
    },
    {
        original: "images/waterfall-ziplining-hawaii-joel.JPG",
        thumbnail: "images/waterfall-ziplining-hawaii-joel.JPG",
        description: "Portrait in front of waterfall after zipling in Hawaii (2017)",
        originalHeight: '450px'
    },
    {
        original: "images/wakeboarding-jump-joel.PNG",
        thumbnail: "images/wakeboarding-jump-joel.PNG",
        description: "Joel and friend wakeboarding stunt (2017)",
        originalHeight: '450px'
    },
    {
        original: "images/drawing-art-skull-wine-pear-textures-joel.JPG",
        thumbnail: "images/drawing-art-skull-wine-pear-textures-joel.JPG",
        description: "Drawing of different textured objects (2017)",
        originalHeight: '450px'
    },
    {
        original: "images/drawing-art-joel-selfie.JPG",
        thumbnail: "images/drawing-art-joel-selfie.JPG",
        description: "Drawing of Joel (2017)",
        originalHeight: '450px'
    },
    {
        original: "images/skateboarding-joel-night-kickflip.jpg",
        thumbnail: "images/skateboarding-joel-night-kickflip.jpg",
        description: "Joel skateboarding with friend (2017)",
        originalHeight: '450px'
    },
    {
        original: "images/nephew-joel-baby.JPG",
        thumbnail: "images/nephew-joel-baby.JPG",
        description: "Funny photograph of Joel's nephew (2020)",
        originalHeight: '450px'
    },
]

function GalleryPage() {
    return (
        <>
            
            <h2>Gallery</h2>
            <article>
                <ImageGallery items={images}/>
            </article>
            
        </>
    );
}

export default GalleryPage;