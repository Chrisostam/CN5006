const dateofbirth = "12/13/1980"

const getStudentName = () => {
    return ("Chris ")
}

const getCampusName = () => {
    return ("UEL Campus ")
}

exports.getName = getStudentName
exports.getLocation = getCampusName
exports.getDOB = dateofbirth

exports.Studentgrade = (marks) => {
    if (marks > 50 && marks < 70) {
        return ("B grade")
    }
    else {
        return ("A grade")
    }
}      

