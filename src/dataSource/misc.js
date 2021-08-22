const LOADER_PREVIOUS_TIMESTAMP = 'loader-previous-timestamp';
const LOADER_EXPIRY_TIME_IN_MINUTES = 60;
const LOADER_EXPIRY_TIME_IN_MILLIS = 1000 * 60 * LOADER_EXPIRY_TIME_IN_MINUTES;

export const shouldShowLoader = () => {
    const previousTime = localStorage.getItem(LOADER_PREVIOUS_TIMESTAMP);
    if (previousTime) {
        const pt = parseInt(previousTime);
        const ct = Date.now();
        return (ct - pt) >= LOADER_EXPIRY_TIME_IN_MILLIS;
    }
    return true;
};

export const refreshLoaderTime = () => {
    if (shouldShowLoader()) {
        localStorage.setItem(LOADER_PREVIOUS_TIMESTAMP, Date.now().toString())
    }
};
