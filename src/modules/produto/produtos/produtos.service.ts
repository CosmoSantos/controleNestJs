import { Injectable } from '@nestjs/common';
import { Produtos } from './produtos';

@Injectable()
export class ProdutosService {

    findAll(): Produtos {
        
        return {
            id: 1, name: 'Violao', value: 3000
        }
    }
}
