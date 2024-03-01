import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { ProdutosService } from './produtos.service';
import { Produtos } from './produtos';

@Controller('produtos')
export class ProdutosController {

    constructor(private readonly produtosService: ProdutosService) {}

    @Get()
    todosProdutos(): any {
        return this.produtosService.findAll();
    }
}
