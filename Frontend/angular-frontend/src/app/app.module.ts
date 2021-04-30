import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DispenseListComponent } from './dispense-list/dispense-list.component';
import { FormsModule} from '@angular/forms';
import { CreateDispenseComponent } from './create-dispense/create-dispense.component';
import { UpdateDispenseComponent } from './update-dispense/update-dispense.component';
import { GetTimePipePipe } from './get-time-pipe.pipe';
import { IsRepeatingPipe } from './is-repeating.pipe';
import { FormatDayPipe } from './format-day.pipe';
import { FormatAmountPipe } from './format-amount.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DispenseListComponent,
    CreateDispenseComponent,
    UpdateDispenseComponent,
    GetTimePipePipe,
    IsRepeatingPipe,
    FormatDayPipe,
    FormatAmountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
