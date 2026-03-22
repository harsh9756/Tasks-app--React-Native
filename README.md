Schedule App - Tabs version
Structure:
 app/
  _layout.js   -> bottom tabs
  index.js     -> Home (header + stats + subtabs + task list)
  calendar.js  -> Calendar tab
  history.js   -> History tab
 components/
  Header.js
  StatsRow.js
  SubTabs.js
  TaskRow.js
  AddEditTaskModal.js
 utils/
  storage.js
  notifications.js
  date.js

To run:
 npm install
 npx expo start
