import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgLifeCycleHooks_InPractice';
  searchTerm = ''
  isDemoCompActive = true

  onSearch = (inputEle: HTMLInputElement) => {
    this.searchTerm = inputEle.value
  }

  ngAfterViewInit(): void {
    // This hook is called after the view of the current Component & all its child views is fully initialized i.e. all its own template content, any other child component whose selector(those child component's view should be fully loaded) is placed here & all the content projection into the current component should be completed only then this hook will be called

    // In this case this app.component's ngAfterViewInit will be fired only after demo component will be completely loaded
    console.log(`6. NgAfterViewInit called !!`)
  }

  ngAfterViewChecked(): void {
    console.log(`7. NgAfterViewChecked called !!`)
  }

  destroyDemoComp() {
    this.isDemoCompActive = false
  }
}
