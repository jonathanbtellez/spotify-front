import ResourcesApi from "@/api/ResourcesApi";

const useImage = () => {
    const getUrlImage = async (path) => {
        try {
            const { data } = await ResourcesApi.get(`/images/${path}`, { responseType: 'arraybuffer' })
            let imageUrl = null
            const blob = new Blob([data]);
            imageUrl = URL.createObjectURL(blob);
            // Now, you can use `imageUrl` to display the image in your Vue component
            return imageUrl
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    }

    return {
        getUrlImage
    }

}

export default useImage