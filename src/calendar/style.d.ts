import { Theme } from '../types';
export default function getStyle(theme?: Theme): {
    container: {
        paddingLeft: number;
        paddingRight: number;
        backgroundColor: string;
    };
    dayContainer: {
        flex: number;
        alignItems: "center";
    };
    emptyDayContainer: {
        flex: number;
    };
    monthView: {
        backgroundColor: string;
    };
    week: {
        marginVertical: number;
        flexDirection: "row";
        justifyContent: "space-around";
    };
};
