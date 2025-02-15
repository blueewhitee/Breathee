```
what type of data you want to track?

URLS YES but when i am using it for more than 5 minutes and if i am on the  website for more than 5 minutes then save the time spent on it too. Scrolling behaviour on all sites like how long am i just scrolling or if the page includes video content then what type of video am watching. yes it should save search query or could fetch from the browser only. 

WHERE DO YOU WANT TO  STORE THE DATA? 

i want to store it in mongodb locally for now.

WHAT WILL YOU DO WITH THE DATA? 

yes i want to analyze the browsing patten and then train machine model on the things you're wasting your time on and train the model from it to make me stop doom scrolling . yes the use could see its browsing acativy via chart in the dashboard.
```


### ```
Project overview
``` Overview

The project is a browser extension that tracks your browsing activity and stores it locally in a MongoDB database. The extension captures various types of data, including URLs, time spent on each site, scrolling behavior, video content, and text content from the visible viewport. Here's a comprehensive breakdown of the project components and their functionalities:

### Project Components

1. **Browser Extension**:
   - **Manifest File (`manifest.json`)**:
     - Defines the extension's metadata (name, version, permissions).
     - Specifies the background script (`background.js`) and content script (`content.js`).
     - Lists permissions needed, such as access to tabs, storage, and scripting capabilities.

2. **Content Script (`content.js`)**:
   - **Page Visibility Tracking**:
     - Listens for changes in page visibility to start or pause tracking when the tab is active or inactive.
   - **URL Tracking**:
     - Tracks the current URL and records the time when the URL changes.
   - **Time Spent**:
     - Measures the time spent on each URL.
     - If the time spent on a URL exceeds 5 minutes, it sends this data to the background script.
   - **Scrolling Behavior**:
     - Captures scrolling activities on the page by recording timestamps and positions.
     - Extracts visible text content from the viewport at regular intervals (e.g., every 30 seconds) only if the user has spent more than 5 minutes on the page.
   - **Video Content**:
     - Detects video content (e.g., `<video>` tags) and records the type of video being played.
   - **Search Queries**:
     - Can be extended to capture search queries from search engines or other input fields.

3. **Background Script (`background.js`)**:
   - **Message Handling**:
     - Receives messages from the content script containing URL, time spent, scrolling data, video content, and text content.
     - Filters the data to ensure it meets the criteria (e.g., time spent > 5 minutes).
     - Sends the filtered data to the server via an API endpoint.

4. **Backend API**:
   - **Store Data (`pages/api/storeData.js`)**:
     - Receives data from the background script.
     - Stores the data in a MongoDB database, including URL, time spent, scrolling data, video content, and text content.
   - **Get Data (`pages/api/getData.js`)**:
     - Fetches stored data from the MongoDB database.
     - Provides the data to the frontend dashboard for visualization.

5. **Frontend Dashboard**:
   - **Home Page (`pages/index.js`)**:
     - Displays recent activity data.
     - Provides a link to the dashboard for more detailed analysis.
   - **Dashboard Page (`pages/dashboard.js`)**:
     - Fetches and displays stored data using charts and other visualizations.
     - Shows browsing patterns, time spent on websites, scrolling behavior, video content, and captured text content.

### Data Flow

6. **User Browsing**:
   - The user interacts with web pages, scrolling through content, watching videos, and performing other activities.

7. **Content Script**:
   - Tracks the user's activity, including URLs, time spent, scrolling behavior, video content, and text content from the visible viewport.
   - Sends relevant data to the background script when the user has spent more than 5 minutes on a page.

8. **Background Script**:
   - Receives data from the content script.
   - Filters and processes the data.
   - Sends the processed data to the server via an API endpoint.

9. **Backend API**:
   - Receives data from the background script.
   - Stores the data in a MongoDB database.

10. **Frontend Dashboard**:
   - Fetches data from the MongoDB database via an API endpoint.
   - Displays the data using charts and other visualizations to provide insights into browsing patterns, time spent, scrolling behavior, video content, and captured text content.

### Data Storage

- **MongoDB Database**:
  - **Database**: `browserActivity`
  - **Collection**: `activity`
  - **Data Fields**:
    - **URL**: The URL of the page.
    - **Page Title**: The title of the page.
    - **Page Load Time**: The time when the page was loaded.
    - **Time Spent**: The total time spent on the page.
    - **Scroll Data**: Timestamps, scroll durations, and captured text content from the visible viewport.
    - **Video Content**: Type of video content being played.
    - **User Interaction**: User ID or session ID (if applicable).
    - **Device Information**: Browser, device type, screen resolution.

### Frontend Dashboard Features

- **Home Page**:
  - Displays a list of recent browsing activities.
  - Provides a link to the dashboard for detailed analysis.

- **Dashboard Page**:
  - Displays charts and visualizations of browsing patterns.
  - Shows time spent on different websites.
  - Visualizes scrolling behavior and captured text content.
  - Provides insights into video content viewed.

### Summary

- **Browser Extension**: Tracks URLs, time spent, scrolling behavior, video content, and text content from the visible viewport.
- **Background Script**: Processes and sends data to the server.
- **Backend API**: Stores data in MongoDB.
- **Frontend Dashboard**: Fetches and displays data using charts and visualizations to provide insights into browsing patterns.

This project setup ensures that you can track and analyze your browsing activities comprehensively, providing detailed insights into your time spent on websites, scrolling behavior, and the type of content you are browsing.```
```
``
