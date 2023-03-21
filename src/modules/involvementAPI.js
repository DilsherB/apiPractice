
const getLikes = async (url) => {
  try {
    const likesReceived = await fetch(url);
    const result = likesReceived.json();
    return result;
  } catch (error) {
    console.log('Error: ', error);
  }
}

export default getLikes;