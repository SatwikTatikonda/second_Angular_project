import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { sharedModule } from './shared/card/shared.module';
import { TasksModule } from './tasks/tasks.module';

// for standalone components we use imports bootstrap for module components
@NgModule({

    declarations: [AppComponent,
        HeaderComponent,
        UserComponent,
       ],
    bootstrap: [AppComponent],
    imports:[BrowserModule,sharedModule,TasksModule]

})
export class AppModule{

}