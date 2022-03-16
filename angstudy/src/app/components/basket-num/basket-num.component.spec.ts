import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketNumComponent } from './basket-num.component';

describe('BasketNumComponent', () => {
	let component: BasketNumComponent;
	let fixture: ComponentFixture<BasketNumComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [BasketNumComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(BasketNumComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
