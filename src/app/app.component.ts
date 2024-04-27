import { Component } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tips-calci';

  billAmount = null;
  people = null;
  tipSplit = 0.0;
  tipBillTotal = 0.0;
  tipPercentValue = null;
  tip = 0.0;
  customVal = null;
  selectedIndex = null;

  tipPercent(val: any, isCustom?: any) {
    if (!isCustom) {
      this.customVal = null;
      this.selectedIndex = isCustom;
    }
    this.tipPercentValue = val;
    this.selectedIndex = val;
    this.calculate();
  }

  calculate() {
    if (this.tipPercentValue && this.billAmount && this.people) {
      this.tip = parseFloat(
        (this.billAmount * (this.tipPercentValue / 100)).toFixed(2)
      );
      this.tipSplit = parseFloat((this.tip / this.people).toFixed(2));
      this.tipBillTotal = parseFloat(
        ((this.tip + this.billAmount) / this.people).toFixed(2)
      );
    }
  }

  reset() {
    this.billAmount = null;
    this.people = null;
    this.tipSplit = 0.0;
    this.tipBillTotal = 0.0;
    this.tipPercentValue = null;
    this.tip = 0.0;
    this.customVal = null;
  }
}
//add errors 
// show button active state

