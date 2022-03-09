import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'cc-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent implements OnInit {
  @Input() display = false;
  @Input() user = false;
  @Output() changeBool = new EventEmitter();

  favItems: MenuItem[];
  normalItems: MenuItem[];

  constructor( private route: ActivatedRoute,
               private router: Router) { }

  private update(addOrDelete) {

  }

  ngOnInit(): void {
    this.normalItems = [
      {label: 'Add To Favorite', icon: 'pi pi-star', command: () => {
          this.update(true);
        }}
    ];

    this.favItems = [
      {label: 'Remove from Favorite' , icon: 'pi pi-times', command: () => {
          this.update(false);
        }}
    ];
  }

  cancelDisplay() {
    this.changeBool.emit(false)
  }

  changeSite(soccer: string) {

    this.router.navigate(soccer === "" ? ['/'] : ['detail'], { relativeTo: this.route })
    this.changeBool.emit(false)
  }
}
