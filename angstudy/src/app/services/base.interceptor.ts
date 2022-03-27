import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		console.log('BaseInterceptor send');
		return next
			.handle(
				request.clone({
					url: `http://localhost:3000${request.url}`,
				}),
			)
			.pipe(tap(() => console.log('BaseInterceptor - tap')));
	}
}

