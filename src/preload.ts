export const Preload = (list:string[]) => {
    for (const item of list) {
        try {
            require(item)
        } catch (err) {
     throw new Error(`Cannot find package ${item} `)       
        }
    }  
} 