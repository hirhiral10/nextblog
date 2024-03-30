const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_EXPORT,
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
} = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        password: "Heer81400",
        userName: "hirhiral10",
      },
    };
  }
  return {
    env: {
      password: "Heer81400",
      userName: "hirhiral10",
    },
  };
};
