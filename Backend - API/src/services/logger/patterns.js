const serious = {
    level: "serious",
    message: "",
    error: "", //optional,
    path:"",
} // log destined to know if someone is trying to circument the system

const error = {
    level: "error",
    message: "",
    error: "",
}

const warning = {
    level: "warning",
    message: "",
    error: "", //optinal
}

const info = {
    level: "info",
    message: "",
} //exclude after 7 days, or in dump

const performance = {
    level: "performance",
    message: "",
    path: "",
}

const other = {
    level: "other",
    message: "",
    importance_level: {
        NOT_IMPORTANT: "1", //exclude after 7 days, or in dump
        IMPORTANT: "2", // dont exclude
    },
    aditionalInfo: "",
}

module.exports = {serious, error, warning, info, performance, other}