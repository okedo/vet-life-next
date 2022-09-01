const addBaseUrl = (url) => {
    return `${process.env.REACT_APP_BASE_URL}${url}`;
}

export { addBaseUrl };