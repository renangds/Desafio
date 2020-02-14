import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { Screen2Component } from './screen2/screen2.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
//import { EditComponent } from './edit/edit.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        TranslateModule,
        MatTableModule,
        MatDialogModule
    ],
    declarations: [Screen2Component, LayoutComponent, NavComponent, TopnavComponent, SidebarComponent, ModalDeleteComponent, ],
    entryComponents: [ModalDeleteComponent],
    providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}]

})
export class LayoutModule { }
