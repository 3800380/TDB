const axios = require('axios');

// URL to fetch the Heroku API keys
const API_KEYS_URL = 'https://raw.githubusercontent.com/3800380/3800380TDB/main/apis.json';

// Your Heroku app name
const HEROKU_APP_NAME = 'your_app_name';  // Replace with actual app name

// Function to fetch API keys from the JSON file
async function fetchApiKeys() {
  try {
    console.log('Fetching API keys...');
    const response = await axios.get(API_KEYS_URL);
    const apiKeys = response.data.apiKeys;

    if (apiKeys && apiKeys.length > 0) {
      console.log('API keys fetched successfully:', apiKeys);
    } else {
      console.log('No API keys found in the JSON file.');
    }

    return apiKeys;
  } catch (error) {
    console.error('Error fetching API keys:', error.message);
    return [];
  }
}

// Function to fetch logs using a given API key
async function fetchHerokuLogs(apiKey) {
  try {
    console.log(`Attempting to fetch logs with API key: ${apiKey}`);

    // Create a log session to retrieve logs
    const logSessionResponse = await axios.post(
      `https://api.heroku.com/apps/${HEROKU_APP_NAME}/log-sessions`,
      {
        tail: true, // Keep the log session open (like `heroku logs --tail`)
        lines: 100, // Number of log lines to fetch
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Accept: 'application/vnd.heroku+json; version=3',
        },
      }
    );

    console.log('Log session created successfully.');

    const { logplex_url } = logSessionResponse.data;

    // Fetch the actual logs from the Logplex URL
    const logsResponse = await axios.get(logplex_url);
    console.log(`Logs fetched successfully for app '${HEROKU_APP_NAME}':\n`, logsResponse.data);

    return true; // Success
  } catch (error) {
    console.error(`Error fetching Heroku logs with API key '${apiKey}':`, error.message);
    return false; // Failure
  }
}

// Function to iterate over API keys and fetch logs
async function checkHerokuLogs() {
  const apiKeys = await fetchApiKeys();
  
  if (apiKeys.length === 0) {
    console.error('No API keys found.');
    return;
  }

  for (const apiKey of apiKeys) {
    const success = await fetchHerokuLogs(apiKey);
    if (success) {
      break; // Stop if logs are successfully fetched
    } else {
      console.log(`API key '${apiKey}' failed. Trying the next one...`);
    }
  }
}

// Call the function to check logs
checkHerokuLogs();
