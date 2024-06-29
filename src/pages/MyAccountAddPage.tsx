// 통장 추가 페이지

import { useCreateAccountAPI } from "../api/Accounts/accounts";

const MyAccountAddPage = () => {
    const { mutate } = useCreateAccountAPI();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const form = new FormData(e.target as HTMLFormElement);

        mutate({
            name: form.get("name") as string,
            source: form.get("source") as string,
            credit: Number(form.get("credit")),
            ratio_investment: Number(form.get("investment")),
            ratio_savings: Number(form.get("savings")),
            ratio_tithe: Number(form.get("tithe")),
            ratio_offering: Number(form.get("offering")),
            ratio_spending: Number(form.get("spending")),
            users_PK: 1
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">통장 이름</label>
                <input type="text" id="name" name="name" />
            </div>
            <div>
                <label htmlFor="source">출처</label>
                <input type="text" id="source" name="source" />
            </div>
            <div>
                <label htmlFor="credit">잔액</label>
                <input type="number" id="credit" name="credit" />
            </div>
            <div>
                <label htmlFor="investment">투자%</label>
                <input type="number" id="investment" name="investment" />
            </div>
            <div>
                <label htmlFor="savings">저축%</label>
                <input type="number" id="savings" name="savings" />
            </div>
            <div>
                <label htmlFor="tithe">십일조%</label>
                <input type="number " id="tithe" name="tithe" />
            </div>
            <div>
                <label htmlFor="offering">헌금%</label>
                <input type="number" id="offering" name="offering" />
            </div>
            <div>
                <label htmlFor="spending">지출%</label>
                <input type="number" id="spending" name="spending" />
            </div>
            <button type="submit">저장</button>
        </form>
    )
}

export default MyAccountAddPage