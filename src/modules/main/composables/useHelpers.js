const useHelpers = () => {



    return {
        transformTitle: ((title) => {
            if (title.includes('_')) {
                return title.replace('_', ' ')
            }
            return title.charAt(0).toUpperCase() + title.slice(1);
        })
    }
}
export default useHelpers   