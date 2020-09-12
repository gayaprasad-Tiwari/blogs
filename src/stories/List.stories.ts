import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { reducers } from '../app/models/store/app.state';
import { StoreModule } from '@ngrx/store';
import { BlogListComponent } from '../app/blog-list/blog-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ThemeService } from 'src/app/services/theme.service';
import { HttpClientModule } from '@angular/common/http';

const blogLists = [
  {
    id: 1,
    title: 'Rental: $20dsssds0ak in Profit Without Owning Any Propertdyvf',
    imageUrl: 'https://www.sidehustlenation.com/wp-content/uploads/2020/08/rental-arbitrage.jpg',
    description: 'Rental sar bhjbitrage gives you a sway to make money with Airbnb — without owning any prop.Traditionally, building a real estate side hustle takes big bucks for down payments, closing costs, and renovation projects. But enterprising short-term rental moguls are questioning if owning the property is even necessary. These rental arbitrage entrepreneurs sign long-term leases, and then turn around and sub-let the property on a short-term basis — profiting on the spread.',
    category: 'Real State',
    date: '2020-09-11T08:26:07.113Z'
  },
  {
    title: 'Rental Arbitrage: $201k in Profit Without Owning Any Property',
    imageUrl: 'https://www.sidehustlenation.com/wp-content/uploads/2020/08/rental-arbitrage.jpg',
    description: 'Rental arbitrage gives you a way to make money with Airbnb — without owning any prop.Traditionally, building a real estate side hustle takes big bucks for down payments, closing costs, and renovation projects. But enterprising short-term rental moguls are questioning if owning the property is even necessary. These rental arbitrage entrepreneurs sign long-term leases, and then turn around and sub-let the property on a short-term basis — profiting on the spread.',
    category: 'others',
    date: '2020-09-05T09:55:36.275Z',
    id: 30
  }, ];

export default {
  title: 'blogs/BlogList',
  component: BlogListComponent,
  decorators: [
    moduleMetadata({
      declarations: [BlogListComponent],
      imports: [RouterTestingModule, HttpClientModule,
        StoreModule.forRoot(reducers, {})],
      providers: [ThemeService]
    }),
  ],
} as Meta;


const Template: Story<BlogListComponent> = (args: BlogListComponent) => ({
  component: BlogListComponent,
  props: args
});

export const Defualt = Template.bind({});
Defualt.args = {
  list: blogLists,
  isloggedin: false,
};


