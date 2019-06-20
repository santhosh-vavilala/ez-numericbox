# ez-numericbox

Minimalistic design, simple, customizable, and easy-to-use numeric input box component for your Angular 2+ application.

## Insatallation

npm install ez-numericbox 

# Code - app.moduele.ts

import { BrowserModule } from '@angular/platform-browser';<br />
import { NgModule } from '@angular/core';<br />
import { EzNumericboxModule,  EzNumericboxService } from 'ez-numericbox'<br />
import { AppComponent } from './app.component';<br />
import { FormsModule } from '@angular/forms';<br />

@NgModule({<br />
  declarations: [<br />
    AppComponent,<br />
  ],<br />
  imports: [<br />
    BrowserModule,<br />
    EzNumericboxModule,<br />
    FormsModule<br />
  ],<br />
  providers: [EzNumericboxService],<br />
  bootstrap: [AppComponent]<br />
})<br />
export class AppModule { }<br />

# Code - Markup

<ez-numericbox [min]="25" [max]="35" [reset]="true" [(ngModel)]="myNumValue" (blur)="onBlur($event)"><br />
</ez-numericbox><br />

# Configuration

### Minimum Value : 
<ez-numericbox [min]="25" [reset]="true" [(ngModel)]="myNumValue" (blur)="onBlur($event)"><br />
</ez-numericbox><br />
### Maximum Value : 
<ez-numericbox [max]="35" [reset]="true" [(ngModel)]="myNumValue" (blur)="onBlur($event)"><br />
</ez-numericbox><br />
### Rest Min and Max values: 
<ez-numericbox [min]="25" [max]="35" [reset]="true" [(ngModel)]="myNumValue" ><br />
</ez-numericbox><br />
### Blur: 
<ez-numericbox (blur)="onBlur($event)"><br />
</ez-numericbox><br />
