import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsStatusComponent } from './shared/payments-status/payments-status.component';
import { OwnerContractComponent } from './owner-contract.component';
import { OwnerContratRoutingModule } from './owner-contrat-routing.module';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { PropertiesComponent } from './properties/properties.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    PaymentsStatusComponent,
    OwnerContractComponent,
    PropertiesComponent
  ],
  imports: [
    CoreModule,
     FormsModule,
     ReactiveFormsModule, 
    OwnerContratRoutingModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,

  ]
})
export class OwnerContractModule { }
