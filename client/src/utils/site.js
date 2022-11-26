export const doSearch = async (qry, func) => {
    try {
        const { data } = await func(qry);
        return data || [];
    } catch (error) {
        console.log(error);
    }
};

export const isProduction = () => {
    return process.env.NODE_ENV === 'production';
};

export const d = (message, object = null) => {
    if (!isProduction() || (window.location.search.search('debug') > 0)) {

        console.log(message);
        // eslint-disable-next-line no-console
        if (object) console.table(object);
    }
};