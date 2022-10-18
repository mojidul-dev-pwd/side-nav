import { Component, OnInit } from '@angular/core';

const dataList = [
  { "id": 1, "name": "Quarter One" },
  { "id": 2, "name": "Quarter Two" },
  { "id": 3, "name": "Quarter Three" }
];


@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})

export class TestListComponent implements OnInit {
  testList: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.testList = dataList;
  }

}
