import { Component } from '@angular/core';
import {MenuItem, MessageService, PrimeIcons} from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]

})
export class AppComponent {
  display = false;
  title = 'sportLive';
  isLoggedIn = false;
  constructor(private messageService: MessageService) {
  }
  showSidebar(display : boolean){
    this.display = display;
  }

  changeLoggedIn(event: any) {
    if(!event.loggingOut) {
      console.log(event)
      this.messageService.add(event.sucessfully === true ? {severity:'success', summary:'Service Message', detail:'Via MessageService'} :
        {severity:'error', summary:'Service Message', detail:'Via MessageService'} );
      this.isLoggedIn = event.sucessfully

    } else {
      this.isLoggedIn = event.sucessfully

    }
  }
}
