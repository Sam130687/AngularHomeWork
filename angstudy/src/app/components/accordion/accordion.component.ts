import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ICategory } from '../../interface/category';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent {
  @Input() public category: ICategory[] = [];
  
  expandedIndex = 0;

  constructor() { }
}
