# Data Visualization

Including in this directory is a simple visualization of some of the more popular
sorting algorithms. The purpose of this directory and corresponding code is to
illustrate the differences in speed between these two algorithms.

More comprehensive visualizations can be found here:
[https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html)
[https://www.toptal.com/developers/sorting-algorithms](https://www.toptal.com/developers/sorting-algorithms)

## Technologies

The core of this demo / visualization is run via Node.js, with a simple
Express app to serve static assets.

The visualization portion of this demo is built using a library called
[P5](https://p5js.org/). Full documentation, examples and conventions for
using / setting up P5 can be found on their website.

## Installation / Setup

From this directory, run the following:
```
npm install

# once installation has completed
npm start
```

This will install the dependencies for a simple Express server, and start a
simple web server at [http://localhost:3000](http://localhost:3000).

**Note:** this server does not hot-reload. Making any changes requires a full
start and stop of the Node server.
