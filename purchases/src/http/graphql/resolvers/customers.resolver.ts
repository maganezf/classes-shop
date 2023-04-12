import { UseGuards } from '@nestjs/common';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from 'http/auth/authorization.guard';
import { AuthUser, CurrentUser } from 'http/auth/current-user';
import { CustomersService } from 'services/customers.service';
import { PurchasesService } from 'services/purchases.service';
import { Customer } from '../models/customer';

@Resolver(() => Customer)
export class CustomersResolver {
  constructor(
    private customerService: CustomersService,
    private purchaseService: PurchasesService
  ) {}

  @Query(() => Customer)
  @UseGuards(AuthorizationGuard)
  me(@CurrentUser() user: AuthUser) {
    return this.customerService.getCustomerByAuthUserId(user.sub);
  }

  @ResolveField()
  purchases(@Parent() customer: Customer) {
    return this.purchaseService.getAllPurchasesFromCustomer(customer.id);
  }
}
