const addBaseUrl = (url) => {
    console.log(process.env);
    const baseUrl = process.env.NODE_ENV === "development" ? process.env.REACT_APP_BASE_URL: "";

    return `${baseUrl}${url}`;
}

export { addBaseUrl };