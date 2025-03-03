import React, { useState } from 'react';
import axios from 'axios';
import './ImageEnhancer.css';

const ImageEnhancer = () => {
  const [selectedImage, setSelectedImage] = useState(null); // Store the uploaded image
  const [enhancedImage, setEnhancedImage] = useState(null); // Store the enhanced image
  const [loading, setLoading] = useState(false); // Loading state for processing

  // Handle file input change
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // Handle image enhancement
  const enhanceImage = async () => {
    if (!selectedImage) {
      alert('Please upload an image first!');
      return;
    }

    setLoading(true);
    try {
      // Replace with your API endpoint or processing logic
      const formData = new FormData();
      formData.append('image', selectedImage);

      const response = await axios.post('/api/enhance-image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setEnhancedImage(response.data.enhancedImageUrl); // Assuming API returns the enhanced image URL
    } catch (error) {
      console.error('Error enhancing image:', error);
      alert('Failed to enhance the image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-enhancer">
      <h1>Image Enhancer</h1>
      <div className="image-upload">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {selectedImage && (
          <div className="image-preview">
            <h3>Original Image:</h3>
            <img src={selectedImage} alt="Selected" />
          </div>
        )}
      </div>
      <button onClick={enhanceImage} disabled={loading}>
        {loading ? 'Enhancing...' : 'Enhance Image'}
      </button>
      {enhancedImage && (
        <div className="image-preview">
          <h3>Enhanced Image:</h3>
          <img src={enhancedImage} alt="Enhanced" />
        </div>
      )}
    </div>
  );
};

export default ImageEnhancer;
