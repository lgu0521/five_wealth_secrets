// 나의 전체 통장을 확인하고 추가하거나 상세 통장 내역을 확인할 수 있는 페이지

import Typography from "src/atoms/Typograpy";
import { useMyCalenderAPI } from "../api/Accounts/accounts"
import { Link } from "react-router-dom"

const MyAccountsCalendarPage = () => {
    const { isLoading, data } = useMyCalenderAPI();

    if (isLoading) {
        return <div>로딩중...</div>
    }

    if (!data) {
        return <div>데이터가 없습니다.</div>
    }

    return (
        <div style={{ padding: "4rem 2rem" }}>
            <Typography.Heading>캘린더</Typography.Heading>
            <div style={{ marginTop: "5rem" }}>
                {
                    data.map((account) => (
                        <div key={account.month} style={{
                            padding: "1rem 0.5rem 2rem 0.5rem",
                            borderBottom: "1px solid #e0e0e0"
                        }}>
                            <Link to={`/${account.month}`}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography.BodyStrong>{account.month}</Typography.BodyStrong>
                                    <Typography.BodyStrong>{Number(account.total_credit).toLocaleString()}원</Typography.BodyStrong>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MyAccountsCalendarPage