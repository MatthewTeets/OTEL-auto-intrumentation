const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
// const { ConsoleSpanExporter } = require('@opentelemetry/sdk-trace-node');
const { ZipkinExporter } = require('@opentelemetry/exporter-zipkin');

process.env.OTEL_SERVICE_NAME = 'TEST-SERVICE-NAME';

const sdk = new NodeSDK({
    // Determines where the trace is exported (i.e. console, Zipkin, etc.)
    traceExporter: new ZipkinExporter(),
    instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();

