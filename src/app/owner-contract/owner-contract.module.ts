import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddendumComponent } from './addendum/addendum.component';
import { FindPropertyComponent } from './find-property/find-property.component';
import { OwnerBenefitComponent } from './owner-benefit/owner-benefit.component';
import { PropertiesComponent } from './properties/properties.component';
import { PaymentStatusComponent } from './payment-status/payment-status.component';
import { CommentsComponent } from './comments/comments.component';
import { DocumentsComponent } from './documents/documents.component';
import { PersonalInfoComponent } from './main/personal-info/personal-info.component';
import { PropertycontratComponent } from './main/propertycontrat/propertycontrat.component';
import { PaymentsStatusComponent } from './shared/payments-status/payments-status.component';
import { FuturePaymentsComponent } from './shared/future-payments/future-payments.component';



@NgModule({
  declarations: [
    AddendumComponent,
    FindPropertyComponent,
    OwnerBenefitComponent,
    PropertiesComponent,
    PaymentStatusComponent,
    CommentsComponent,
    DocumentsComponent,
    PersonalInfoComponent,
    PropertycontratComponent,
    PaymentsStatusComponent,
    FuturePaymentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OwnerContractModule { }
