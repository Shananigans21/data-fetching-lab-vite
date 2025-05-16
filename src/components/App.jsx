import { useEffect, useState } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);

  // Function to fetch a random dog image
  const fetchDogImage = () => {
    setDogImage(null); // Clear image to trigger loading state
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => setDogImage(data.message))
      .catch((error) => console.error('Error fetching dog image:', error));
  };

  // Fetch dog image on component mount
  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      {/* Conditional rendering: show loading message or dog image */}
      {dogImage ? (
        <img src={dogImage} alt="A Random Dog" style={{ maxWidth: '300px' }} />
      ) : (
        <p>Loading...</p>
      )}

      {/* Button to fetch a new dog image */}
      <button onClick={fetchDogImage} style={{ marginTop: '1rem' }}>
        Fetch New Dog
      </button>
    </div>
  );
}

export default App;
