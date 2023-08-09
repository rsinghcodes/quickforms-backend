import { DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger';

export const swaggerPath = 'api';

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle('quickforms-backend')
  .setDescription(
    '\n\n## Congratulations! Your service resource is ready.\n  \nPlease note that all endpoints are secured with JWT Bearer authentication.\nBy default, our service resource comes with one user with the username "admin" and password "admin".'
  )
  .addBearerAuth()
  .build();

export const swaggerSetupOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCssUrl: '../swagger/swagger.css',
  customfavIcon: '../swagger/favicon.png',
  customSiteTitle: 'quickforms-backend',
};
