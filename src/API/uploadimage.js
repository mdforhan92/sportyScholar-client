export const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append('image', image);
    const apiKey = import.meta.env.VITE_IMGBB_KEY;
    const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;
    const response = await fetch(url, {
        method: 'POST',
        body: formData
    });
    const data = await response.json();
    return data;
};
