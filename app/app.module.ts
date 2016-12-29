import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }   from './app.component';
import { LoginComponent } from './login/login.component';

import { LoginService }   from './login/login.service';

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule ],
    declarations: [ AppComponent, LoginComponent ],
    providers: [ LoginService ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}