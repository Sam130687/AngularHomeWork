import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsGridComponent } from './goods-grid.component';

describe('GoodsGridComponent', () => {
	let component: GoodsGridComponent;
	let fixture: ComponentFixture<GoodsGridComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [GoodsGridComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GoodsGridComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
