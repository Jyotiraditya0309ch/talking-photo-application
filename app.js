import axios from "axios";
import React, { useState } from "react";
import AvatarPreview from "./components/AvatarPreview";
import TextInput from "./components/TextInput";
import UploadPhoto from "./components/UploadPhoto";

const App = () => {
  const [photo, setPhoto] = useState(null);
  const [text, setText] = useState("");
  const [avatarSrc, setAvatarSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePhotoUpload = (file) => {
    setPhoto(file);
  };

  const handleTextSubmit = async (inputText) => {
    setIsLoading(true);
    setText(inputText);

    // Make API call to the Talking Avatar API
    const formData = new FormData();
    formData.append("image", photo);
    formData.append("text", inputText);

    try {
      const response = await axios.post("https://api.talking-avatar.com", formData);
      setAvatarSrc(response.data.avatarUrl);
    } catch (error) {
      console.error("Error generating avatar:", error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <h1>Talking Photo Application</h1>
      <UploadPhoto onPhotoUpload={handlePhotoUpload} />
      <TextInput onTextSubmit={handleTextSubmit} />
      <AvatarPreview avatarSrc={avatarSrc} isLoading={isLoading} />
    </div>
  );
};

export default App;
