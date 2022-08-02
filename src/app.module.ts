import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';
import { CategoriasModule } from './categorias/categorias.module';
import { DesafiosModule } from './desafios/desafios.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:oRq0cuImUfA6fSeG@atlascluster.r7vy31r.mongodb.net/smartranking?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }),
    JogadoresModule,
    CategoriasModule,
    DesafiosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
