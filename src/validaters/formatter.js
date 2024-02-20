const str = "  FunctionUp  ";


const trimStr = (str) => {
    console.log(str.trim())
}

const lowerCaseStr = (str) => {
    console.log(str.toLowerCase().trim());
}

const upperCaseStr = (str) => {
    console.log(str.toUpperCase().trim());
}

export {str, trimStr, lowerCaseStr, upperCaseStr}