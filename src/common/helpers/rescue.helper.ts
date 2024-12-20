export const rescue = async<T> (args: Function): Promise<T> => {
    try {
        return await args();
    } catch (error) {
        console.log(error);
        // check if db error 
        if(error instanceof Error) {
            throw error;
        }
    }
};