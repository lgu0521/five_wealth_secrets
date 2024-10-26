import styled from 'styled-components';
import MYSRT from './my_srt2.png';
import ArrowLeftIcon from './arrow_left.svg';
import RoundArrowRightImg from './round_arrow_right.png';
import RoundArrowRightUseingImg from './srt_useing.png';
import ChangeImg from './change.png';
import NotUsedSrtImg from './srt_not_used.png'
import UsedSrt from './srt_used.png'
import QrCodeImg from './qr_code.png'
import InfiniteLogoCarousel from './InfiniteLogoCarousel';
import Used615Srt from './srt_615_used.png';
const MySrt = () => {
    return (
        // <img src={MYSRT} alt="MySrt" width="100%" height="100%"/>
        <PageWrapper>
            <PageHeader>
                <ArrowLeftIconImg src={ArrowLeftIcon} alt='arrow_left' />
                <Typography20 fontWeight={500}>회수승차권</Typography20>
                <div></div>
            </PageHeader>
            <PageBody>
                <Table>
                    <TableHeader>
                        <Typography16 fontWeight={700} color="#ffffff">2024년 10월 10일 ~ 2024년 11월 09일</Typography16>
                    </TableHeader>
                    <TableBody>
                        <Frame1Wrapper>
                            <Typography16 color="#666666" fontWeight={500} style={{ marginRight: "0.2rem" }}>잔여횟수</Typography16>
                            <Badge style={{ marginRight: "0.7rem" }}>4회</Badge>
                            <Typography12 color="#333333">승차 전 횟수차감 해주세요.</Typography12>
                        </Frame1Wrapper>
                        <Line style={{ marginTop: "0.5rem" }} />
                        <Frame2Wrapper style={{ padding: "1.5rem 0" }}>
                            <Typography28 style={{ marginRight: "1rem" }}>광주송정</Typography28>
                            <ChangeImgWrapper src={ChangeImg} alt='round_arrow_right' style={{ marginRight: "3.6rem" }} />
                            <Typography28>동탄</Typography28>
                        </Frame2Wrapper>
                        <Line />
                        <Frame1Wrapper gap={0.3} style={{ padding: "0.9rem 0" }}>
                            <Typography14 color="#8F3575" fontWeight={600} ls={-1}>SRT 606</Typography14>
                            <Typography14 color="#292929">광주송정(07:54)</Typography14>
                            <RoundArrowRightIconImg src={RoundArrowRightImg} alt='round_arrow_right' />
                            <Typography14 color="#292929">동탄(09:37)</Typography14>
                        </Frame1Wrapper>
                        <Line />
                        <Frame1Wrapper gap={0.3} style={{ padding: "0.9rem 0" }}>
                            <Typography14 color="#8F3575" fontWeight={600} ls={-1}>SRT 615</Typography14>
                            <Typography14 color="#292929">동탄(18:22)</Typography14>
                            <RoundArrowRightIconImg src={RoundArrowRightImg} alt='round_arrow_right' />
                            <Typography14 color="#292929">광주송정(19:54)</Typography14>
                        </Frame1Wrapper>
                        <Line />
                        <Frame3Wrapper>
                            <ColumnBox gap={0.5} ai="center" jc="center">
                            <div style={{padding: "6px 3px 6px 0px"}}>
                                <UsedSrtWrapper src={UsedSrt} alt='not_used_srt' />
                                </div>
                                <ColumnBox gap={0.1} ai="center">
                                    <Typography12 fontWeight={500} color="#333333">20241011</Typography12>
                                    <Typography12 fontWeight={500} color="#333333">07:35:46</Typography12>
                                </ColumnBox>
                            </ColumnBox>
                            <ColumnBox gap={0.5} ai="center" jc="center">
                            <div style={{padding: "6px 3px 6px 0px"}}>
                                <UsedSrtWrapper src={Used615Srt} alt='not_used_srt' />
                                </div>
                                <ColumnBox gap={0.1} ai="center">
                                    <Typography12 fontWeight={500} color="#333333">20241013</Typography12>
                                    <Typography12 fontWeight={500} color="#333333">07:40:05</Typography12>
                                </ColumnBox>
                            </ColumnBox>
                            <ColumnBox gap={0.5} ai="center" jc="center">
                            <div style={{padding: "6px 3px 6px 0px"}}>
                                <UsedSrtWrapper src={UsedSrt} alt='not_used_srt' />
                                </div>
                                <ColumnBox gap={0.1} ai="center">
                                    <Typography12 fontWeight={500} color="#333333">20241016</Typography12>
                                    <Typography12 fontWeight={500} color="#333333">07:25:01</Typography12>
                                </ColumnBox>
                            </ColumnBox>
                            <ColumnBox gap={0.5} ai="center" jc="center">
                            <div style={{padding: "6px 3px 6px 0px"}}>
                                <UsedSrtWrapper src={Used615Srt} alt='not_used_srt' />
                                </div>
                                <ColumnBox gap={0.1} ai="center">
                                    <Typography12 fontWeight={500} color="#333333">20241016</Typography12>
                                    <Typography12 fontWeight={500} color="#333333">15:04:35</Typography12>
                                </ColumnBox>
                            </ColumnBox>
                            <ColumnBox gap={0.5} ai="center" jc="center">
                            <div style={{padding: "6px 3px 6px 0px"}}>
                                <UsedSrtWrapper src={UsedSrt} alt='not_used_srt' />
                                </div>
                                <ColumnBox gap={0.1} ai="center">
                                    <Typography12 fontWeight={500} color="#333333">20241019</Typography12>
                                    <Typography12 fontWeight={500} color="#333333">07:35:38</Typography12>
                                </ColumnBox>
                            </ColumnBox>
                            <ColumnBox gap={0.5} ai="center" jc="center">
                            <div style={{
                                background: "#4C3049",
                                padding: "6px 3px 6px 0px",
                                borderRadius: "2px"
                            }}>
                                <UseingSrtWrapper src={RoundArrowRightUseingImg} alt='useing_srt' />
                                </div>
                                <ColumnBox gap={0.1} ai="center">
                                    <Typography12 fontWeight={500} color="#5F1D4A">20241027</Typography12>
                                    <Typography12 fontWeight={500} color="#5F1D4A">07:44:18</Typography12>
                                </ColumnBox>
                            </ColumnBox>
                            <ColumnBox gap={0.9} ai="center" jc="center">
                                <NotUsedSrtImgWrapper src={NotUsedSrtImg} alt='not_used_srt' />
                                <ColumnBox gap={0.1} ai="center">
                                    <Typography12 fontWeight={500} ls={-0.1} color="#5F1D4A">사용가능</Typography12>
                                </ColumnBox>
                            </ColumnBox>
                            <ColumnBox gap={0.9} ai="center" jc="center">
                                <NotUsedSrtImgWrapper src={NotUsedSrtImg} alt='not_used_srt' />
                                <ColumnBox gap={0.1} ai="center">
                                    <Typography12 fontWeight={500} ls={-0.1} color="#5F1D4A">사용가능</Typography12>
                                </ColumnBox>
                            </ColumnBox>
                            <ColumnBox gap={0.9} ai="center" jc="center">
                                <NotUsedSrtImgWrapper src={NotUsedSrtImg} alt='not_used_srt' />
                                <ColumnBox gap={0.1} ai="center">
                                    <Typography12 fontWeight={500} ls={-0.1} color="#5F1D4A">사용가능</Typography12>
                                </ColumnBox>
                            </ColumnBox>
                            <ColumnBox gap={0.9} ai="center" jc="center">
                                <NotUsedSrtImgWrapper src={NotUsedSrtImg} alt='not_used_srt' />
                                <ColumnBox gap={0.1} ai="center">
                                    <Typography12 fontWeight={500} ls={-0.1} color="#5F1D4A">사용가능</Typography12>
                                </ColumnBox>
                            </ColumnBox>
                            {/* <ColumnBox gap={0.9} ai="center" jc="center">
                                <NotUsedSrtImgWrapper src={NotUsedSrtImg} alt='not_used_srt' />
                                <ColumnBox gap={0.1} ai="center">
                                    <Typography12 fontWeight={500} ls={-0.1} color="#5F1D4A">사용가능</Typography12>
                                </ColumnBox>
                            </ColumnBox>
                            <ColumnBox gap={0.9} ai="center" jc="center">
                                <NotUsedSrtImgWrapper src={NotUsedSrtImg} alt='not_used_srt' />
                                <ColumnBox gap={0.1} ai="center">
                                    <Typography12 fontWeight={500} ls={-0.1} color="#5F1D4A">사용가능</Typography12>
                                </ColumnBox>
                            </ColumnBox>
                            <ColumnBox gap={0.9} ai="center" jc="center">
                                <NotUsedSrtImgWrapper src={NotUsedSrtImg} alt='not_used_srt' />
                                <ColumnBox gap={0.1} ai="center">
                                    <Typography12 fontWeight={500} ls={-0.1} color="#5F1D4A">사용가능</Typography12>
                                </ColumnBox>
                            </ColumnBox> */}
                        </Frame3Wrapper>
                        <Line/>
                        <Frame4Wrapper>
                            <RowBox gap={0.5} ai="center" jc="space-between">
                                <QrCodeImgWrapper src={QrCodeImg} alt='qr_code' />
                                <ColumnBox gap={0.6}>
                                    <RowBox>
                                        <Typography16 color="#333333" fontWeight={500} ls={-1}>이가은/여/</Typography16>
                                        <Typography16 color="#333333" fontWeight={500} ls={-0.7}>(2001/05/21)</Typography16>
                                    </RowBox>
                                    <RowBox>
                                        <Typography14 color="#005FB1" fontWeight={500} ls={-0.8}>[회수승차권 ]</Typography14>
                                        <Typography14 color="#005FB1" fontWeight={500} ls={-0.8}>만25세미만 1개월</Typography14>
                                    </RowBox>
                                    <Typography14 color="#666666" fontWeight={500} ls={-0.8}>발권일자 : 2024년 10월 10일</Typography14>
                                    <Typography16 color="#333333" fontWeight={500} ls={-0.8}>81557-1010-10008-85</Typography16>
                                </ColumnBox>
                            </RowBox>
                            <InfiniteLogoCarousel />
                        </Frame4Wrapper>
                        <ColumnBox style={{ padding: "0 1.5rem" }}>
                            <RowBox jc="space-between" style={{ padding: "2rem 0 0.8rem 0" }}>
                                <Typography18 color="#333333" fontWeight={700} ls={-1}>영수액</Typography18>
                                <Typography18 color="#8F3575" fontWeight={700} ls={-1}>216,000원</Typography18>
                            </RowBox>
                            <Line />
                            <Typography16 color="#292929" ls={-1} fontWeight={500} style={{ marginLeft: "0.2rem", marginTop: "2rem" }}>이용안내</Typography16>
                            <Typography16 color="#292929" ls={-1} style={{ marginTop: "1.5rem" }}>•  구매 시 지정한 열차와 시간표에 기재된 열</Typography16>
                        </ColumnBox>
                    </TableBody>
                </Table>
                <PageFooter>
                <GrayButton>환불하기</GrayButton>
                <PurpleButton>횟수차감</PurpleButton>
                <GrayButton>영수증</GrayButton>
            </PageFooter>
            </PageBody>
            
        </PageWrapper>
    )
}

const GrayButton = styled.div`
    font-size: 1.8rem;
    font-family: 'Roboto';
    font-weight: 500;
    color: #ffffff;
    background: #626262;
    padding: 1.5rem;
    text-align: center;
`
const PurpleButton = styled.div`
    font-size: 1.8rem;
    font-family: 'Roboto';
    font-weight: 500;
    color: #ffffff;
    background: #8F3575;
    padding: 1.5rem;
    text-align: center;
`
const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    overflow: hidden;
`

const PageHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 2rem;
    width : 100%;   
    background-color: #ffffff;
`
const PageBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: scroll;
    background: #ffffff;
`

const PageFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    // columns의 높이가 모두 같아야 함 == stretch
    align-items: center;
    // grid 안에 있는 요소의 정렬 가운데
    justify-content: center;
    
`
const Table = styled.div`
    border-radius: 1.7rem;
    overflow: hidden;
    padding: 1.2rem 1.5rem;
`

const TableHeader = styled.div`
    text-align: center;
    padding: 1.7rem;
    background-color: #8F3575;
    border-radius: 1.7rem 1.7rem 0 0;
`
const TableBody = styled.div`
    background: #EDEDED;
    padding: 1rem 1.6rem;
`
const Typography = styled.p<{ fontWeight?: number, ls?: number, color?: string }>`
    font-size: 2rem;
    font-family: 'Roboto';
    font-weight: ${props => props.fontWeight ? props.fontWeight : 400};
    color : ${props => props.color ? props.color : '#282828'};
    letter-spacing: ${props => props.ls ? props.ls : -0.5}px;
`

const Typography20 = styled(Typography)`
    font-size: 2rem;
    font-family: 'Roboto';
    font-weight: 700;
    color: #282828;
    letter-spacing: -5%;
`
const Typography18 = styled(Typography)`
    font-size: 1.8rem;
`
const Typography16 = styled(Typography)`
    font-size: 1.6rem;
`
const Typography14 = styled(Typography)`
    font-size: 1.4rem;
`
const Typography12 = styled(Typography) <{ color?: string }>`
    font-size: 1.2rem;
    letter-spacing: -2%;
`
const Typography28 = styled(Typography)`
    font-size: 2.8rem;
    font-family: 'Roboto';
    font-weight: 500;
    color: #8F3575;
    letter-spacing: -5%;
`

const ArrowLeftIconImg = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`

const RoundArrowRightIconImg = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`
const ChangeImgWrapper = styled.img`
    width: 3rem;
    height: 3rem;
`
const NotUsedSrtImgWrapper = styled.img`
    width: 3.7rem;
    height: auto;    
`

const UseingSrtWrapper = styled.img`
    width: 3.7rem;
    height: auto;  
`
const UsedSrtWrapper = styled.img`
    width: 3.7rem;
    height: auto;  
`
const QrCodeImgWrapper = styled.img`
    width: 7rem;
    height: 7rem;
    margin-left: 3rem;
`
const Badge = styled.div`
    padding: 0.5rem 1rem;
    border-radius: 14.5rem;
    width: fit-content;
    border: 1px solid #CDCDCD;
    background: #ffffff;
    text-align: center;
    font-size: 1.6rem;
    font-family: 'Roboto';
    font-weight: 700;
    color: #82263D;
    letter-spacing: -4%;
`

const Frame1Wrapper = styled.div<{ gap?: number }>`
    display: flex;
    align-items: center;
    gap: ${props => props.gap ? props.gap : '0'}rem;
`

const Frame2Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Frame3Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 0.5rem 0.9rem 0.6rem 0.9rem;
    row-gap: 1rem;
`
const Frame4Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #ffffff;
    padding: 1.1rem 0 0rem 0;
    border-top: 1px solid #CCCCCC;
`
const Line = styled.div`
    width: 100%;
    height: 0.1rem;
    background: #D9D9D9;
`

const ColumnBox = styled.div<{ gap?: number, ai?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline' | 'initial' | 'inherit', jc?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | 'initial' | 'inherit' }>`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.ai ? props.ai : 'initial'};
    justify-content: ${props => props.jc ? props.jc : 'initial'};
    gap: ${props => props.gap ? props.gap : 0}rem;
`
const RowBox = styled.div<{ gap?: number, ai?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline' | 'initial' | 'inherit', jc?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | 'initial' | 'inherit' }>`
    display: flex;
    align-items: ${props => props.ai ? props.ai : 'initial'};
    justify-content: ${props => props.jc ? props.jc : 'initial'};
    gap: ${props => props.gap ? props.gap : 0}rem;
`
export default MySrt;