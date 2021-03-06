import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {
  ClickEvent,
  HoverRatingChangeEvent, RatingChangeEvent,
  starRatingColor,
  starRatingLabelPosition,
  starRatingSizes,
  starRatingSpeed,
  starRatingStarSpace,
  starRatingStarTypes
} from 'angular-star-rating';
import 'rxjs/add/operator/takeUntil';
import {Subject} from 'rxjs/Subject';
@Component({
  selector: 'bindings-config-form',
  templateUrl: './bindings-config-form.component.html',
  styleUrls: ['./bindings-config-form.component.scss']
})
export class BindingsConfigFormComponent implements OnInit, OnDestroy {

  private onDestroy$: Subject<boolean> = new Subject<boolean>();

  //option sets
  colorOptions: Array<starRatingColor | string> = ['default', 'negative', 'ok', 'positive'];
  labelPositionOptions: Array<starRatingLabelPosition | string> = ['top', 'right', 'left', 'bottom'];
  starOptions: Array<starRatingStarTypes> = ['svg', 'icon', 'image'];
  speedOptions: Array<starRatingSpeed> = ['immediately', 'noticeable', 'slow'];
  sizeOptions: Array<starRatingSizes> = ['small', 'medium', 'large'];
  spaceOptions: Array<starRatingStarSpace | string> = ['around', 'between', 'no'];

  bindingsForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.setupForm();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
  }

  setupForm() {
    this.bindingsForm = this.fb.group({
      //component input properties (> bindings)
      id: ['10'],
      //pathEmpty: string;
      //pathFilled:string;
      numOfStars: [5],
      rating: [3.5],
      labelText: ['My Text'],
      // labelVisible: [false],
      labelPosition: ['top'],
      staticColor: [],
      speed: ['slow'],
      size: [7],
      space: [false],
      step: [],
      starType: ['svg'],
      direction: [],
      readOnly: [false],
      disabled: [false],
      showHalfStars: [false],
      showHoverStars: [true],
      hoverEnabled: [true],
      //component input functions (> bindings)
      getColor: [],
      useCustomCetColor: [false],
      getHalfStarVisible: [],
      useCustomGetHalfStarVisible: [false],
    });
  }

  //component output (& bindings)
  onHover($event: HoverRatingChangeEvent): void {
    console.log('single onHover rating: ', $event.hoverRating);
  }

  onClick($event: ClickEvent): void {
    console.log('single onClick rating: ', $event.rating);
  }

  onHoverRatingChange($event: HoverRatingChangeEvent): void {
    console.log('single OnHoverRatingChangeEven rating: ', $event.hoverRating);
    // this.bindingsForm.get('hoverRating').setValue($event.hoverRating);
  }

  onRatingChange($event: RatingChangeEvent): void {
    console.log('single onRatingChange rating: ', $event.rating);
    this.bindingsForm.get('rating').setValue($event.rating);
  }

  updateGetColorBinding() {
    if (!this.bindingsForm.get('useCustomCetColor').value) {
      this.bindingsForm.get('getColor').setValue(this._getColor);
    }
    else {
      this.bindingsForm.get('getColor').setValue(undefined);
    }
  }

  updateGetHalfStarVisibleBinding() {
    this.bindingsForm.get('useCustomGetHalfStarVisible')
      .valueChanges
      .takeUntil(this.onDestroy$)
      .subscribe(
        (v) => {
          if (v) {
            this.bindingsForm.get('getHalfStarVisible').setValue(this._getHalfStarVisible);
          }
          else {
            this.bindingsForm.get('getHalfStarVisible').setValue(() => {
            });
          }
        }
      )
  }

  _getColor(rating: number | string, numOfStars: number, staticColor: string): string {
    return 'default';
  }

  _getHalfStarVisible(rating: number): boolean {
    console.log('getHalfStarVisible rating: ', rating, rating % 1);
    return (rating < 3);
  }

}
