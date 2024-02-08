const setSession = (token) => {
    localStorage.setItem('Token', token);
};

const removeSession = () => {
    localStorage.removeItem('Token');
};

const isMobile = () => {
    const width = window.innerWidth;
    const userAgent = navigator.userAgent;
    const mobileUserAgents = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    if (mobileUserAgents.test(userAgent) || width <= 1200) {
        return true;
    } else {
        return false;
    }
};

const commonFunction = {
    setSession,
    removeSession,
    isMobile,
};

export default commonFunction;