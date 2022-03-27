import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IImage } from '../interface/image';

@Injectable()
export class CarouselImagesService {
	constructor(private http: HttpClient) {}

	getImages$(): Observable<IImage[]> {
		return this.http.get<IImage[]>('/images');
	}
}
