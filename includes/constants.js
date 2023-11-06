// Declare dataset location
const product_catalog = dataform.projectConfig.vars.product_catalog_dataset;
const user_event = dataform.projectConfig.vars.user_event_dataset;

// Create D-1 date in format YYYYMMDD
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const yesterday_no_separation = yesterday.toISOString().split('T')[0].replace(/-/g, '');

// Create D date in format YYYY-MM-DD for loading action csv file, because action file's date show the upload date instead of event date
const today = new Date();
const today_dash_separation = today.toISOString().split('T')[0];

// Define tables with table suffix for product_catalog
const DAILY_RAW_PRODUCT_TABLE = "`kkday-retail-ai-poc." + product_catalog + ".raw_product_catalog_" + yesterday_no_separation + "`";
const DAILY_RAW_WIFI_SIM_TABLE = "`kkday-retail-ai-poc." + product_catalog + ".raw_wifi_" + yesterday_no_separation + "`";

// Define tables with table suffix for user_event
const DAILY_USER_EVENT_TABLE = "`kkday-retail-ai-poc." + user_event + ".action_" + yesterday_no_separation + "`";
const USER_EVENT_FILES = "'gs://kkday-retail-ai-poc-data/D/action/log_date=" + today_dash_separation + "/*.csv'"; // note that the D-1 data is in a D day folder

// Export variables
module.exports = {
    DAILY_RAW_WIFI_SIM_TABLE,
    DAILY_RAW_PRODUCT_TABLE,
    DAILY_USER_EVENT_TABLE,
    USER_EVENT_FILES
};
