// 나의 전체 통장을 확인하고 추가하거나 상세 통장 내역을 확인할 수 있는 페이지

import Typography from "src/atoms/Typograpy";
import { useAccountsAPI } from "../api/Accounts/accounts"
import { Link } from "react-router-dom"

const MyAccountsManagerPage = () => {
    const { isLoading, data } = useAccountsAPI();

    if (isLoading) {
        return <div>로딩중...</div>
    }

    if (!data) {
        return <div>데이터가 없습니다.</div>
    }

    return (
        <div style={{ padding: "4rem 2rem" }}>
            <Typography.Heading>총 자산</Typography.Heading>
            <Typography.SubHeading style={{ marginTop: "0.5rem" }}>{data.reduce((acc, account) => acc + account.credit, 0).toLocaleString()}원</Typography.SubHeading>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "5rem"
            }}>
                <Typography.Heading>나의 수입</Typography.Heading>
                <Link to="/my-accounts/add">
                    <Typography.Heading>+</Typography.Heading>
                </Link>
            </div>
            <div style={{ marginTop: "3rem" }}>
                {
                    data.map((account) => (
                        <div key={account.id} style={{
                            padding: "1rem 0.5rem 2rem 0.5rem",
                            borderBottom: "1px solid #e0e0e0"
                        }}>
                            <Link to={`/my-accounts/${account.id}`}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography.BodyStrong>{account.name}</Typography.BodyStrong>
                                    <Typography.BodyStrong>{account.credit.toLocaleString()}원</Typography.BodyStrong>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
                                    <Typography.BodySmall>{account.source}</Typography.BodySmall>
                                    <Typography.BodySmall>{account.credit.toLocaleString()}원</Typography.BodySmall>
                                </div>
                            </Link>
                            <Typography.BodySmall style={{ marginTop: "2rem" }}>{account.createdAt.split(" ")[0]}</Typography.BodySmall>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MyAccountsManagerPage