# Notifjs

Notifjs is a simple, responsive vanilla javascript library for toast notifications.

![demo gif](https://raw.githubusercontent.com/azhrzafar/notifjs/master/demo/demo.gif)

### Installation

```
npm i notifjs
```

## Usage

### React example

```js
import Notif from "notifjs";
import "notifjs/dist/notif.min.css";

// Create an instance of Notif
const notif = new Notif(2000);

// Display an error notfication
notyf.error("Oops! Something went wrong.");

// Display a success notfication
notyf.success("Congratulations! You made it.");
```
