import axios, {AxiosPromise} from "axios"
import {HairData} from "../interface/HairData.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';
const postData = async (data: HairData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/hair', data);
    return response;
}
export function useHairDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['hair-data'])
        }
    })

    return mutate;
}