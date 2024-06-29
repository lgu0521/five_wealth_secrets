// 나의 전체 통장을 확인하고 추가하거나 상세 통장 내역을 확인할 수 있는 페이지

import Typography from "src/atoms/Typograpy";
import { useRatioOfAccountsAPI } from "../api/Accounts/accounts";
import { Link, useParams } from "react-router-dom"

const MyAccountDetailsPage = () => {
    const { accountId } = useParams();
    const { isLoading, data } = useRatioOfAccountsAPI(Number(accountId));

    if (isLoading) {
        return <div>로딩 중...</div>
    }

    if (!data) {
        return <div>통장 정보가 없습니다.</div>
    }

    return (
        <div style={{ padding: "4rem 2rem" }}>
            <Typography.Heading>총 자산</Typography.Heading>
            <Typography.SubHeading style={{ marginTop: "0.5rem" }}>5,500,000원</Typography.SubHeading>
            <Typography.Heading style={{ marginTop: "5rem" }}>현재 총 잔고</Typography.Heading>
            {/* <h2>{data.credit.toLocaleString()} / {data.total_used.toLocaleString()}</h2> */}
            <div style={{ marginTop: "3rem" }}>
                <Link to={`/my-accounts/${accountId}/investment`}>
                    <div style={{
                        padding: "1rem 0.5rem 2rem 0.5rem",
                        borderBottom: "1px solid #e0e0e0"
                    }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography.BodyStrong>투자</Typography.BodyStrong>
                            <Typography.BodyStrong>{data.max_investment.toLocaleString()}원</Typography.BodyStrong>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
                            <Typography.BodySmall>{data.ratio_investment}%</Typography.BodySmall>
                            <Typography.BodySmall>{(data.max_investment - data.used_investment).toLocaleString()}원</Typography.BodySmall>
                        </div>
                    </div>
                </Link>
                <Link to={`/my-accounts/${accountId}/savings`}>
                    <div style={{
                        padding: "1rem 0.5rem 2rem 0.5rem",
                        borderBottom: "1px solid #e0e0e0"
                    }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography.BodyStrong>저축</Typography.BodyStrong>
                            <Typography.BodyStrong>{data.max_savings.toLocaleString()}원</Typography.BodyStrong>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
                            <Typography.BodySmall>{data.ratio_savings}%</Typography.BodySmall>
                            <Typography.BodySmall>{(data.max_savings - data.used_savings).toLocaleString()}원</Typography.BodySmall>
                        </div>
                    </div>
                </Link>
                <Link to={`/my-accounts/${accountId}/tithe`}>
                    <div style={{
                        padding: "1rem 0.5rem 2rem 0.5rem",
                        borderBottom: "1px solid #e0e0e0"
                    }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography.BodyStrong>십일조</Typography.BodyStrong>
                            <Typography.BodyStrong>{data.max_tithe.toLocaleString()}원</Typography.BodyStrong>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
                            <Typography.BodySmall>{data.ratio_tithe}%</Typography.BodySmall>
                            <Typography.BodySmall>{(data.max_tithe - data.used_tithe).toLocaleString()}원</Typography.BodySmall>
                        </div>
                    </div>
                </Link>
                <Link to={`/my-accounts/${accountId}/offering`}>
                    <div style={{
                        padding: "1rem 0.5rem 2rem 0.5rem",
                        borderBottom: "1px solid #e0e0e0"
                    }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography.BodyStrong>헌금</Typography.BodyStrong>
                            <Typography.BodyStrong>{data.max_offering.toLocaleString()}원</Typography.BodyStrong>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
                            <Typography.BodySmall>{data.ratio_offering}%</Typography.BodySmall>
                            <Typography.BodySmall>{(data.max_offering - data.used_offering).toLocaleString()}원</Typography.BodySmall>
                        </div>
                    </div>
                </Link>
                <Link to={`/my-accounts/${accountId}/spending`}>
                    <div style={{
                        padding: "1rem 0.5rem 2rem 0.5rem",
                        borderBottom: "1px solid #e0e0e0"
                    }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography.BodyStrong>지출</Typography.BodyStrong>
                            <Typography.BodyStrong>{data.max_spending.toLocaleString()}원</Typography.BodyStrong>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
                            <Typography.BodySmall>{data.ratio_spending}%</Typography.BodySmall>
                            <Typography.BodySmall>{(data.max_spending - data.used_spending).toLocaleString()}원</Typography.BodySmall>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MyAccountDetailsPage