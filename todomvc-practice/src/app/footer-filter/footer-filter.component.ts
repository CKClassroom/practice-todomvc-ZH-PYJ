import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer-filter',
  templateUrl: './footer-filter.component.html',
  styleUrls: ['./footer-filter.component.css']
})
export class FooterFilterComponent implements OnInit {

  @Input() public filterCondition: string;
  @Output() private filterConditionChange: EventEmitter<string>;


  constructor() {
    this.filterConditionChange = new EventEmitter<string>();
  }

  onFilterChange(condition: 'All'| 'active' | 'completed') {
    this.filterCondition = condition;
    this.filterConditionChange.emit(this.filterCondition);
  }

  ngOnInit() {
  }

}
