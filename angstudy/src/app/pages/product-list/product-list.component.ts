import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IImage } from '../../interface/image';
import { IProduct } from '../../interface/product';
import { ICategory } from '../../interface/category';
import { ProductsService } from '../../services/products.service';
import { CarouselImagesService } from '../../services/carousel-images.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
	searchText = '';
	products$!: Observable<IProduct[]>;
	carouselImage$!: Observable<IImage[]>;
	categories$!: Observable<ICategory[]>;	

	constructor(
		private productsService: ProductsService,
		private carouselImagesService: CarouselImagesService,
		private categoriesService: CategoriesService
		) {}

  ngOnInit(): void {
    this.carouselImage$ = this.carouselImagesService.getImages$();
		this.products$ = this.productsService.getProducts$();
		this.categories$ = this.categoriesService.getCategories$();
  }

  onInput(element: Event) {
	this.searchText = (element.target as HTMLInputElement).value;
}
}
