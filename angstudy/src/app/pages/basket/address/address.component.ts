import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressComponent {
  form = this.formBuilder.group({
		contry: ['Enter country', [Validators.required]],
		street: [{ value: 'Enter street', disabled: true }],
		homeInfo: this.formBuilder.group({
			number: null,
			block: null,
		}),
	});

	constructor(private formBuilder: FormBuilder) {}

	onPush() {
		console.log(this.form.value);
		console.log(this.form.getRawValue());
	}
}
