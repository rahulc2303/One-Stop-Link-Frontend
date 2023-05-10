export const getImageFromBackend = (fileName) => {
    const backendUrl = process.env.NODE_ENV === 'production' ? "https://one-stop-link-backend.onrender.com" : "http://localhost:5000"
    return `${backendUrl}/uploads/${fileName}`
}