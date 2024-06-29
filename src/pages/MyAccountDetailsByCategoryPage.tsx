import { useCallback } from "react";
import { useAccountDetailsAPI, useDeleteAccountHistoryAPI } from "../api/Accounts/accounts";
import { Link, useNavigate, useParams } from "react-router-dom";
import Typography from "src/atoms/Typograpy";

type Props = {
    category: string;
}
const MyAccountDetailsByCategoryPage = ({
    category
}: Props) => {
    const { accountId } = useParams();
    const navigate = useNavigate();
    const { isLoading, data } = useAccountDetailsAPI(Number(accountId), category);
    const { mutate: deleteMutate } = useDeleteAccountHistoryAPI();

    const handleClick = () => {
        navigate(`details/add`);
    }

    const handleDelete = useCallback((id: number) => {
        deleteMutate({
            accountId: Number(accountId),
            historyId: id
        });
    }, [deleteMutate, accountId]);

    if (isLoading) {
        return <div>로딩중...</div>
    }

    if (!data) {
        return <div>데이터가 없습니다.</div>
    }

    return (
        <div style={{ padding: "4rem 2rem" }}>
            <Typography.Heading>{category} {data.ratio_investment}%</Typography.Heading>
            <Typography.SubHeading style={{ marginTop: "1rem" }}>{data.max_investment.toLocaleString()}원</Typography.SubHeading>
            <Typography.BodySmall style={{ marginTop: "0.5rem" }}>현재 잔고 {(data.max_investment - data.used_investment).toLocaleString()}원</Typography.BodySmall>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "5rem"
            }}>
                <Typography.Heading>상세내역</Typography.Heading>
                <Link to="details/add">
                    <Typography.Heading>+</Typography.Heading>
                </Link>
            </div>
            <div style={{ marginTop: "3rem" }}>
                {
                    data.history.map((data) => (
                        <div key={data.id} style={{
                            padding: "1rem 0.5rem 2rem 0.5rem",
                            borderBottom: "1px solid #e0e0e0"
                        }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography.BodyStrong>{data.name}</Typography.BodyStrong>
                                <Typography.BodyStrong>{data.amount.toLocaleString()}원</Typography.BodyStrong>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
                                <Typography.BodySmall>{data.content}</Typography.BodySmall>
                                <Typography.BodySmall>{data.amount.toLocaleString()}원</Typography.BodySmall>
                            </div>
                            <Typography.BodySmall style={{ marginTop: "2rem" }}>{data.createdAt.split(" ")[0]}</Typography.BodySmall>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MyAccountDetailsByCategoryPage