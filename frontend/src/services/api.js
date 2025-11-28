const API_URL = 'http://localhost:8005/api/portfolio';

// export const getPortfolioData = async () => {
//     try {
//         const response = await fetch(API_URL);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching portfolio data:', error);
//         return null;
//     }
// };

export const getPortfolioData = async () => {
    try {
        const response = await fetch('/content.json'); 
        return await response.json();
    } catch (error) {
        console.error("Error loading portfolio JSON:", error);
        return null;
    }
};
