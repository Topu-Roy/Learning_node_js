//* Operating system Information

const os = require("os");

const osInfo = {
  //? Info about current user of the system
  currentUserName: os.userInfo().username,

  //? System uptime information in seconds
  systemUptime: os.uptime(),

  //? Operating system Name
  osName: os.type(),

  //? Operating system Release date
  osVersion: os.release(),

  //? Total memory
  totalMemory: os.totalmem(),

  //? Total free memory
  freeMemory: os.freemem(),
};

console.log(osInfo);
