module.exports = global.config = {
    BASE_URL : "http://34.116.165.172:8085/time-tracker"
    // other global config variables you wish
};

const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    sameSite: "none",
    secure: true, // this was 'false' before. 'true' works.
};