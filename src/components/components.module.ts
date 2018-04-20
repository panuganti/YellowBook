import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SearchResultsComponent } from './search-results/search-results';
import { SearchComponent } from './search/search';

@NgModule({
	declarations: [
		SearchResultsComponent,
		SearchComponent
	],
	imports: [IonicModule],
	exports: [
		SearchResultsComponent,
		SearchComponent
	]
})
export class ComponentsModule { }
