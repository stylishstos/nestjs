import {
    Redirect,
    Controller,
    HttpCode,
    HttpStatus,
    Header,
    Get,
    Post,
    Delete,
    Put,
    Param,
    Body
} from '@nestjs/common';

import { CreateProductDTO } from './DTO/create-product.dto';
import { UpdateProductDTO } from './DTO/update-product.dto';

import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}


    @Get()
    getAll() {
        return this.productService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.productService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() createProductDto: CreateProductDTO) {
        return this.productService.create(createProductDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string): string {
        return "Delete: " + id;
    }

    @Put(':id')
    update(@Body() updateProductDto: UpdateProductDTO, @Param('id') id: string) {
        return "Update: " + id + " " + JSON.stringify(updateProductDto);
    }

}
