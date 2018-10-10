import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NewregistrationComponent} from '../newregistration/newregistration.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open() {
    console.log('Modal Calling');
    const modalRef = this.modalService.open(NewregistrationComponent, {size: 'lg'});
  }

}
