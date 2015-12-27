'use strict';
/**
 * @ngdoc service
 * @name prezTimer.prez
 * @description
 * # prez
 * Service in the prezTimer.
 */
angular.module('prezTimer')
  .service('prezService', function () {
// AngularJS will instantiate a singleton by calling "new" on this function
    this.prez = {title: '',
                        totalSlides: 0,
                        currentSlide: 0,
                      endTime:'2015-11-01T20:25:43.511Z'};
  });
