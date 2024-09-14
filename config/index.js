const convict = require("convict");
convict.addFormat(require("convict-format-with-validator").ipaddress);

// Define a schema
var config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV",
  },
  ip: {
    doc: "The IP address to bind.",
    format: "ipaddress",
    default: "127.0.0.1",
    env: "IP_ADDRESS",
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 8080,
    env: "PORT",
    arg: "port",
  },
  db: {
    host: {
      doc: "Database host name/IP",
      format: String,
      default: "127.0.0.1",
      env: "DATABASE_HOST",
    },
    name: {
      doc: "Database name",
      format: String,
      default: "database_development",
      env: "DATABASE_NAME",
    },
    username: {
      doc: "db user",
      format: String,
      default: "root",
      env: "DATABASE_USERNAME",
    },
    password: {
      doc: "db password",
      format: "*",
      default: null,
      env: "DATABASE_PASSWORD",
    },
  },
  signIn: {
    jwtSecret: {
      doc: "JWT Secret",
      format: String,
      default: "",
      env: "JWT_SECRET",
    },
  },
  playStoreDemoAccount: {
    cellNumber: {
      doc: "Phone Number of Play Store demo account",
      format: Array,
      default: [],
      env: "PLAY_STORE_ACCOUNT_CELL_NUMBER",
    },
    otp: {
      doc: "OTP of Play Store demo account",
      format: String,
      default: "1111",
      env: "PLAY_STORE_ACCOUNT_OTP",
    },
  },
  itsGateway: {
    user: {
      doc: "User Info",
      format: String,
      default: "",
      env: "USER_NAME",
    },
    pass: {
      doc: "User Password",
      format: String,
      default: "",
      env: "USER_PASSWORD",
    },
    from: {
      doc: "Sender Number",
      format: String,
      default: "",
      env: "MASK_NUMBER",
    },
    type: {
      doc: "Type of SMS",
      format: String,
      default: "",
      env: "SMS_TYPE_ITS",
    },
  },
});

// Load environment dependent configuration
let env = config.get("env");
if (env === "development" || env === "test") {
  config.loadFile(__dirname + "/environments/" + env + ".json");
}

// Perform validation
config.validate({ allowed: "strict" });
module.exports = config;
