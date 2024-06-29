import axios from "axios";
import { UseMutationResult, UseQueryResult, useMutation, useQuery, useQueryClient } from "react-query";
import { AccountDetailsHistoryRES, AccountDetailsRES, MyAccountsRES, RatioOfAccountsRES } from "./res.type";
import { CreateAccountDetailsREQ, CreateAccountsREQ, DeleteAccountDetailsREQ, EditAccountDetailsREQ } from "./req.type";
import { API_DEFAULT_DTO } from "../api.type";

export const useAccountsAPI = (): UseQueryResult<MyAccountsRES[], Error> => {
    const fetch = async () => {
        const res = await axios.get("http://localhost:8000/my/accounts/");
        return res.data.data;
    }

    return useQuery(["my", "accounts"], fetch);
}


export const useRatioOfAccountsAPI = (accountId: number): UseQueryResult<RatioOfAccountsRES, Error> => {
    const fetch = async () => {
        const res = await axios.get(`http://localhost:8000/my/accounts/${accountId}`);
        return res.data.data;
    }

    return useQuery(["my", "accounts", "ratio"], fetch, {
        enabled: !!accountId
    });
}


export const useAccountDetailsAPI = (accountId: number, catagory: string): UseQueryResult<AccountDetailsRES, Error> => {
    const fetch = async () => {
        const res = await axios.get(`http://localhost:8000/my/accounts/${accountId}/${catagory}`);
        return res.data.data;
    }

    return useQuery(["my", "accounts", catagory], fetch);
}

export const useAccountDetailsHistoryAPI = (accountId: number, historyId: number): UseQueryResult<AccountDetailsHistoryRES, Error> => {
    const fetch = async () => {
        const res = await axios.get(`http://localhost:8000/my/accounts/${accountId}/details/${historyId}`);
        return res.data.data;
    }

    return useQuery(["my", "accounts", "details", historyId], fetch, {
        enabled: !!historyId && !!accountId

    });
}


export const useDeleteAccountHistoryAPI = (): UseMutationResult<API_DEFAULT_DTO<null>, Error, DeleteAccountDetailsREQ> => {
    const queryClient = useQueryClient();

    const fetch = async (data: DeleteAccountDetailsREQ) => {
        const res = await axios.delete(`http://localhost:8000/my/accounts/${data.accountId}/details/${data.historyId}`);
        return {
            status: res.data.status,
            data: null,
            message: res.data.message
        }
    }

    return useMutation(fetch, {
        onSuccess: () => {
            window.location.reload();
        }
    });
}

export const useCreateAccountAPI = (): UseMutationResult<API_DEFAULT_DTO<{ id: string }>, Error, CreateAccountsREQ> => {
    const fetch = async (data: CreateAccountsREQ) => {
        const res = await axios.post("http://localhost:8000/my/accounts/add", data, {
            headers: {
                "Content-Type": "application/json"
            }

        });
        return {
            status: res.data.status,
            data: res.data.data,
            message: res.data.message
        }
    }

    return useMutation(fetch);
}


export const useCreateAccountDetailsAPI = (): UseMutationResult<API_DEFAULT_DTO<{ id: string }>, Error, CreateAccountDetailsREQ> => {
    const fetch = async (data: CreateAccountDetailsREQ) => {
        const res = await axios.post(`http://localhost:8000/my/accounts/${data.accounts_PK}/details/add`, data, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return {
            status: res.data.status,
            data: res.data.data,
            message: res.data.message
        }
    }

    return useMutation(fetch);
}

export const useEditAccountDetailsHistoryAPI = (): UseMutationResult<API_DEFAULT_DTO<{ id: string }>, Error, EditAccountDetailsREQ> => {
    const fetch = async (data: EditAccountDetailsREQ) => {
        const res = await axios.post(`http://localhost:8000/my/accounts/${data.accounts_PK}/details/${data.id}`, data, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return {
            status: res.data.status,
            data: res.data.data,
            message: res.data.message
        }
    }

    return useMutation(fetch);
}