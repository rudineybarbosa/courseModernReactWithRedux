import './ImageList.css'
import React from "react";
import ImageCard from './ImageCard';

const ImageList = (props) => {
	const imagesURL = props.images.map( image => {
		return <ImageCard key={image.id} image={image} />
	})
	return <div className='image-list'>{imagesURL}</div>
}
export default ImageList;