import axios, {AxiosPromise} from "axios"
import {HairData} from "../interface/HairData.ts";
import {useQuery} from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';
const fetchData = async (): AxiosPromise<HairData[]> => {
    const response = axios.get(API_URL + '/hair');
    return response;
}
export function useHairData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['hair-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}