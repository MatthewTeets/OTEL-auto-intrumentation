# OpenTelemetry - Automatic Instrumentation

This repository contains a simple Express server integrated with OpenTelemetry for collecting and exporting telemetry data to a Zipkin server.

## Getting Started

To run the application locally, follow these simple steps:

### Prerequisites

Ensure you have the following dependencies installed on your machine:

- [Docker](https://www.docker.com/) to run the Zipkin server container.
- [Node.js](https://nodejs.org/) to execute JavaScript code.

### Setting Up Zipkin Server

Start the Zipkin server container by running the following Docker command:

```bash
docker run --rm -d -p 9411:9411 --name zipkin openzipkin/zipkin
```

### Running the Application
1. Open a browser window and navigate to localhost:8080 for the Express server.
2. Open another browser window and go to localhost:9411 for the Zipkin server.
3. Clone this repository to your local machine and navigate to its directory.

```bash
git clone https://github.com/matthewteets/OTEL-auto-intrumentation.git
```
4. Install project dependencies using npm.
```bash
npm install
```
5. Now start the application using the following command.
```bash
npm start
```
This command will first load the OpenTelemetry file to initialize the instrumentation SDK and then boot up the Express server.

### Sending Traces
Once the setup is complete, navigate to the following pages on localhost:8080: <br>
• /home <br>
• /1 <br>
• /2 <br>

This will start sending traces to the Zipkin server. To view the traces, click the "Run Query" button on the Zipkin page to load the newly created traces.

