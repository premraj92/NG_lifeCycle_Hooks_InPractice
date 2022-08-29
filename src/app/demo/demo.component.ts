import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input('searchTerm') displaySearchTerm!: string
  @Input('tset2') test2!: string

  constructor() {
    console.log(`Constructor called `)

    // // when demo Component is initialized & constructor gets called - at this point the @Input decorated prop displaySearchTerm that is provided by the parent is not available - so the this.displaySearchTerm logged in the next line only shows whatever value we assigned to it here inside this component i.e. in this case it will log undefined
    // console.log(`Input value from parent is `, this.displaySearchTerm)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`1. NgOnChanges called !!`)
      this.displaySearchTerm = changes['displaySearchTerm'].currentValue

      // as we saw the first time it becomes available is with ngOnChanges hook - that is the first hook that is executed by every component - as that is the first event that happens in the Component lifecycle after constructor
      console.log(`Initial value of displaySearchTerm supplied from parent is `, changes)
  }

  ngOnInit(): void {
    console.log(`2. NgOnInit Called !`)
    // // As opposed to when you log @Input decorated props in the constructor where the value from parent is still not available, here inside NgOnint the actual initial value from parent is available
    // console.log(`Input value from parent is `, this.displaySearchTerm)
  }

  ngDoCheck():void {
    // this is the 3rd lifecycle hook available in a angular lifecycle & this hook gets called for every changeDetection cycle run by angular & it gets called if there is no change in the State of the APP i.e. Even if nothing in the app changed but if an event like click , timer, http event is fired
    // so in this case even if you click the search btn without any change in input value it will still be called
    console.log(`3. NgDoCheckCalled !`)
  }

  ngAfterContentInit(): void {
    // This hook gets called when any content that is being projected into this component from a parent component via ng-content is projected completely for the firstTime on component creation/load
    // That is the only time this hook will be called not after that, it will not be called even if the projected content changes in the future
      console.log(`4. NgAfterContentInit Called !`)
  }


  ngAfterContentChecked(): void {
    // This hook will be fired/called once when the content projection happens for the firstTime right after ngAfterContentInit() is called && after that everytime the projected content changes
    // We should also know that it is called for every ChangeDetection run Even If the Projected Content Does Not Change
      console.log(`5. NgAfterContentCheck called !!`)
  }

  ngAfterViewInit(): void {
    // This hook is called after the view of the current Component & all its child views is fully initialized i.e. all its own template content, any other child component whose selector(those child component's view should be fully loaded) is placed here & all the content projection into the current component should be completed only then this hook will be called

    // In this case this demo component will be completely loaded & only than app.component's ngAfterViewInit will be fired
    console.log(`6. NgAfterViewInit called !!`)
  }

  ngAfterViewChecked(): void {
    // This hook is fired after the components view is changed
    console.log(`7. NgAfterViewChecked called !!`)
  }

  ngOnDestroy(): void {
    console.log(`8. NgOnDestroy called !!`)
  }
}
