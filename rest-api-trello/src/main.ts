import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";



async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);


    const config = new DocumentBuilder()
        .setTitle('restFullApiForTrello')
        .setDescription('Документация по проекту')
        .setVersion('1.0.0')
        .addTag('VLGR')
        .build();
    const document = SwaggerModule.createDocument(app,config);
    SwaggerModule.setup('/api/docs',app,document);
    
    app.useGlobalPipes(new ValidationPipe())

    await app.listen (PORT, ()=> console.log('server was start on port', PORT))
}       

start();