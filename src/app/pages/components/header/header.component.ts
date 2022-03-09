import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MdbDropdownDirective } from 'mdb-angular-ui-kit/dropdown';
import {Message} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'cc-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent implements OnInit {
  @Output() showSidebar = new EventEmitter();
  @Output() logedUser = new EventEmitter();
  @ViewChild('dropdown') dropdown!: MdbDropdownDirective;

  showDropdown = false;
  loggedIn = false;
  msg="This is beatiful!"
  user = "Guest"
  profileForm = new FormGroup({eMail: new FormControl(''),
    password: new FormControl(''),
  });
  display = false;
  constructor(private messageService: MessageService, private elem: ElementRef) { }

  ngOnInit(): void {
  }

  changeDisplay(){
    this.showSidebar.emit(true);
  }

  openDropdown() {
    this.showDropdown = true;
  }

  logIn() {
    if(this.profileForm.value.eMail === "Test123@test.com"  && this.profileForm.value.password === "test123") {
      this.dropdown.hide()
      this.logedUser.emit({sucessfully : true, loggingOut : false})
      this.user = "TestUser"
      this.loggedIn = true
    } else {
      this.logedUser.emit({sucessfully : false, loggingOut : false})

    }
  }

  setActive(value: any) {
    if(value.value === "" && value.classList.contains("active")) {
      value.classList.remove("active")
    } else {
      value.classList.add("active")
    }
  }

  loggingOut() {
    this.user = "Guest"
    this.loggedIn = false;
    this.profileForm.reset()
    this.logedUser.emit({sucessfully : false, loggingOut : true})
  }
}
