"use client";

export const encoded = (value) => {
    return Buffer.from(value).toString("base64");
};

export const decoded = (value) => {
    return Buffer.from(value, "base64").toString();
};

export const capitalizeWord = (value) => {
    return `${value[0].toUpperCase()}${value.slice(1)}`;
};

export const capitalizeSentence = (value = "This is sentence") => {
    const arr = value.toLowerCase().split(" ");
    const sentence = arr.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`).join(" ");

    return sentence;
};

/**
 *
 * @param {*} data
 * @param {*} prefix
 *
 * Convert price integer value into string devided by (.) and give prefix IDR
 *
 * How to use -> convertToIdr(10000)
 * Result -> IDR 10.000
 *
 */
export const convertToMoney = (data = 0, prefix = "IDR") => {
    return `${prefix}${data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

/**
 *
 * @param {*} data
 *
 * Convert integer value into string devided by (.)
 *
 * How to use -> convertToKilo(10000)
 * Result -> 10.000
 *
 */
export const convertToKilo = (data = 0) => {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

/**
 *
 * @param {*} data
 * @param {*} limit
 *
 * Limit content text to show.
 * return content with 100 char and ...
 *
 */
export const limitContentText = (data = "This is sentence", limit) => {
    const description = data.length > limit ? `${data.substring(0, limit)} ...` : data;

    return description;
};

/**
 *
 * @param {*} word
 *
 * Make lowercase of string into captial.
 *
 */
export const convertToCapital = (word) => {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
};

/**
 *
 * @param {*} start
 * @param {*} end
 * @param {*} into
 *
 * Convert time start and time end into duration time
 * and return it by different type
 *
 * format start & end = "00:00"
 * type = showcase / small-showcase
 *
 */
export const convertToDuration = (start, end, type = "showcase") => {
    // start = start.split(":");
    // end = end.split(":");

    // let startDate = new Date(0, 0, 0, start[0], start[1], 0);
    // let endDate = new Date(0, 0, 0, end[0], end[1], 0);
    let startDate = new Date(start);
    let endDate = new Date(end);
    let diff = endDate.getTime() - startDate.getTime();
    let hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    let minutes = Math.floor(diff / 1000 / 60);

    // If 24 hours format
    if (hours < 0) {
        hours = hours + 24;
    }

    switch (type) {
        case "showcase":
            return `${hours}jam ${(minutes <= 9 ? "0" : "") + minutes}menit`;
        case "small-showcase":
            return `${hours}j ${(minutes <= 9 ? "0" : "") + minutes}m`;
        case "seconds":
            const hourToSeconds = hours * 60 * 60;
            const minuteToSeconds = minutes * 60;

            return hourToSeconds + minuteToSeconds;
        default:
            return `${(hours <= 9 ? "0" : "") + hours}:${(minutes <= 9 ? "0" : "") + minutes}`;
    }
};

/**
 *
 * @param {*} bytes
 *
 * Convert bytes into size.
 * 200MB, 20GB
 *
 */
export const convertBytesToSize = (bytes = 1024) => {
    const kilobyte = 1024;
    const megabyte = kilobyte * 1024;
    const gigabyte = megabyte * 1024;

    if (bytes < kilobyte) {
        return bytes + ' bytes';
    } else if (bytes < megabyte) {
        return (bytes / kilobyte).toFixed(2) + ' KB';
    } else if (bytes < gigabyte) {
        return (bytes / megabyte).toFixed(2) + ' MB';
    } else {
        return (bytes / gigabyte).toFixed(2) + ' GB';
    }
};

export const dataFormatter = (items, formatFn) => {
    return items?.map((item) => formatFn(item));
};