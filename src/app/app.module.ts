import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import { RouterModule, Routes } from '@angular/router';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './pages/components/header/header.component';
import { SidebarComponent } from './pages/components/sidebar/sidebar.component';
import {MenubarModule} from 'primeng/menubar';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import {FieldsetModule} from 'primeng/fieldset';
import {DividerModule} from 'primeng/divider';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {CardModule} from 'primeng/card';
import { TableComponent } from './pages/components/soccer/table/table.component';
import { TableModule } from 'primeng/table';
import {CarouselModule} from 'primeng/carousel';
import {AvatarModule} from 'primeng/avatar';
import { TeamsPageComponent } from './pages/teams-page/teams-page.component';
import { LeaguePageComponent } from './pages/league-page/league-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {TabMenuModule} from 'primeng/tabmenu';
import { GamedayComponent } from './pages/component/gameday/gameday.component';
import {TabViewModule} from 'primeng/tabview';
import {PanelModule} from 'primeng/panel';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DetailPageComponent,
    HomePageComponent,
    TableComponent,
    TeamsPageComponent,
    LeaguePageComponent,
    GamedayComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    SplitButtonModule,
    FieldsetModule,
    DividerModule,
    CardModule, TableModule,
    CarouselModule,
    AvatarModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    TabMenuModule,
    TabViewModule,
    PanelModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
