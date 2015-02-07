'use strict';

/**
 * @ngdoc function
 * @name chdApp.controller:ZipKidCtrl
 * @description
 * # ZipKidCtrl
 * Controller of the chdApp
 */
angular.module('chdApp')
  .controller('ZipKidCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.results = [
    	{name:'Joey', age:7, gender:'m', attentionSpan:90},
    	{name:'Tommy', age:5, gender:'m', attentionSpan:90},
    	{name:'Bella', age:4, gender:'f', attentionSpan:90},
    	{name:'John', age:8, gender:'m', attentionSpan:90},
    	{name:'Jenny', age:7, gender:'f', attentionSpan:90},
    	{name:'Kristy', age:3, gender:'f', attentionSpan:90},
    	{name:'Chad', age:28, gender:'m', attentionSpan:90},
    ]


    $scope.slides = [
            {image: 'images/img00.jpg', description: 'Image 00'},
            {image: 'images/img01.jpg', description: 'Image 01'},
            {image: 'images/img02.jpg', description: 'Image 02'},
            {image: 'images/img03.jpg', description: 'Image 03'},
            {image: 'images/img04.jpg', description: 'Image 04'}
        ];

        
  });
