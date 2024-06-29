// 통장 추가 페이지

import { useParams } from "react-router-dom";
import { useCreateAccountDetailsAPI } from "../api/Accounts/accounts";

const MyAccountDetailsAddPage = () => {
    const { accountId, category } = useParams();
    const { mutate } = useCreateAccountDetailsAPI();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const form = new FormData(e.target as HTMLFormElement);

        mutate({
            accounts_PK: Number(accountId),
            name: form.get("name") as string,
            content: form.get("content") as string,
            amount: Number(form.get("amount")),
            ratio_catagory: form.get("ratio_catagory") as string
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">이름</label>
                <input type="text" id="name" name="name" />
            </div>
            <div>
                <label htmlFor="content">상세내용</label>
                <input type="text" id="content" name="content" />
            </div>
            <div>
                <label htmlFor="amount">금액</label>
                <input type="number" id="amount" name="amount" />
            </div>
            <div>
                <select id="ratio_catagory" name="ratio_catagory" defaultValue={category || "spending"}>
                    <option value="investment">투자</option>
                    <option value="savings">저축</option>
                    <option value="tithe">십일조</option>
                    <option value="offering">헌금</option>
                    <option value="spending">지출</option>
                </select>
            </div>
            <button type="submit">저장</button>
        </form>
    )
}

export default MyAccountDetailsAddPage