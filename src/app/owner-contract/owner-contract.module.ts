import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AddendumComponent } from './addendum/addendum.component';
import { FindPropertyComponent } from './find-property/find-property.component';
import { PropertiesComponent } from './properties/properties.component';
import { PaymentStatusComponent } from './payment-status/payment-status.component';
import { CommentsComponent } from './comments/comments.component';
import { DocumentsComponent } from './documents/documents.component';
import { PersonalInfoComponent } from './Contractmain/personal-info/personal-info.component';
import { PropertycontratComponent } from './Contractmain/propertycontrat/propertycontrat.component';
import { PaymentsStatusComponent } from './shared/payments-status/payments-status.component';
import { FuturePaymentsComponent } from './shared/future-payments/future-payments.component';
import { OwnerContractComponent } from './owner-contract.component';
import { OwnerContratRoutingModule } from './owner-contrat-routing.module';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AddendumComponent,
    FindPropertyComponent,
    PropertiesComponent,
    PaymentStatusComponent,
    CommentsComponent,
    DocumentsComponent,
    PersonalInfoComponent,
    PropertycontratComponent,
    PaymentsStatusComponent,
    FuturePaymentsComponent,
    OwnerContractComponent
  ],
  imports: [   
    OwnerContratRoutingModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class OwnerContractModule { }
