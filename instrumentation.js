/*/                                                                                  /+/ 
    Configures OpenTelemetry for tracing in a Node.js application with Zipkin export
/+/                                                                                  /*/

const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { ZipkinExporter } = require('@opentelemetry/exporter-zipkin');           /* Exports trace telemetry data to a Zipkin server */
// const { ConsoleSpanExporter } = require('@opentelemetry/sdk-trace-node');    /* Exports trace telemetry data to the console */

/* Sets new span resource attribtutes */
process.env.OTEL_SERVICE_NAME = 'TEST-SERVICE-NAME';
process.env.OTEL_RESOURCE_ATTRIBUTES = "test-attribute-1=12345, test-attribute-2=00000, test-attribute-3=11111"

const sdk = new NodeSDK({
    traceExporter: new ZipkinExporter(),
    instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();

