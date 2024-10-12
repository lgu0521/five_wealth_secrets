export type MyAccountsCalendarRES = {
    month: string;
    total_credit: number;
}

export type MyAccountsRES = {
    id: number;
    name: string;
    source: string;
    credit: number;
    debit: number;
    createdAt: string;
    updatedAt: string;
}

export type RatioOfAccountsRES = {
    id: number,
    credit: number,
    ratio_investment: number,
    ratio_savings: number,
    ratio_offering: number,
    ratio_tithe: number,
    ratio_spending: number,
    max_investment: number,
    max_savings: number,
    max_offering: number,
    max_tithe: number,
    max_spending: number,
    used_investment: number,
    used_savings: number,
    used_offering: number,
    used_tithe: number,
    used_spending: number,
    total_used: number
}

export type AccountDetailsRES = {
    id: number;
    ratio_investment: number;
    max_investment: number;
    used_investment: number;
    history: PaymentHistoryRES[];
}

export type AccountDetailsHistoryRES = {
    accounts_PK: number;
    name: string;
    content: string;
    amount: number;
    ratio_catagory: string;
    createdAt: string;
    updatedAt: string;
}

export type PaymentHistoryRES = {
    id: number;
    name: string,
    content: string,
    amount: number,
    createdAt: string;
    updatedAt: string;
}