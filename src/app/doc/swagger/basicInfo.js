import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand'
dotenvExpand.expand(dotenv.config())
export default {
    // openapi: '3.0.0', // Specification (optional, defaults to swagger: '2.0')
    info: {
        title:process.env.APP_NAME || 'Swyger-Doc',
        description: process.env.APP_DESCRIPTION ||'Swyger-Doc',
        version: process.env.APP_VERSION ||'0.1.0',
        contact: {
            name: "@swyger/auth",
            email: "support-auth.swyger@agglomy.com",
            url: "https://swyger.agglocode.com", // your website
        },
    },
    basePath: process.env.API_PATH ||'/api/v1/', // Base path (optional)
    schemes:
        process.env.SWAGGER_SCHEMA_HTTPS === 'true'
            ? ['https']
            : ['http', 'https'],
    securityDefinitions: {
        BearerAuth: {
            type: 'apiKey', //apiKey
            name: 'Authorization', //
            scheme: 'bearer',
            bearerFormat: 'JWT',
            in: 'header'
        }
    }
}
