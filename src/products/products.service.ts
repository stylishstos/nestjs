import { Injectable } from '@nestjs/common';

import { CreateProductDTO } from './DTO/create-product.dto';

@Injectable()
export class ProductsService {
    private products = [];

    getAll() {
        return this.products;
    }

    getById(id: string) {
        return this.products.find(p => p.id === id);
    }

    create(productDto: CreateProductDTO) {
        const product = {
            id: Date.now().toString(),
            ...productDto
        };

        this.products.push(product);

        return product;
    }
}
