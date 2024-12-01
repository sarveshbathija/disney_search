import { months } from "@/constants/months";

export const formatDate = (date: Date): string => {
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
};

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

export const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

export const getDiffInYears = (
    date1Arg: Date | string,
    date2Arg = new Date()
) => {
    const date1 = new Date(date1Arg);
    const year1 = date1.getFullYear();
    const year2 = date2Arg.getFullYear();

    // Calculate the difference in years
    let diff = year2 - year1;

    // Adjust the difference if date2 is before date1 in the year
    if (
        date2Arg.getMonth() < date1.getMonth() ||
        (date2Arg.getMonth() === date1.getMonth() &&
            date2Arg.getDate() < date1.getDate())
    ) {
        diff--;
    }

    return diff;
};

export const formatDateWithOrdinal = (dateParam: string): string => {
    const date = new Date(dateParam);

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Determine the ordinal suffix (st, nd, rd, th)
    let ordinalSuffix = "th";
    if (day === 1 || day === 21 || day === 31) {
        ordinalSuffix = "st";
    } else if (day === 2 || day === 22) {
        ordinalSuffix = "nd";
    } else if (day === 3 || day === 23) {
        ordinalSuffix = "rd";
    }

    return `${month} ${day}${ordinalSuffix}, ${year}`;
};

export const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
});
