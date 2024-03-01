import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './modules/cliente/clientes/clientes.module';
import { ProdutosModule } from './modules/produto/produtos/produtos.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ProdutosModule, ClientesModule],
})
export class AppModule {}
