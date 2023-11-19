export const getBaseUrl = ():string => {
    
    return process.env.NEXT_PUBLIC_API_BASE_URL || "https://wayfarer-travel-backend.vercel.app/api/v1"
}