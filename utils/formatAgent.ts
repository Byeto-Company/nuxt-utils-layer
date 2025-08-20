const formatAgent = (userAgent: any) => {
    if (userAgent) {
        let os = "";
        let browser = "";
        let browserVersion = "";
        let deviceType = "";

        // Check for the OS
        if (userAgent.includes("Windows NT")) {
            os = "Windows";
        } else if (userAgent.includes("Mac OS X")) {
            os = "Mac";
        } else if (userAgent.includes("Linux")) {
            os = "Linux";
        } else if (userAgent.includes("Android")) {
            os = "Android";
        } else if (userAgent.includes("iPhone") || userAgent.includes("iPad")) {
            os = "iOS";
        }

        // Check for browser and version
        if (userAgent.includes("Chrome")) {
            browser = "Chrome";
            browserVersion = userAgent.match(/Chrome\/([\d.]+)/)[1];
        } else if (userAgent.includes("Firefox")) {
            browser = "Firefox";
            browserVersion = userAgent.match(/Firefox\/([\d.]+)/)[1];
        } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
            browser = "Safari";
            browserVersion = userAgent.match(/Version\/([\d.]+)/)[1];
        } else if (userAgent.includes("Edge")) {
            browser = "Edge";
            browserVersion = userAgent.match(/Edge\/([\d.]+)/)[1];
        }

        // Check for device type
        if (userAgent.includes("Mobi")) {
            deviceType = "Mobile";
        } else if (userAgent.includes("Tablet")) {
            deviceType = "Tablet";
        } else {
            deviceType = "Desktop";
        }

        return {
            os: os,
            browser: browser,
            browserVersion: browserVersion,
            deviceType: deviceType
        };
    }

    return undefined;
};

export default formatAgent;