import { defineStore } from 'pinia';

export const useHostNameStore = ('hostName', () => {

    const hostName = 'localhost';

    const get = () => {return hostName}

    return {get};
})