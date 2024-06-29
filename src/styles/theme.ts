import { DefaultTheme } from "./styled"
const rem = (value: number) => { return value + "rem" }

const theme: DefaultTheme = {
    color :{
        Text_Default : "#1E1E1E"
    },
    fontSize: {
        Heading: rem(2.4),
        SubHeading: rem(2),
        BodyStrong: rem(1.6),
        BodySmall: rem(1.4)
    },
    fontWeight: {
        Bold: 700,
        SemiBold: 600,
        Medium: 500,
        Regular: 400
    }
}

export { theme }