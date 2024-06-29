export type CreateAccountsREQ = {
    name: string;
    source: string;
    credit: number;
    users_PK: number;
    ratio_investment: number;
    ratio_savings: number;
    ratio_offering: number;
    ratio_tithe: number;
    ratio_spending: number;
}


export type CreateAccountDetailsREQ = {
    accounts_PK: number;
    name: string;
    content: string;
    amount: number;
    ratio_catagory: string;
}


export type EditAccountDetailsREQ = CreateAccountDetailsREQ & {
    id: number;
}

export type DeleteAccountDetailsREQ = {
    accountId: number;
    historyId: number;
}